# Mohamed Salhi — Personal Portfolio

My personal portfolio website for introducing my work in full-stack web development and AI integrations, and providing a direct way to get in touch.

The site uses bold typography, high-contrast colours, thick borders, and offset shadows. Its layout adapts to mobile and desktop screens.

## Current status

The portfolio is being refreshed. Previous project listings have been removed, and new project case studies will be added as they are completed.

## Features

- Responsive homepage with an introduction and areas of focus.
- Email and phone contact links.
- A dedicated contact section.
- Contact details configured in one place.

## Technology

- Next.js
- React
- TypeScript
- Tailwind CSS

## Run locally

From the project folder, install the dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Open the local URL printed in your terminal, usually `http://localhost:3000`.

## Set your contact details

Open the homepage file containing the `Home` component. In a Next.js App Router project, this is usually `app/page.tsx` or `src/app/page.tsx`.

Replace the two placeholders near the top:

```tsx
const email = "YOUR_EMAIL@example.com";
const phone = "+00 000 000 000";
```

Use your real email address and a phone number with its international country code. The email and call buttons use these values automatically.

Replace both placeholders before publishing the site.

## Update the content

Edit the homepage component to change the introduction, availability, areas of focus, and contact text.

Tailwind utility classes in the component control the layout, colours, typography, borders, and shadows.

## Production build

Create a production build:

```bash
npm run build
```

Run the production build locally:

```bash
npm run start
```

## Publish changes

Save and review your changes, commit them to Git, and push to the branch used by your hosting provider.

If automatic deployment is configured for that branch, check the hosting dashboard for the new deployment and its build status.
