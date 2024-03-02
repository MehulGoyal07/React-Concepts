# Learning React

### Some Points

- React is a Library helps in making consistency in UI
- Must have knowledge of JS and DOM
- Core of React(State or UI Management)
- Component reusability
- Reusing of components(Props)
- How to propagate changes(Hooks)
- React consists of React-DOM and React-Native
- React-DOM for Web and React-Native for App

### Creating React App

- Can be create using "npx create-react-app appname"(Slow approach, Inconvenient)
- We will use vite utility to avoid unnecessary bulky files using npm create vite@latest
- also run npm install to get node modules and other files
- JSX - means javascript with html
- to use the variables we need to use them inside {}
- while exporting from app.jsx the return just returns a single element, that's other elements are wrapped inside <></>

### Understanding Hooks by creating a counter project

- UI updation is controlled by React, that's why hooks are needed to get the control
- Hooks in React are functions that allow you to use state and other React features in functional components without needing to write a class
- Basically, to reflect the changes in UI, we are using the concept

### Advantages of fibre in React

- The problem was that the complete page or tree was reloaded whenever there is a change, which makes bad user experience, that's why fibre concept was introduced
- pause work and come back to it later
- assign priority to diff types of work
- reuse previously completed work
- abort work if no longer needed

### Configuring tailwind CSS

- Tailwind CSS provides us with pre-defined classes which we can use in-line and get the functionality of CSS
- We have to write two commands
- npm i -D tailwindcss postcss autoprefixer
- npx tailwindcss init -p
- Then we will get tailwind.config.js && postcss.config.js files in our project
- change the content in tailwind.config as in docs
- also add from docs in index.css

### Understanding props

- Suppose we are creating a card on our page, it can be resuable, so we will make a separate Card.jsx in components folder
- Now for ex: if we want to change some name on every card then we can use props for this

### NOTE:- Basics of React are completed above, now we will learn further concepts by creating projects