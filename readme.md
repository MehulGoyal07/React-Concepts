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

### Background color changer (02bgChanger)

- Simple bg color changer project in which bg color changes with button onclick
- concept is understanding useState hook
- also that onclick takes a function itself that's why callback function written in onclick method and then the bg color changes

### Understanding useEffect, useRef, useCallback(03password-generator)

- In this we will firstly use four useStates to change the length, numbers, character, password fields
- A random password will be generated through a mechanism when the page loads
- We will create a function which will generate passwords randomly for us, but we have to change the parameters accordingly such that on length basis, numbers, characters
- That's why we will take help of "useCallback" hook
- "useCallback" -> It is a ReactHook that lets us cache a function definition between re-renders
- useCallback takes function and dependencies such that useCallback(fn, dependencies)
- "useEffect" -> It allows to perform side effects in your components. Side effects might include fetching data, subscribing to services, updating the DOM, or any other operation that doesn't directly relate to rendering the UI.
- useCallback used for optimization
- useEffect used for re-rendering when something changed
- Therefore, give dependencies with the function carefully
- "useRef" -> The useRef hook in React is used to create a mutable reference that persists across renders and doesn't trigger a re-render when its value changes. It's often used to access DOM elements or to persist values between renders without causing re-renders.
- Now for copying the password to the clipboard we will take help of useRef hook

### Custom-Hooks(04currency-converter) 

- A currency converted project, will also fetch data from api
- Making a custom hook in hooks folder named useCurrencyInfo, it will return us the required data according to the currency selected and then we can use it further
- Now, we will make a reusable component named InputBox.jsx in components folder

### React Router (05react-router)

- This is not the functionality of core react but a third-party functionality
- We will learn the functionality by creating simple website
- Install the package npm i react-router-dom
- Here <Link> tag is used instead of <a> anchor tag because using anchor tag, reloads the whole page but using link tag it just injects the functionality without complete painting of page
- Now, we will not use <App/> to run the files, instead we will create a router in main.jsx
- We will create a layout.jsx to make code more optimize, there we will use outlet from react-dom where we can put the content where rendering is occured i.e. keep the header and footer constant but changing the other components
- We will take id after / and make route to capture the id and display it, making a user route
- We can get the id in user.jsx using useParams from react-router-dom
- Note: The spelling must match as in main.jsx
- Will make another component github which will display the followers from github account
- Will fetch the followers using api will use useEffect hook
- To make it more optimize we can use loader in main.jsx file
- will use another hook name 