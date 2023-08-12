- [GitHub](https://github.com/rossrobino/drab)
- [npm](https://www.npmjs.com/package/drab)
- [MIT License](https://github.com/rossrobino/drab/blob/main/LICENSE.md)
- One dependency - [Svelte](https://svelte.dev)

## About

JavaScript fuels the operation of the web and this library is designed to provide that functionality where it makes sense. Components that can be more easily created by using HTML, such as a label or a text input, are not included. Components are progressively enhanced wherever feasible, or provide a fallback [noscript](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/noscript) message. Disable JavaScript on this page to test them out!

While these components without styles can appear rather plain, having many websites look similar can also lead to a monotonous visual experience. In both cases, the word "drab" becomes quite fitting. You bring the styles for these components!

Components can be styled by [using global styles](https://joyofcode.xyz/global-styles-in-sveltekit). This can be fast-tracked by using a CSS framework like [TailwindCSS](https://tailwindcss.com/), Tailwind builds a global stylesheet based on the classes utilized in the project.

Each component exports `class` and `id` props to utilize for this purpose. If the component has multiple elements, multiple `class` and `id` props are available for each element.

## Getting Started

Pick a framework.

[SvelteKit](https://kit.svelte.dev)

```bash
npm create svelte@latest
```

[Astro](https://docs.astro.build/en/tutorial/1-setup/2/)

```bash
npm create astro@latest
```

[Vite](https://vitejs.dev/guide/)

```bash
npm create vite@latest
```

Install the package (recommended) or copy and paste the [components](https://github.com/rossrobino/drab/tree/main/src/lib/components).

```bash
npm install -D drab
```

```bash
import { Component } from "drab";
```

## Components

Components are documented inline. View the [source](https://github.com/rossrobino/drab/tree/main/src/lib/components) or hover over the component in a text editor after importing to see the documentation. Each prop is documented with JSDoc and TypeScript, hover over the prop to get the type and description.

_View the [source](https://github.com/rossrobino/drab/blob/main/src/routes/%2Bpage.svelte) for this page to see the [TailwindCSS](https://tailwindcss.com/) styles used._