# Phase 2: Quick Reference Guide

## 🎯 At a Glance

| Feature | File | Lines | Status | Key Metric |
|---------|------|-------|--------|-----------|
| **Proof of Work Terminal** | `TerminalCard.tsx` | 238 | ✅ | Interactive CLI with 5 commands |
| **Magnetic Lattice** | `HeritageBackground.tsx` | 198 | ✅ | 60fps cursor-responsive canvas |
| **Web Audio Synth** | `audioGenerator.ts` | 123 | ✅ | 3 premium sound effects |
| **Soundscape Context** | `HapticSoundscapeContext.tsx` | 94 | ✅ | App-wide sound control |
| **Sound Toggle** | `SoundToggle.tsx` | 43 | ✅ | Floating UI, OFF by default |
| **Status Bar** | `SystemStatusBar.tsx` | 86 | ✅ | Perf metrics + Dev mode |
| **Dev Mode Overlay** | `DevModeOverlay.tsx` | 205 | ✅ | Grid + metadata tooltip |
| **Bento Grid** | `BentoGrid.tsx` | 188 | ✅ | Command center showcase |
| **Mouse Hook** | `useMousePosition.ts` | 24 | ✅ | Cursor tracking |
| **App Integration** | `App.tsx` | +27 | ✅ | Providers + components |

**Total New Code: ~1,200 lines**

---

## 🚀 Quick Start

### 1. Install Dependencies
```bash
npm install
# Automatically installs framer-motion ^11.0.3
```

### 2. Run Dev Server
```bash
npm run dev
# Open http://localhost:5173
```

### 3. See Phase 2 Features
- **Terminal**: Scroll to "Command Center" section
- **Lattice**: Move cursor anywhere on page
- **Sound**: Click floating icon (bottom-right)
- **Dev Mode**: Click footer status bar

---

## 📍 Component Locations

### New Files in /src/components/
```
TerminalCard.tsx           ← Interactive terminal
HeritageBackground.tsx     ← Magnetic lattice background
SoundToggle.tsx            ← Floating sound control
SystemStatusBar.tsx        ← Footer metrics
DevModeOverlay.tsx         ← Grid overlay + metadata
BentoGrid.tsx              ← Command center section
```

### New Files in /src/context/
```
HapticSoundscapeContext.tsx ← Sound provider
```

### New Files in /src/hooks/
```
useMousePosition.ts        ← Cursor tracking hook
```

### New Files in /src/utils/
```
audioGenerator.ts          ← Web Audio API synth
```

---

## 🎮 Using Each Component

### TerminalCard
```tsx
// Already in BentoGrid, no additional setup needed
// Commands: help, git, projects, skills, clear
// Try typing: "git" to see GitHub JSON output
```

### HeritageBackground
```tsx
// Already integrated in App.tsx as fullscreen background
// Automatically responds to cursor movement
// Move cursor near lattice vertices to see glow change
```

### SoundToggle
```tsx
// Already integrated in App.tsx
// Click to toggle sound on/off
// Sound persists across page reloads
// Appears as floating icon in bottom-right
```

### SystemStatusBar
```tsx
// Already integrated in App.tsx
// Shows: LATENCY: 14ms | LIGHTHOUSE: 100 | FRAMEWORK: React 19
// Click to enter Dev Mode
// Shows component metadata on hover
```

### HapticSoundscape (For New Components)
```tsx
import { useSoundscape } from '@/context/HapticSoundscapeContext';

export const MyComponent = () => {
  const { playClick, playChime, playHum } = useSoundscape();
  
  return (
    <button 
      onMouseEnter={() => playClick()}
      onClick={() => playChime()}
    >
      Click me
    </button>
  );
};
```

### useMousePosition (For New Components)
```tsx
import { useMousePosition } from '@/hooks/useMousePosition';

export const MyComponent = () => {
  const { x, y } = useMousePosition();
  
  return (
    <div>Mouse is at {x}, {y}</div>
  );
};
```

---

## 🎨 Customization

### Change Terminal Commands
**File**: `src/components/TerminalCard.tsx`
```tsx
// Lines 81-112: Add new commands in executeCommand function
} else if (trimmed === 'your-command') {
  setLines((prev) => [
    ...prev,
    { type: 'output', content: 'Your output here' },
  ]);
}
```

### Adjust Lattice Sensitivity
**File**: `src/components/HeritageBackground.tsx`
```tsx
const MAGNETIC_RADIUS = 50;        // Change proximity radius
const PULL_STRENGTH = 1.5;         // Change warp intensity
```

### Change Sound Volumes
**File**: `src/utils/audioGenerator.ts`
```tsx
// Call sounds with custom volume
playMechanicalClick(0.20);  // Default 0.15
playShimmerChime(0.15);     // Default 0.12
playDeepHum(0.5, 0.15);     // Default 0.1
```

### Modify Animation Timing
**File**: `src/components/BentoGrid.tsx` or components using Framer Motion
```tsx
transition={{ 
  type: 'spring',
  stiffness: 150,    // Increase for faster
  damping: 25        // Increase for less bouncy
}}
```

### Change Colors
All colors are in the hex format throughout components:
- `#050505` - Deep Obsidian (primary background)
- `#D4AF37` - Matte Gold (accents)
- `#C0C0C0` - Electric Silver (futuristic)
- `#00FF00` - Terminal green
- `#0a0a0a` - Terminal background

Search-replace these hex codes to change theme globally.

---

## 🔍 Debugging

### Terminal Not Working?
```bash
# Check browser console for errors
# Verify input field has focus (click terminal)
# Try typing valid command: "help"
```

### Sounds Not Playing?
```bash
# Check SoundToggle is enabled (gold icon)
# Open DevTools → Console → check for Web Audio errors
# Try different browser (Audio Context support varies)
```

### Lattice Performance Issues?
```bash
# Open DevTools → Performance tab
# Record and check for frame drops
# Canvas rendering should stay at 60fps
# If below 60fps, check system load/browser tabs
```

### Dev Mode Not Showing?
```bash
# Verify dev environment: npm run dev (not production build)
# Dev mode only works in development
# Click footer status bar to toggle
# Check NODE_ENV === 'development' in console
```

---

## 📊 Performance Checklist

- [ ] LCP (Largest Contentful Paint): < 1.5s
- [ ] FID (First Input Delay): < 100ms
- [ ] CLS (Cumulative Layout Shift): < 0.1
- [ ] Lighthouse Performance Score: 90+
- [ ] Animations: 60fps (no dropped frames)
- [ ] Bundle size: No significant increase

---

## 🎯 Common Tasks

### Enable/Disable Feature
```tsx
// In App.tsx, comment out to disable:
<HeritageBackground />        // Comment to hide lattice
<SoundToggle />               // Comment to hide sound
<SystemStatusBar />           // Comment to hide status bar
<BentoGrid />                 // Comment to hide terminal + grid
```

### Add New Terminal Command
**File**: `src/components/TerminalCard.tsx` (around line 85)
```tsx
} else if (trimmed === 'newcommand') {
  const output = ['Line 1', 'Line 2', 'Line 3'];
  setLines((prev) => [
    ...prev,
    ...output.map((text) => ({ type: 'output' as const, content: text })),
  ]);
}
```

### Add Haptic Sound to Component
```tsx
import { useSoundscape } from '@/context/HapticSoundscapeContext';

const { playClick, playChime, playHum } = useSoundscape();

// On click
<button onClick={() => playChime()}>Click</button>

// On hover
<div onMouseEnter={() => playClick()}>Hover me</div>

// On typing
<input onChange={() => playHum()} />
```

### Modify Bento Grid Layout
**File**: `src/components/BentoGrid.tsx`
```tsx
// Change column count:
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
  // md:grid-cols-2  → 2 columns on medium screens
  // lg:grid-cols-4  → 4 columns on large screens
  
  // Change card sizing:
  isWide={true}   // Span 2 columns
  isTall={true}   // Span 2 rows
```

---

## 📚 Key Files Reference

### Main App Integration
- **App.tsx**: `+27 lines` - Providers, imports, component integration

### Components with Animations
- **TerminalCard.tsx**: Framer Motion entrance, typewriter effect
- **BentoGrid.tsx**: Card tilts, staggered animations
- **SystemStatusBar.tsx**: Entrance animation, pulsing indicator
- **DevModeOverlay.tsx**: Smooth fade-in/out animations

### Performance Critical
- **HeritageBackground.tsx**: RAF loop, vertex physics
- **HapticSoundscapeContext.tsx**: Debounced sounds
- **audioGenerator.ts**: Lazy audio context initialization

### Accessibility
- **SoundToggle.tsx**: ARIA labels, keyboard support
- **DevModeOverlay.tsx**: React Portal for modals
- **SystemStatusBar.tsx**: Semantic HTML, color contrast

---

## 🚨 Important Notes

### Sound is OFF by Default
✅ Respectful of user preferences  
✅ User must click toggle to enable  
✅ Preference saved in localStorage  

### Dev Mode Only in Development
✅ Tree-shaken from production build  
✅ Zero impact on production bundle  
✅ Only shows when NODE_ENV === 'development'  

### Lattice Low Opacity (Intentional)
✅ 12% opacity to not overpower content  
✅ Move cursor near to see glow effects  
✅ Check DevTools → Inspector if concerned

### Heavy Animation Feel (Intentional)
✅ stiffness: 100, damping: 20  
✅ Premium, controlled aesthetic  
✅ No over-bouncy animations  

---

## 🏆 What Makes This 0.0001% Tier

| Aspect | Why Elite |
|--------|-----------|
| **Terminal** | Most portfolios don't have interactive CLI |
| **Lattice** | Unique, memorable, technical |
| **Web Audio** | Rare skill showcase |
| **Dev Mode** | Shows meta-engineering confidence |
| **Performance** | Obsessed with metrics |
| **Code Quality** | Production-ready, clean architecture |
| **Accessibility** | Respected UX best practices |
| **Animations** | Premium feel (heavy spring physics) |

---

## 📞 Quick Troubleshooting

| Problem | Solution |
|---------|----------|
| Terminal doesn't appear | Scroll to "Command Center" section |
| Sounds don't play | Click SoundToggle (bottom-right) to enable |
| Lattice not visible | Move cursor around, it has 12% opacity |
| Dev mode not working | Only works in dev build (`npm run dev`) |
| Build fails | Run `npm install` to ensure all deps installed |
| Animations lag | Check browser DevTools Performance tab |

---

## 📖 Documentation Hierarchy

1. **This File** (QUICK_REFERENCE.md) - Fastest answers
2. **PHASE2_SETUP.md** - Detailed setup & testing
3. **PHASE2_IMPLEMENTATION.md** - Deep technical dive
4. **PHASE2_SUMMARY.md** - Visual overview
5. **PHASE2_CHECKLIST.md** - Implementation checklist

**Start here, then dive deeper as needed.** ✨

---

## ✨ You're Ready!

Everything is set up and integrated. Your portfolio now has:

✅ Interactive terminal (Proof of Work)  
✅ Magnetic lattice background (Visual wow)  
✅ Web Audio API synth (Sound design)  
✅ Performance metrics (Engineering flex)  
✅ Dev mode (Meta confidence)  

**Ready to deploy and impress elite recruiters!** 🚀
