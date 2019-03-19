# ReactSpaceX

Working Version: https://reactspacex.netlify.com/

## Instructions

### 1. Install dependencies

Run `yarn` or `npm install` to install dependencies.

### 2. Run dev server

Run `yarn start` or `npm start` to launch a dev server and navigate to [http://localhost:3000/](http://localhost:3000/). You should see the app running. The app will automatically reload if you change any of the source files.

### 3. Add types with TypeScript

The purpose of this exercice is to use [TypeScript](https://www.typescriptlang.org/) to add the types to the application.

To make the experience smooth, you can implement types one component at a time. To do so, rename the extension of the component you want to type from `.jsx` to `.tsx`.
Make sure to change the way those components are imported:

```javascript
// From
import MyComponent from './MyComponent.jsx'

// To
import MyComponent from './MyComponent'
```

Here are the steps you can follow:

1. Add types for the launches data (in the data folder) we'll use in the application. You can add these types in the `types.ts` file

2. Add types for the components. We suggest to do it in this order:

- App
- LaunchListScreen
- StatsBar
- LauncheList
- Tabs
- LaunchListDetailsScreen (don't forget to handle the `TODO` comments in this one)

### 4. Cheat sheets

- https://devhints.io/typescript
- https://github.com/sw-yx/react-typescript-cheatsheet
