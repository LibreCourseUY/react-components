# React Components LibreCourse UY

**React Components [LibreCourseUY]** is a way for beginner React learners to show what they know by developing their own components and sharing them with the <u>LibreCourseUY</u> community.

Also, learn and teach about React state, events, props, and context.

## Design System
At this moment there's no design system, so the contributor can make their own design.

## Configuration

- **Framework**: React 19.2.6
- **Build Tool**: Vite 8.0.12
- **Language**: TypeScript
- **Styling**: Tailwind CSS 4.3.0
- **Linting**: ESLint
- **Package Manager**: PNPM

### Key Dependencies
- `react` & `react-dom` - UI library
- `@vitejs/plugin-react` - React plugin for Vite
- `tailwindcss` & `@tailwindcss/vite` - CSS framework
- `typescript` - Type checking
- `vite-tsconfig-paths` - TypeScript path aliases

### Available Scripts
| Command | Description |
|---------|-------------|
| `pnpm dev` | Start development server |
| `pnpm build` | Build for production |

## Set up
1. Download **Node.js** and install it (26.1.0 or newer version) -> [Link](https://nodejs.org/en)
2. Download **pnpm** (<u>**DO NOT Download NPM**</u>) (latest version) -> [Link](https://pnpm.io/installation)

## Getting Started

1. Install dependencies:
   ```bash
   pnpm install
   ```

2. Start development server:
   ```bash
   pnpm dev
   ```

3. Open http://localhost:5173 in your browser

# Structure

## Folder structure
└── react-components/
    ├── src/
    │   ├── components/
    │   │   ├── ComponentName/
    │   │   │   ├── index.tsx
    │   │   │   ├── utils.ts
    │   │   │   ├── style.module.css
    │   │   │   ├── README.md
    │   │   │   ├── types.ts
    │   │   │   └── assets/
    │   │   │       └── icon.svg
    │   │   │   └── __tests__/
    │   │   │       └── ComponentName.test.tsx
    │   │   ├── ComponentTwo/
    │   │   │   ├── index.jsx
    │   │   │   ├── utils.js
    │   │   │   ├── style.module.css
    │   │   │   ├── README.md
    │   │   │   └── assets/
    │   │   │       └── icon.svg
    │   │   │   └── __test__/
    │   │   │       └── ComponentTwo.test.jsx
    │   │   └── /...
    └── /...

# Important folders
You probably will just use the components folder, so I will explain it.

### /Components
The components folder contains <u>one</u> of your components; it must follow these rules:
- Always create a README.md file (yes, it's all uppercase letters) with your component information, purpose, and what you think is important.
- Components can be written in JavaScript or TypeScript, which means you can use **ComponentName.tsx or ComponentName.jsx**, no matter what.
- Component names use PascalCase, because it's a React component. For example: Button.tsx, CallToAction.jsx.
- If you use TypeScript, you should create a types.ts file.
- Always use CSS Modules; that prevents your styles from affecting someone else's components.
- Tests are not mandatory; at this moment there's no library for testing, but you can use it when it's implemented.
- Utils is a file where you can place some helpful scripts.
- You can add more .jsx/.tsx files in your component folder if you prefer; don't forget to explain it in your README.md.
- The assets folder is for icons and images. Allowed formats: .svg and .webp (Do not save an image unless it is absolutely necessary, and it should also be lightweight. A heavy or unnecessary image can be denied in the pull request).

# Share the component with the community

## Repository
Clone this repository using the command:   
   ```bash
   git clone https://github.com/LibreCourseUY/react-components.git
   ```
## Branch
To create / improve / fix a component, create a new branch based on the main branch with the action and component name, for example: "create_TwitterCard", "fix_Navbar".

The command to create a new branch is:

   ```bash
   git checkout -b <new-branch-name> main
   ```

## Commit
After you have added, created, or fixed a component and you followed the rules of the Structure section, commit your work following [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/#summary). For example: "feat: created Carrousel component"

## Git push
Push your changes with:
   ```bash
   git push
   ```
## Make a Pull request
You can learn how to make a pull request following the [github documentation](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/creating-a-pull-request-from-a-fork) and assign it to Kevin Ramirez (Kevin-Ramirez127)

## What's next?
If the reviewer says that you need to fix something, you can work in the same branch, make the proper changes, and commit them.

When your pull request is approved, you can see it in the main branch. Congratulations on contributing!