# Google Books

All the instructions, architecture and decisions about the project can be found below.

## Language and Framework

Following the challenge recommendation, it was used JavaScript and its library, React.

## Dependencies

- [TypeScript](https://www.typescriptlang.org/): it types the code at runtime
- [Axios](https://github.com/axios/axios): used to access APIs, it gives you the ability to take advantage of JavaScript's _async_ and _await_ for more readable asynchronous code.
- [Styled Components](https://styled-components.com/): it optimizes the styling experience for React components.

## Architecture

This project architecture was created in order to support its growth and keep it organized.

**Project Tree**

```
├── public
│  ├── favicon.ico
│  └── index.html
├── src
│  ├── assets
│  │  ├── back.svg
│  │  ├── logo.svg
│  │  └── search.svg
│  ├── components
│  │  ├── BookCard
│  │  │  ├── index.tsx
│  │  │  └── styles.ts
│  │  ├── BookShelf
│  │  │  ├── index.tsx
│  │  │  └── styles.ts
│  │  ├── Header
│  │  │  ├── Back
│  │  │  │  ├── index.tsx
│  │  │  │  └── styles.ts
│  │  │  ├── Default
│  │  │  │  ├── index.tsx
│  │  │  │  └── styles.ts
│  │  │  ├── Search
│  │  │  │  ├── index.tsx
│  │  │  │  └── styles.ts
│  │  │  ├── header.hook.ts
│  │  │  └── index.tsx
│  │  └── SearchResults
│  │     ├── index.tsx
│  │     └── styles.ts
│  ├── pages
│  │  └── Home
│  │     ├── home.hook.ts
│  │     ├── index.tsx
│  │     └── styles.ts
│  ├── styles
│  │  └── GlobalStyles.ts
│  ├── App.tsx
│  ├── index.tsx
│  ├── react-app-env.d.ts
│  └── types.d.ts
├── .gitignore
├── package.json
├── package-lock.json
├── README.md
├── tsconfig.json
├── yarn.lock
```

The simplified version of the project tree is described below:

- **components**: react components used inside the homepage and that can be reusable
- **pages**: application screens and hooks
- **styles**: global styles to be used in the entire application

The project is visually structured by one only page, which is the Homepage. The initial interface shows 4 bookshelves, classified by book gender: Adventure, Childish, Featured and Action. Featured books are highlighted in blue.

Above the bookshelves, there is a default header with the app logo and a search button. Once the search button is clicked, a search bar comes up and the user can search for books by typing the title and clicking on the search button again. This time, the app will show all the books that correspond to the search, 15 books by page and two buttons on the bottom: Previous and Next page.

The entire application was built with the concept of Mobile First and responsive layout.

As it isn't a considerably large application, the state could be controlled by using only _React Hooks_.

## Settings

You must have Git installed in your machine to download the following GitHub repository:

- https://github.com/danielejsantos/google-books

Or you can download it by following the command:

`git clone https://github.com/danielejsantos/google-books.git`

Then, you must install its dependencies. At the root, run the command:

```
# with yarn:
yarn install
# with npm:
npm install
```

## How to run

Navigate to the root folder and run the following command:

```
# with yarn:
yarn start
# with npm:
npm start
```
