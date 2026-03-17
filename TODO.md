# Scroll Smoothness & Issues Fix TODO

## Plan Steps:
- [x] 1. Update NavBar.jsx: Throttle scroll handler with RAF, add passive: true
- [ ] 2. Update App.jsx: Remove scroll-smooth! override, tune Galaxy props (density=0.5, rotationSpeed=0.05, repulsionStrength=1)
- [ ] 3. Update index.css: Ensure consistent scroll-behavior
- [ ] 4. Test scroll performance
- [ ] 5. Audit other issues (console, lighthouse)

Current: Starting step 1.
