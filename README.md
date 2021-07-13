# Time Tracker App

Training project to try and compare different state managers. [Demo site](https://illustrova.github.io/tracker-app/)

## App functionality

In all the implementations app meets the following criteria:

- On start button click, displays the timer and tracks time.
- On button stop, adds data to the table and resets the timer.
- Always displays table with start/end of tracking and durartion, if any data exists.
- Displays total time tracked

## Tech

Bootstrapped with [Create React App](https://facebook.github.io/create-react-app/). Styled with[TailwindCSS](https://tailwindcss.com/). Deployed with Github Actions.

Currently implemented state management with:

- [React hooks](https://reactjs.org/docs/hooks-intro.html)
- [Redux](https://redux.js.org/) with [Redux Toolkit](https://redux-toolkit.js.org/introduction/getting-started)
- [Mobx](https://mobx.js.org/README.html)
- [Nano Stores](https://github.com/nanostores/nanostores)