# Copy Audit — Juan Pablo Tazzioli Portfolio

**Date:** 2026-04-17
**Scope:** 12 project entries in `src/lib/i18n/dictionaries/en.ts`
**Framework:** Research-based best practices for senior industrial designer portfolios (see previous deep research)
**Reference:** Rajesh Kutty portfolio audit

---

## Executive summary

Juan's portfolio copy has **strong bones but serious inconsistencies**. The tone avoids hyperbole, the vocabulary is refined, and the project descriptions are technically accurate. But:

1. **Subtitles are inconsistent in length** — 8 proyectos tienen ~4-5 words, 4 proyectos tienen 20-22 words (3-4× más largos)
2. **"My Contribution" varies 5× in length** — 21 words (BOW) vs. 103 words (L380)
3. **"Process" is just a software list** — no real process explained
4. **Voice inconsistency** — 11 proyectos en primera persona ("I"), 1 en voz pasiva (L380)
5. **Zero quantified outcomes** — no metrics anywhere, weakens senior positioning
6. **Overused words** — "refined", "premium", "luxury" aparecen en 6+ proyectos, se auto-devalúan

The overall feel is **competent but undifferentiated**. Projects read as technically similar execution across different product categories, without the thematic coherence that would position Juan as a multidisciplinary senior with a clear perspective.

---

## 1. Word count table

| Project | Title (chars) | Subtitle (words/chars) | Description (words) | My Contribution (words) | Process (words) |
|---|---|---|---|---|---|
| shiftcore-footwear | 35 | 4 / 33 | 29 | 29 | 22 |
| bow-timepiece | 31 | 5 / 41 | 52 | 21 | 15 |
| bugatti-steering-wheel | 40 | 4 / 28 | 75 | 24 | 12 |
| chopard-clock | 45 | 5 / 39 | 106 | 48 | 12 |
| luxury-ev-steering-wheel | 34 | 4 / 29 | 85 | 52 | 20 |
| speaker-concept | 32 | 5 / 29 | **24** ⚠️ | 41 | 20 |
| pagani-steering-wheel | 31 | 4 / 31 | 51 | 22 | 12 |
| **levc-insignia** | **62 ⚠️** | **20 / 149 ⚠️** | 67 | 45 | 27 |
| **luxury-ev-knob** | 41 | **21 / 155 ⚠️** | 44 | 57 | 28 |
| **levc-l380** | 45 | **22 / 158 ⚠️** | 54 | **103 ⚠️** | 24 |
| **luxury-ev-console** | 34 | **22 / 145 ⚠️** | 90 | 66 | 18 |
| modular-signage | 46 | 4 / 36 | 60 | 47 | 11 |

**Range (min–max):**
- Subtitle: 28–158 chars (5.6× difference)
- Description: 24–106 words (4.4×)
- My Contribution: 21–103 words (4.9×)
- Process: 11–28 words

Target proportional consistency requires max 2× range between shortest and longest.

---

## 2. Critical inconsistencies

### 2a. Subtitles: two completely different patterns

**Pattern A (8 projects):** Short category tagline, 4-5 words, 28-41 chars.
- "Modular adaptive footwear system"
- "Luxury nautical-inspired mechanical watch"
- "Luxury steering wheel concept" (generic, could describe any project)
- "Turbine-inspired luxury clock concept"
- "Premium EV interior interface"
- "An instrument behind the door" ← **the only poetic/evocative one**
- "Oval-driven luxury interface"
- "Adaptive public infrastructure concept"

**Pattern B (4 projects):** Full descriptive sentence, 20-22 words, 145-158 chars.
- LEVC Insignia: "Translation of an approved 2D identity into a refined, production-ready 3D emblem developed for a new generation of electric vehicles."
- Knob: "A compact interaction component designed to combine luxury materiality, tactile control and multiple digital functions within a single refined object."
- L380: "Production-oriented rear cabin development for two bespoke L380 variants, focused on divider architecture, service modules and integrated interior details."
- Console: "A center console concept for a premium electric vehicle, combining clean architectural lines, crystal-integrated detailing and multifunctional user interaction"

**Diagnosis:** Pattern B entries copied the docx subtitle (which was written as a description, not a subtitle). These read as overview text in the wrong field.

**Fix:** Compress Pattern B subtitles to match Pattern A format (target: 40-70 chars, 6-12 words). Example:
- LEVC Insignia: "Production-ready 3D emblem for a new electric generation" (55 chars)
- Knob: "Compact control for luxury EV interiors" (39 chars)
- L380: "Bespoke rear cabin architecture for two L380 show vehicles" (58 chars)
- Console: "Crystal-integrated control surface for luxury EV" (48 chars)

### 2b. Voice inconsistency — L380 breaks the pattern

11 projects use first person active:
- "I developed the project..."
- "I focused on..."
- "I worked on..."

**1 project uses passive/third-person** (L380):
> "Within the interior design team, **the contribution focused strongly on**..."

This makes L380 read like a corporate bio entry, while the other 11 sound like Juan speaking.

**Diagnosis:** L380 was likely written for an internal LEVC document and copy-pasted without adapting.

**Fix:** Rewrite L380 My Contribution in first person to match. Consider if "we" would be more accurate since it was a team project (and use "we" consistently across all team projects if so).

### 2c. "My Contribution" length varies 5×

- **Shortest:** BOW (21 words), Bugatti (24), Pagani (22), Shiftcore (29)
- **Mid-range:** Speaker (41), Chopard (48), Luxury EV Steering (52), Knob (57)
- **Outlier:** L380 (103 words) ← 3-5× longer than shortest

The L380 outlier makes that project feel disproportionately important, while the short ones (BOW/Pagani/Bugatti) feel like afterthoughts.

**Fix:** Target 40-60 words across all. Cut L380 in half. Expand BOW/Pagani/Bugatti to describe specific contributions, not just "I developed the steering wheel through form refinement, 3D modelling".

### 2d. "Process" is a software list, not a process

Every project's Process field is a comma-separated list of tools:
- "Rhino, KeyShot and AI-assisted visual workflows" (Pagani, Bugatti)
- "Rhinoceros 3D, KeyShot and Photoshop" (Modular Signage)
- "Concept development, Rhinoceros 3D, KeyShot and AI-assisted animation workflows" (Chopard)

The research framework recommends Process as a **3-4 sentence narrative** describing how the designer approached the problem — research → ideation → validation.

**What this looks like now** (Pagani): *"Rhino, KeyShot and AI-assisted visual workflows for animation and presentation."* — tells us nothing about how Juan thinks.

**What it should be** (Pagani example): *"I started from Pagani's visual DNA — the oval, the quad-exhaust — and treated them as geometric primitives. Three rounds of form exploration in Rhino, with material trials in KeyShot to validate how tan leather and olive variants communicate different driver personalities. AI-assisted workflows supported variant exploration and presentation renders."*

**Fix priority: HIGH.** This is the single biggest copywriting opportunity. Process is where senior designers demonstrate thinking, not just tool proficiency.

---

## 3. Repeated vocabulary (overuse of premium signaling)

Words appearing in 6+ project descriptions (devalue through repetition):

| Word | Appears in |
|---|---|
| "refined" / "refinement" | 9 projects |
| "premium" | 7 projects |
| "luxury" | 8 projects |
| "concept" | 11 projects (in title) |
| "integration" / "integrated" | 8 projects |
| "development" | 7 projects |

**Diagnosis:** These words are all correct individually. Together they create a monotone where every project sounds like every other project. A reader scanning the portfolio gets the impression of sameness, not range.

**Fix:**
- Keep "refined" for 2-3 projects max; swap the rest for more specific verbs
- Replace "premium" with specific proofs where possible (brand names, material specifics, price tier)
- Vary "concept" — try "study", "proposal", "exploration" for some projects
- Cut "integration" by rewriting sentences around action verbs

---

## 4. Passive voice occurrences

Passive constructions hide agency. Examples from current copy:

| Project | Passive construction |
|---|---|
| Chopard | "The proposal was conceived as a potential conceptual collaboration" |
| Console | "The project was also developed alongside full-scale prototyping" |
| Bugatti | "Developed as part of the Bugatti Millenium project" |
| L380 | "the contribution focused strongly on" |
| Speaker | *(no significant passive)* |

**Fix:** Rewrite in active voice. Chopard: "I proposed it as a conceptual collaboration with Chopard." Console: "I developed it alongside full-scale prototyping." Bugatti: "I developed it as part of the Bugatti Millenium project." L380: "Within the interior team, I led the rear divider architecture."

---

## 5. Absent elements (from research framework)

### 5a. No quantified outcomes in any project
None of the 12 projects mention numbers:
- Production volume (if LEVC emblem is on shipping vehicles, how many?)
- Weight savings, cost reduction, user testing results
- Material constraints solved
- Team size led
- Budget / deadline

**Impact:** Senior positioning weak without impact metrics. Rajesh Kutty gets away with this because his brand names (Bentley EXP 100GT) carry implicit impact. Juan's brand names (LEVC, BeyonCa) don't have the same instant recognition, so he needs to explicitly demonstrate impact.

**Fix priority: MEDIUM.** For each project, add 1-2 concrete proofs where they exist. If LEVC Heritage Emblem is on the L380, say so: *"Now applied to every LEVC L380 production vehicle."* That's a specific proof worth more than any adjective.

### 5b. No subtitle variety (all "object/category" framing)
100% of subtitles describe what the object is. Zero frame the problem, zero describe outcome.

Research recommends 40/35/25 distribution:
- **Object (40%):** "Modular adaptive footwear system" ✓ (8 projects use this)
- **Problem/challenge (35%):** *"Reducing interface complexity in a luxury EV cabin"* ← none use this
- **Outcome (25%):** *"A B&O-style speaker integrated into the door architecture"* ← none use this

**Fix:** Convert 3-4 subtitles to problem framing, 2-3 to outcome framing. Creates variety, signals different dimensions of design thinking.

---

## 6. Issues per project (specific fixes)

### shiftcore-footwear
- ⚠️ Description very short (29 words) — expand to match portfolio baseline
- ✓ Subtitle OK
- **Process** is just tools list
- Title word "Concept" — OK since it's speculative

### bow-timepiece
- ⚠️ My Contribution very short (21 words) — misses the strap integration innovation
- ✓ Description OK
- **Process** is tools list
- Subtitle "Luxury nautical-inspired mechanical watch" — 3 adjectives stacked, feels weak

### bugatti-steering-wheel
- ⚠️ Subtitle "Luxury steering wheel concept" is **generic** — could describe any steering wheel project. Needs Bugatti-specific angle
- ⚠️ My Contribution very short (24 words) — doesn't mention fingerprint start, digital displays integration
- Description name-drops "Chiron" but doesn't explain the interpretive angle clearly

### chopard-clock
- ✓ Subtitle good
- ⚠️ Description too long (106 words) — 2nd longest, vs BOW at 52
- Title contains "Chopard" even though mockup of Work page dropped it ("Clock Concept for Luxury EV Interior"). **Decide now:** keep brand name or not, and apply consistently across all projects that reference brands (Bugatti, Pagani, Chopard)

### luxury-ev-steering-wheel
- ✓ Subtitle OK
- ✓ Length OK
- Subtitle "Premium EV interior interface" — too abstract; wheel ≠ interface

### speaker-concept
- ⚠️ **Description only 24 words** — shortest of all 12 projects. Feels thin vs Chopard (106)
- ✓ Subtitle "An instrument behind the door" — the only poetic subtitle in the portfolio. **Juan's strongest tagline.** Use this as model for others.

### pagani-steering-wheel
- ⚠️ My Contribution very short (22 words) — doesn't mention material variants explored, doesn't mention the Huayra reference
- ✓ Subtitle OK

### levc-insignia
- 🚨 **Title 62 chars** — too long for Work grid. The mockup shows "LEVC Brand Insignia Redesign" (29 chars). **Decide:** work grid title ≠ project page title? Or pick one
- 🚨 **Subtitle 149 chars** — 3× target length. Read as description, not subtitle
- ✓ Description OK but mentions "L380" without explaining it

### luxury-ev-knob
- 🚨 **Subtitle 155 chars** — way too long
- ⚠️ My Contribution 57 words — borderline long

### levc-l380
- 🚨 **Subtitle 158 chars** — longest in portfolio, way too long
- 🚨 **My Contribution 103 words** — 5× longer than BOW (21). Also in passive voice / third person
- 🚨 **Voice** different from all other projects

### luxury-ev-console
- 🚨 **Subtitle 145 chars** — too long
- ⚠️ Description 90 words — at upper range

### modular-signage
- ✓ Subtitle OK
- ✓ Length OK
- Title "Modular Urban Signage and Infrastructure System" — mockup of Work shows shorter "Modular Urban Signage System". **Decide.**

---

## 7. Prioritized fix list (order of impact)

**HIGH priority (fix first, most impact):**

1. **Compress the 4 long subtitles** (LEVC, Knob, L380, Console) to 40-70 chars each.
2. **Rewrite L380 My Contribution** in first person to match voice of other 11 projects.
3. **Rewrite all 12 "Process" fields** as 2-3 sentence narratives, not tool lists.
4. **Normalize My Contribution length** to 40-60 words across all projects. Expand BOW/Pagani/Bugatti; cut L380.

**MEDIUM priority:**

5. **Add concrete proofs** where they exist (LEVC emblem → "applied to LEVC L380 production vehicles", Bugatti → timeline/scope, etc.).
6. **Vary subtitle framing** — convert 3-4 from object-framing to problem or outcome-framing.
7. **Reduce repeated vocabulary** — cap "refined" at 3 uses, "premium" at 3, "luxury" at 4 across the 12 projects.
8. **Resolve title inconsistency** with Work grid mockup (LEVC Heritage vs. Brand Insignia; Chopard vs. Clock Concept; Signage "and Infrastructure" vs. short).

**LOW priority:**

9. Convert passive constructions to active voice.
10. Replace generic "Concept" in some titles for variation.
11. Add dates (year completed) to each project for context.

---

## 8. About page — bonus audit

Current Juan About bio (`en.ts`):
> "I am an industrial designer with 8+ years of experience across premium automotive interiors, luxury product design and advanced 3D development. My work focuses on translating ideas into well-resolved components through a combination of concept thinking, formal refinement, material sensitivity and production-aware modelling."

**Diagnosis vs. Rajesh Kutty About:**
- ✓ Clear 8+ years experience
- ✓ Active first person
- ❌ Opens with generic "industrial designer" — fails to hook
- ❌ Mentions "premium automotive interiors" first — reinforces automotive pigeonhole
- ❌ "formal refinement, material sensitivity" — abstract, no specifics

**Rajesh opener that works:** *"Creating most things from sneakers and NFTs to drones and music consoles."*

**Suggested Juan opener** (following Rajesh model but with Juan's specifics):
> *"Designing across premium EV interiors, luxury watches, urban systems and footwear — from production-ready emblems on shipping LEVC vehicles to independent concepts developed end-to-end."*

That opening immediately declares range (4 categories named), anchors credibility (LEVC shipping), and signals independent capability ("end-to-end").

---

## 9. Summary recommendation

Before building the `portfolio-copywriter` agent, fix the 4 HIGH priority items manually:
1. Compress 4 long subtitles
2. Rewrite L380 in first person
3. Convert Process fields to narratives
4. Normalize My Contribution length

These 4 fixes alone will make the portfolio feel **measurably more consistent and senior**. After that, the agent can handle ongoing copy work (new projects, A/B variations, i18n consistency) without having to fix systemic issues first.
