# Phase 2: Quick Setup & Testing Guide

## Installation

The Framer Motion dependency has been automatically added to `package.json`:

```bash
npm install
# or
pnpm install
# or
yarn install
```

No additional setup required—all dependencies are in place.

---

## Component Overview

### 1. TerminalCard.tsx
**Location**: `src/components/TerminalCard.tsx`

**What It Does**: Interactive Linux terminal simulator inside the Bento Grid

**Commands**:
- `help` - Show available commands
- `git` - GitHub activity JSON (repos, stats)
- `projects` - Hackathon wins and achievements
- `skills` - Tech stack and expertise
- `clear` - Reset terminal

**How to Test**:
1. Open the portfolio in dev mode
2. Scroll to the "Command Center" (Bento Grid) section
3. Click the terminal card and type commands
4. Watch the typewriter effect on load

---

### 2. HeritageBackground.tsx
**Location**: `src/components/HeritageBackground.tsx`

**What It Does**: Fullscreen canvas with magnetic geometric lattice

**Interaction**:
- Move your cursor near the lattice vertices
- Watch them warp toward your cursor
- See the glow change from silver (default) to gold (near cursor)
- Notice the smooth spring-back effect when you move away

**How to Test**:
1. Open portfolio
2. Move cursor around the screen
3. Look for the geometric pattern to respond
4. If you don't see it clearly, the opacity is intentionally low (12%) for subtlety
5. Open DevTools → Inspect canvas element to verify it's rendering

---

### 3. SoundToggle.tsx
**Location**: `src/components/SoundToggle.tsx`

**What It Does**: Floating sound control (bottom-right corner)

**Features**:
- OFF by default (respects UX best practices)
- Click to toggle sound on/off
- Shows Volume2 icon when enabled (gold color)
- Shows VolumeX icon when disabled (silver color)
- Preference saved to localStorage

**How to Test**:
1. Find the floating icon in bottom-right
2. Click to toggle sound on
3. Hover over buttons/cards—you should hear subtle sounds
4. Try typing in the terminal—hear the data hum
5. Refresh page—sound state should persist

**Sound Effects**:
- **Click**: Mechanical 20ms burst (hover interactions)
- **Chime**: Shimmer ascending tones (card expansions)
- **Hum**: Deep low-frequency (terminal typing)

---

### 4. SystemStatusBar.tsx & DevModeOverlay.tsx
**Locations**: 
- `src/components/SystemStatusBar.tsx`
- `src/components/DevModeOverlay.tsx`

**What It Does**: Footer status bar with performance metrics and dev mode

**Features**:
- **Status Bar** (fixed footer):
  - Shows `LATENCY: 14ms | LIGHTHOUSE: 100 | FRAMEWORK: React 19`
  - Pulsing indicator (green when live, gold when dev mode)
  - Click to toggle dev mode

- **Dev Mode**:
  - Reveals 16px grid overlay
  - Hover over elements to see metadata tooltip:
    - Component name
    - X/Y coordinates
    - Width × Height
    - Padding value
    - Z-index
  - Green highlight box appears around hovered elements
  - Press ESC to exit or click close button

**How to Test**:
1. Scroll to bottom of page
2. Find the footer status bar
3. Click it to enable Dev Mode
4. Move cursor around—see tooltips appear
5. Inspect component dimensions and Z-indices
6. Press ESC to close

**Note**: Dev Mode only works in development environment (tree-shaken in production)

---

## BentoGrid Integration

The **TerminalCard** is integrated into **BentoGrid.tsx**, which serves as the "Command Center" section. The grid includes:

1. **Proof of Work Terminal** - TerminalCard.tsx
2. **Legacy Code Window** - Code snippet display
3. **Global Impact Metrics** - Stats cards
4. **Tech Arsenal** - Technology badges (2-column)
5. **Status Badge** - Live indicator
6. **Achievement Badge** - Latest wins

**Location in Page**: After Hero section, before About section

---

## Integration in App.tsx

Phase 2 components are already integrated:

```tsx
<HapticSoundscapeProvider>
  <div className="bg-[#0b0c10] text-[#F5F5F5] overflow-x-hidden relative">
    {/* Heritage Background - fullscreen canvas layer */}
    <HeritageBackground />
    
    {/* Main content */}
    <div className="relative z-10">
      <Navbar />
      <Hero />
      <BentoGrid />              {/* Contains TerminalCard */}
      {/* ... other sections ... */}
    </div>

    {/* Floating UI elements */}
    <SoundToggle />              {/* Bottom-right corner */}
    <SystemStatusBar />          {/* Fixed footer */}
  </div>
</HapticSoundscapeProvider>
```

---

## Testing Checklist

### Core Functionality
- [ ] Terminal Card displays initialization text on load
- [ ] Terminal accepts and executes commands correctly
- [ ] Heritage Background lattice responds to cursor movement
- [ ] Lattice vertices show gold glow when near cursor
- [ ] Sound toggle works and persists across page reloads
- [ ] Status bar shows correct metrics
- [ ] Dev mode activates on status bar click
- [ ] Dev mode tooltip shows component info accurately
- [ ] ESC key closes dev mode

### Performance
- [ ] LCP (Largest Contentful Paint) < 1.5s
- [ ] No layout shift during component load
- [ ] Smooth 60fps animations (no jank)
- [ ] Heritage Background doesn't cause performance degradation
- [ ] Sounds don't block main thread
- [ ] Dev mode doesn't appear in production build

### Accessibility
- [ ] Sound toggle has proper ARIA labels
- [ ] All buttons are keyboard accessible
- [ ] Terminal input is focusable
- [ ] Color contrast meets WCAG standards
- [ ] No console errors

### Cross-Browser
- [ ] Chrome/Chromium
- [ ] Firefox
- [ ] Safari
- [ ] Mobile browsers (iOS Safari, Chrome Mobile)

---

## Development Notes

### Key Files Modified/Created

**Modified**:
- `src/App.tsx` - Added providers, background, UI overlays
- `package.json` - Added framer-motion dependency
- `src/index.css` - Added cursor blink animation

**Created**:
- `src/components/TerminalCard.tsx` - Interactive terminal (238 lines)
- `src/components/HeritageBackground.tsx` - Magnetic lattice (198 lines)
- `src/components/SoundToggle.tsx` - Sound control (43 lines)
- `src/components/SystemStatusBar.tsx` - Status bar (86 lines)
- `src/components/DevModeOverlay.tsx` - Dev tools (205 lines)
- `src/components/BentoGrid.tsx` - Command center (188 lines)
- `src/hooks/useMousePosition.ts` - Mouse tracking hook (24 lines)
- `src/utils/audioGenerator.ts` - Web Audio API synth (123 lines)
- `src/context/HapticSoundscapeContext.tsx` - Sound context (94 lines)

### Performance Optimizations
1. HeritageBackground uses RAF for smooth physics
2. TerminalCard lazy-loaded via React.lazy()
3. Audio buffers pre-loaded on first interaction (not page load)
4. Dev mode completely tree-shaken in production
5. All animations use transform/opacity (GPU accelerated)
6. No blocking operations on main thread

### Architecture Decisions
- **Context API** for sound state (no Redux overhead)
- **Canvas** for Heritage Background (better performance than SVG for dynamic updates)
- **Custom hooks** for reusable logic (useMousePosition)
- **Framer Motion** for consistent, premium animations (stiffness: 100, damping: 20)
- **Web Audio API** for audio synthesis (no external library dependency)

---

## Troubleshooting

### Heritage Background Not Visible
- **Issue**: You can't see the geometric lattice
- **Solution**: Opacity is intentionally set to 12%. Move cursor around to see the gold glow appear. Check DevTools → Inspector to verify canvas is rendering.

### Sounds Not Playing
- **Issue**: Sound toggle is on but no audio
- **Solution**: 
  1. Check browser console for errors
  2. Verify sound toggle is enabled (gold icon)
  3. Hover over buttons/cards to trigger sounds
  4. Some browsers require user interaction before audio can play

### Dev Mode Not Showing
- **Issue**: Clicking status bar doesn't activate dev mode
- **Solution**:
  1. Ensure you're in development environment (not production build)
  2. Dev mode only works when NODE_ENV === 'development'
  3. Build with `npm run dev` (not `npm run build`)

### Terminal Input Not Working
- **Issue**: Can't type commands in terminal
- **Solution**:
  1. Click inside terminal area to focus input
  2. Type command and press Enter
  3. Check browser console for errors

---

## Next Steps (Phase 3)

- Horizontal cinematic project scroll
- Hackathon Hall of Fame expandable cards
- Updated About/Skills sections with animations
- Performance profiling and optimization

---

## Questions?

Refer to `PHASE2_IMPLEMENTATION.md` for detailed technical documentation on each component.

Enjoy your 0.0001% tier portfolio! 🚀
