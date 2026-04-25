# Modular Component Architecture Guide

## 📊 Component Structure Overview

```
src/components/
├── Common/
│   ├── Button.jsx                 # Base button component
│   ├── Badge.jsx                  # Badge component
│   ├── HeroBackground.jsx         # Hero background with gradient overlay
│   ├── ScrollIndicator.jsx        # Scroll indicator component
│   ├── ServiceCard.jsx            # Individual service card
│   ├── HeroBadge.jsx             # ✨ NEW: Hero badge wrapper
│   ├── HeroHeading.jsx           # ✨ NEW: Hero heading component
│   ├── HeroSubtitle.jsx          # ✨ NEW: Hero subtitle component
│   ├── HeroButtonGroup.jsx       # ✨ NEW: Hero buttons group
│   ├── SectionHeader.jsx         # ✨ NEW: Reusable section header
│   ├── SectionGrid.jsx           # ✨ NEW: Responsive grid container
│   └── SectionCTA.jsx            # ✨ NEW: Call-to-action section
├── Sections/
│   ├── HeroContent.jsx           # Composes hero sub-components
│   └── FeaturedServices.jsx      # Composes service section
└── HeroSection.jsx               # Page section wrapper
    NavBar.jsx                     # Navigation bar
```

**Usage:** Import and compose components to build UI sections. Each component is independent and reusable.
