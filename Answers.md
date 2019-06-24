1.  Name 3 JavaScript Array/Object Methods that do not produce side-effects? Which method do we use to create a new object while extending the properties of another object?

.map, .filter, .reduce


1.  Describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

Actions are any user initiated change, action creators initiate the desired action to be performed.
Reducers make application state changes based on the action creator.
The store is where the application state lives.

1.  What is the difference between Application state and Component state? When would be a good time to use one over the other?

Application state is state item(s) that are used throughout the application, component state lives only in the component and is usually used for UI.

1.  What is middleware?

Software that acts as a bridge between an operating system or database and applications, especially on a network.

1.  Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

Redux-thunk allows us to make asynchronous calls, especially to external api's It allows us to have multiple asynchronous dispatches in our action creators, such as loading, and successful load(display items.)

1.  Which `react-redux` method links up our `components` with our `redux store`?


Connect.



