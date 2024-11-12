# To-Do App Project

A quick dive into building a to-do app with React, Redux, and Material-UI—learning when, why, and how Redux works.

## Table of Contents

- [Project Overview](#project-overview)
- [Tech Stack](#tech-stack)
- [Features](#features)
- [Lessons Learned](#lessons-learned)

## Project Overview

The goal was to build a Redux store from the ground up, get hands-on with how it works, and learn to pass data seamlessly across components. This included creating a custom todoSlice from scratch to manage our to-do list state effectively.

## Tech Stack

- **React**: For building the user interface.
- **Redux**: For centralized state management across components.
- **Material-UI**: For styling components with a clean, professional design.

## Features

- **Add To-Do**: Users can add new tasks to the to-do list.
- **Toggle Complete**: Mark tasks as complete or incomplete.
- **Delete To-Do**: Remove tasks from the list.

## Lessons Learned

### 1. **Redux for State Management**

- **Centralized State**: Used Redux to manage the entire state of the application, particularly for the to-do list. This eliminated the need to pass data and functions through multiple component layers, simplifying data flow and improving maintainability.
- **Actions and Reducers**: Learned how to define actions (e.g., `addTodo`, `toggleTodo`, and `deleteTodo`) and reducers to handle predictable state changes in a structured way. This added clarity to how each action impacts the state and allowed for easy debugging.
- **Redux Toolkit**: Leveraged Redux Toolkit to simplify store configuration and reduce boilerplate code, making Redux easier to use and maintain.

### 2. **React Component Structure**

- **Functional Components**: Used functional components to build a modular and reusable UI, keeping each component focused on a specific responsibility (e.g., `TodoInput`, `TodoList`).
- **Hooks**: Used `useState` for local component state in input handling and `useDispatch` and `useSelector` hooks for Redux interactions, helping to connect components with the store seamlessly.
