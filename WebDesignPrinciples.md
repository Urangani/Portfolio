
# Web Design Principles

## 1. Breaking up Text
Don't write long paragraphs. Group large blocks of text into meaningful, digestible parts.  
Use short paragraphs (3–5 lines max on desktop), subheadings, and white space to give the eyes resting points. Long walls of text drive users away fast.

## 2. Use Bullet Points (and Numbered Lists)
Bullet points help users process information much more quickly.  
- They create visual breaks  
- They make key takeaways scannable  
- They improve comprehension (people often scan before they read)  
Reserve paragraphs for deeper explanations; lists for actions, benefits, features, or steps.

## 3. A Consistent Spacing System
Create consistent spacing between elements to build rhythm and professionalism.  
- Start with a baseline value (most teams use 4px or 8px increments — the famous "8pt grid")  
- Separate related groups by at least double the base unit (e.g., 16px → 32px)  
- Keep distance between big content sections similar (larger jumps like 48–96px for major blocks)  
This creates predictable breathing room and makes the layout feel intentional rather than random.

## 4. Line Height Ratios
Use proper line height (leading) to make text comfortable to read.  
- Body text: Aim for **1.45–1.6×** the font size (most common sweet spot: ~1.5–1.55)  
  - 16px font → 24–26px line height  
- Headings: Tighter — usually **1.1–1.3×** (headings are short, so they need less vertical space)  
- Longer lines need slightly more line height; shorter lines (e.g. mobile or cards) can use less  
Too tight = dense and tiring. Too loose = text feels disconnected. Test with real content.

## 5. Optimal Line Length
Keep lines readable by controlling how many characters fit on one line.  
- Ideal range: **50–75 characters** per line (including spaces) for body text (~60 is the gold standard)  
- On very wide screens: use max-width on text containers (e.g. 65–80ch in CSS)  
- Mobile: naturally shorter lines are fine — focus on avoiding very short "orphans"  
Shorter lines = easier to follow. Longer lines = reader gets lost jumping back to the start.

## 6. Clear Visual Hierarchy
Guide the eye with size, weight, color, and spacing — don't make everything shout equally.  
- Biggest → most important (H1 headline)  
- Then subheadings (H2, H3), then body text  
- Use bold/strong, color accents, or larger sizes sparingly for emphasis  
- Whitespace around important elements makes them stand out more than any effect

## 7. Sufficient Contrast & Readable Typography
Ensure text is legible for everyone (also helps accessibility & SEO).  
- Contrast ratio at least **4.5:1** for normal text (WCAG AA standard)  
- Choose clean, highly legible fonts (system fonts like Inter, Roboto, or system-ui stack perform great)  
- Body text minimum **16px** (many now push 17–18px for better readability)  
- Avoid justified text on the web (creates uneven spacing rivers)

## 8. Mobile-First & Responsive Foundations
Design for small screens first — it forces simplicity and better UX overall.  
- Start layouts on mobile → scale up  
- Touch targets minimum ~44×44px  
- Readable without zooming (fluid typography + proper viewport meta tag)

These principles focus heavily on **readability** and **scannability** — the foundation of good UX in 2026. When applied together, they make content feel effortless to consume, reduce bounce rates, and help users find what they need quickly.
