# Recipe Book – Next.js + Storyblok CMS

![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
![Prettier](https://img.shields.io/badge/prettier-%23F7B93E.svg?style=for-the-badge&logo=prettier&logoColor=black)
![Next.js](https://img.shields.io/badge/Next.js-000?style=for-the-badge&logo=nextdotjs&logoColor=white)
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Storyblok](https://img.shields.io/badge/Storyblok-0EA5E9?style=for-the-badge&logo=storyblok&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![Lucide](https://img.shields.io/badge/Lucide-000?style=for-the-badge&logo=lucide&logoColor=white)
![ESLint](https://img.shields.io/badge/ESLint-4B32C3?style=for-the-badge&logo=eslint&logoColor=white)
![Vitest](https://img.shields.io/badge/vitest-222?style=for-the-badge&logo=vitest&logoColor=FCC72C)
![pnpm](https://img.shields.io/badge/pnpm-222?style=for-the-badge&logo=pnpm&logoColor=F69220)

This project was created as an opportunity to explore and evaluate Storyblok CMS in a real-world scenario. As someone passionate about cooking, building a cookbook application was a natural and engaging choice for this technical demonstration.

This recipe book project demonstrates best practices in React, Next.js, and headless CMS integration, offering a robust foundation for scalable, content-driven applications with a modern, user-friendly UI.

## Features

- **Visual Content Editing:** Manage recipes, authors, testimonials, and more via Storyblok CMS.
- **Dynamic Content Types:** All content types and fields are type-safe, auto-generated from your Storyblok space.
- **Modern UI:** Responsive, accessible, and visually appealing design with Tailwind CSS and React Lucide icons.
- **Fast & Scalable:** Built with Next.js App Router and server components for optimal performance.


##  Getting Started

### 1. **Clone the Repository**

```bash
git clone https://github.com/your-username/recipe-book.git
cd recipe-book
```

### 2. **Install Dependencies**

We recommend using **pnpm** for best performance:

```bash
pnpm install
```

### 3. **Environment Variables**

Create a `.env.local` file in the root directory and add your Storyblok API token, Storyblok Space ID:

```env
NEXT_PUBLIC_STORYBLOK_DELIVERY_API_TOKEN=<YOUR-ACCESS-TOKEN>
NEXT_PUBLIC_STORYBLOK_SPACE_ID=<YOUR-STORYBLOK-SPACE-ID>
```

> **Tip:** You can find your delivery API token and Space ID in your [Storyblok space settings](https://app.storyblok.com/).

### 4. **Storyblok Component Types (Optional, Recommended)**

To keep your app type-safe and in sync with your Storyblok space, generate TypeScript types:

```bash
pnpm refresh-sb
```

This will:

- Pull the latest component definitions from your Storyblok space.
- Generate `src/types/storyblok.d.ts` for type-safe content.

### 5. **Run the Development Server**

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) to view the app.


## Scripts

- `pnpm dev` – Start the development server
- `pnpm build` – Build for production
- `pnpm start` – Start the production server
- `pnpm lint` – Lint the codebase
- `pnpm format` – Format code with Prettier
- `pnpm test` – Test with Vitest
- `pnpm refresh-sb` – Pull Storyblok components and generate types


## Storyblok Integration

This project is tightly integrated with **Storyblok**:

- All content is fetched from your Storyblok space using the official [`@storyblok/react`](https://github.com/storyblok/storyblok-react) SDK.
- Visual editing and live preview are enabled.
- Content types and fields are type-safe, thanks to auto-generated TypeScript definitions.

> **To customize your content structure:**
> Use the [Storyblok UI](https://app.storyblok.com/) to create or edit components, then run `pnpm refresh-sb` to update your local types.



