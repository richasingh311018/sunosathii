# SunoSaathii — Working Prototype
# SunoSaathii

AI-powered financial safety companion for low-literacy, first-time, and rural/semi-urban users — helps people understand financial documents before they sign.

## Features

- **Document Risk Scan** — scan/upload a loan or financial document, get OCR + rule-based risk analysis with a 🟢 Low / 🟡 Caution / 🔴 High Risk verdict
- **Multi-language support** — 11 Indian languages, selected at onboarding and applied across the entire app
- **Saathi (AI companion)** — animated 2D avatar that explains results by voice, with expression changes based on risk level
- **Tri-sensory alerts** — visual badge + audio explanation + haptic vibration pattern for each risk level
- **Community Voice Experiences** — users record real experiences in their own language; auto-translated and rendered as short 2D avatar videos for other users, with a verification workflow
- **Bank Mitra** — connects users to a real, verified human via in-app call request or direct phone dialer redirect
- **Saathi Points & badges** — non-monetary rewards for verified, helpful community contributions
- **Accessibility Suite** — high contrast mode, large text, voice navigation, haptic pattern testing
- **Demo Mode** — Safe / Caution / High-Risk sample documents to try the full flow instantly

## Architecture

An inclusive AI-powered financial safety companion prototype (React + Tailwind).

## Run locally

```bash
npm install
npm run dev
```

Then open the printed local URL (typically http://localhost:5173).

## Build

```bash
npm run build
npm run preview
```

## What's inside

- `src/App.jsx` — the full app: onboarding, language selection, home dashboard,
  document scan (with Safe / Caution / High-Risk demo buttons), OCR + risk analysis
  simulation, traffic-light result with Saathi avatar + haptic + audio explanation,
  Community voice experiences (with mock translation + verification), Ask Saathi chat,
  Bank Mitra request + staff dashboard, Accessibility settings, Profile with Saathi
  Points, and a closing pitch screen.

## Notes on scope

- Hindi and English strings are fully written out; other languages are selectable
  and clearly labelled as mock-translated for this prototype — swap in a real
  translation/OCR/speech API later via the same data layer.
- Haptic feedback uses the real Web Vibration API when opened on a supported device.
