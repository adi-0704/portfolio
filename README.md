# adityatyagi.dev — portfolio

Personal site for **Aditya Tyagi** — Artificial Intelligence Engineer at
pragyaa.ai, Delhi.

No framework, no build step. Three files and a folder of images.

```
index.html     structure
styles.css     design system (navy / electric blue / crimson)
main.js        renders the page from data.js
data.js        every fact on the site
assets/        illustrated portraits
```

## Changing the content

Everything personal lives in [`data.js`](data.js) — roles, experience,
projects, skills, links. Edit it and reload; there is nothing to rebuild.
Pushing to `main` redeploys automatically on Vercel.

## Design

The visual language matches the
[GitHub profile README](https://github.com/adi-0704/adi-0704): deep navy
`#070b16`, electric blue `#247bff`, crimson `#ff354f`, Archivo Black for
display type and JetBrains Mono for everything technical.

Respects `prefers-reduced-motion`: the scroll reveals, role cycling and
cursor spotlight all switch off for readers who ask for less motion.

## Credits

Portraits illustrated from a photograph of the owner.
Fonts: [Archivo Black](https://fonts.google.com/specimen/Archivo+Black) and
[JetBrains Mono](https://www.jetbrains.com/lp/mono/), both SIL OFL 1.1, and
[Inter](https://rsms.me/inter/), SIL OFL 1.1.

The launch video was recorded with
[Swarm Rebuild](https://github.com/DhvanilPatel/swarm-cursors) by Dhvanil
Patel, itself a tribute to [Swarm](https://califa.github.io/swarm-site/) by
[Joel Califa](https://joelcalifa.com). No code from either is used in this
site.
