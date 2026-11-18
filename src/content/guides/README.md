# How to write a travel guide

Every guide is a folder in `src/content/guides/` with an `index.md` file in it.
The folder name becomes the guide's address, so `src/content/guides/malta/` shows up
at `/travel/malta`. Keep folder names short, lowercase and with dashes
(`amalfi-coast`): the address is part of what search engines read.

Guides show up as cards in the "Guides" section of `/travel`, most recently updated first.

```
src/content/guides/malta/
  index.md
  valletta.jpg
  blue-lagoon.jpg
```

```md
---
title: Malta travel guide
place: Malta
description: Where to stay, what to eat and how to spend five days in Malta and Gozo, from someone who went in May.
cover: ./valletta.jpg
coverAlt: Balconies on a steep street in Valletta
published: 2026-11-15
updated: 2027-01-10
---

Intro paragraph…

## Where to stay

…

![The Blue Lagoon on Comino from the cliffs](./blue-lagoon.jpg)
```

## The fields

- `title`: the big headline, and the title in Google. Put the place's name first ("Malta travel guide", "Sicily in 7 days").
- `place`: the name on the guide's card and in the breadcrumb ("Travel / Malta").
- `description`: the snippet Google shows under the title. Aim for 120–160 characters. The build stops if it's longer than 170.
- `cover` and `coverAlt` (optional): a photo in the folder. It goes at the top of the guide, on its card, and in link previews when the guide is shared.
- `published`: the date the guide first went up. `updated` (optional) is the date you last changed something real in it. Google shows it.
- `draft: true`: the guide only shows while running `npm run dev`. Remove that line to publish it.

## Writing for search

- Use `##` for each main section ("Where to stay", "Where to eat"). They become the "In this guide"
  links at the top. Use `###` inside a section (one per restaurant, beach, town…).
- Don't use `#`. The title is already the page's one main heading.
- Give every photo a description in the brackets: `![what's in the photo](./file.jpg)`.
- Specific beats general: real names, prices, how long things take, what you'd skip.

Each guide page gets its own title, description, link-preview image, and structured data
(Article and breadcrumbs) automatically. Guides are added to `sitemap-index.xml` so search engines find them.
Guides are English only. The `/es/travel/…` copies tell search engines the English page is the original.
