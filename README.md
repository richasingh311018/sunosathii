# SunoSaathi — Working Prototype

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
