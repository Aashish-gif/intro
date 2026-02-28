import React, { useEffect, useRef } from 'react';
import { useMousePosition } from '../hooks/useMousePosition';

interface Vertex {
  x: number;
  y: number;
  originalX: number;
  originalY: number;
  vx: number;
  vy: number;
}

const HeritageBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mousePos = useMousePosition();
  const verticesRef = useRef<Vertex[]>([]);
  const animationFrameRef = useRef<number>();

  // Initialize mandala/jali geometry lattice
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const width = canvas.width;
    const height = canvas.height;
    const gridSize = 80;
    const vertices: Vertex[] = [];

    // Create geometric lattice pattern
    for (let x = -gridSize; x < width + gridSize; x += gridSize) {
      for (let y = -gridSize; y < height + gridSize; y += gridSize) {
        vertices.push({
          x,
          y,
          originalX: x,
          originalY: y,
          vx: 0,
          vy: 0,
        });
      }
    }

    // Add diagonal pattern for mandala effect
    for (let i = 0; i < vertices.length; i++) {
      const v = vertices[i];
      if ((v.x / gridSize + v.y / gridSize) % 2 === 0) {
        const angle = Math.atan2(v.y - height / 2, v.x - width / 2);
        v.x += Math.cos(angle) * gridSize * 0.5;
        v.y += Math.sin(angle) * gridSize * 0.5;
        v.originalX = v.x;
        v.originalY = v.y;
      }
    }

    verticesRef.current = vertices;
  }, []);

  // Animation loop with magnetic effect
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const MAGNETIC_RADIUS = 50;
    const PULL_STRENGTH = 1.5;

    const animate = () => {
      const width = canvas.width;
      const height = canvas.height;

      // Clear canvas
      ctx.fillStyle = 'rgba(5, 5, 5, 0.98)';
      ctx.fillRect(0, 0, width, height);

      const vertices = verticesRef.current;

      // Update vertex positions based on mouse proximity
      vertices.forEach((vertex) => {
        const dx = mousePos.x - vertex.x;
        const dy = mousePos.y - vertex.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < MAGNETIC_RADIUS) {
          const angle = Math.atan2(dy, dx);
          const pullDistance = (MAGNETIC_RADIUS - distance) * PULL_STRENGTH;

          vertex.vx = Math.cos(angle) * (pullDistance * 0.08);
          vertex.vy = Math.sin(angle) * (pullDistance * 0.08);
        } else {
          // Return to original position smoothly
          const returnDx = vertex.originalX - vertex.x;
          const returnDy = vertex.originalY - vertex.y;
          vertex.vx += returnDx * 0.02;
          vertex.vy += returnDy * 0.02;
        }

        // Apply velocity with damping
        vertex.vx *= 0.85;
        vertex.vy *= 0.85;
        vertex.x += vertex.vx;
        vertex.y += vertex.vy;
      });

      // Draw lines between vertices
      ctx.strokeStyle = 'rgba(192, 192, 192, 0.08)';
      ctx.lineWidth = 1;

      vertices.forEach((v1, idx) => {
        vertices.forEach((v2, idx2) => {
          if (idx < idx2) {
            const dx = v2.x - v1.x;
            const dy = v2.y - v1.y;
            const distance = Math.sqrt(dx * dx + dy * dy);

            if (distance < 120) {
              ctx.beginPath();
              ctx.moveTo(v1.x, v1.y);
              ctx.lineTo(v2.x, v2.y);
              ctx.stroke();
            }
          }
        });
      });

      // Draw vertices with glow effect
      vertices.forEach((vertex) => {
        const dx = mousePos.x - vertex.x;
        const dy = mousePos.y - vertex.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        const isNear = distance < MAGNETIC_RADIUS;

        // Draw vertex glow
        const gradient = ctx.createRadialGradient(
          vertex.x,
          vertex.y,
          0,
          vertex.x,
          vertex.y,
          4
        );

        if (isNear) {
          // Gold glow when near cursor
          gradient.addColorStop(0, 'rgba(212, 175, 55, 0.6)');
          gradient.addColorStop(1, 'rgba(212, 175, 55, 0.1)');
        } else {
          // Silver glow normally
          gradient.addColorStop(0, 'rgba(192, 192, 192, 0.3)');
          gradient.addColorStop(1, 'rgba(192, 192, 192, 0.05)');
        }

        ctx.fillStyle = gradient;
        ctx.fillRect(vertex.x - 2, vertex.y - 2, 4, 4);
      });

      animationFrameRef.current = requestAnimationFrame(animate);
    };

    animationFrameRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [mousePos]);

  // Set canvas size
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none"
      style={{
        opacity: 0.12,
        zIndex: 0,
      }}
    />
  );
};

export default HeritageBackground;
