1. What problem does the context API help solve?

- to prevent prop drilling, passing lots of props from different components can get confusing.

1. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

- the store holds the state, actions tell the reducer how to change the state, reducers manipulate the state triggered by the action.

1. What is the difference between Application state and Component state? When would be a good time to use one over the other?

- Application state is global and component state is local. large complex applications its good to use application state but takes a while to set up but small/simple applications can use component state.

1. Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

- a middleware thats used to hanlde asynchronous actions in redux. lets use choose when we want those actions to fire.

1. What is your favorite state management system you've learned and this sprint? Please explain why!

- I've been enjoying redux the most, although I dont feel like I know contex api enough to feel comfortable doing this project with. Redux is nice because I can see what is going to happen next and understand the flow of operation.
