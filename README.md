# QnA

## What is JSX, and why is it used?

- JSX is JavaScript XML or HTML like code written in JavaScript file. To write HTML like code inside a React Component JSX syntax is used.

## What is the difference between State and Props?

- State is current value in side a React component that tells the code if needed to re-render or not and Props is value that been passed from parent to child component in React.

## What is the useState hook, and how does it work?

- useState hook is used to store and update a state value of a variable. It returns an array with a variable to store value and a function to update the value as directly updating the value will not re-render in virtual DOM in react also a default value can be provide while declaring the state.

## How can you share state between components in React?

- By performing props drilling, a state can be shared from the parent component to one or multiple children component.

## How is event handling done in React?

- By directly attaching an event handler function to desire position (button, form, element etc.) in JSX, event handling is done in React. In that case, only the function reference is provided in the position. i.e. `<button onClick={handleClick}>Click Me</button>`
