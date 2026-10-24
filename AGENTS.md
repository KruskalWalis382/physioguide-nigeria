<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

- Keep specialty educational detail in `src/lib/specialties.ts` and independent card state in the existing about page so content can be maintained without coupling expansion or introducing routes.

- Load web fonts with plain `<link>` tags inside the `RootShell` `<head>` in `src/routes/__root.tsx`. Never `@import` a remote URL in `src/styles.css`, and never put a remote stylesheet in a route's `head()` links: Vite's CSS build fetches remote `@import`s, so a failed fetch answers 500 for `/src/styles.css` and blanks the preview, and React suspends rendering on remote stylesheets rendered through `head()`, which hangs jsdom tests.
