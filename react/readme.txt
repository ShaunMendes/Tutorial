Virtual DOM
uses JSX
{ } to write js
state = data in vue

React events:
https://reactjs.org/docs/events.html#supported-events

Start react project:
github: https://github.com/facebook/create-react-app
link:https://facebook.github.io/create-react-app/docs/getting-started


React Apps are SPA(Single Page Applications)
In Multi page Applications multipe pages are sent to the client on request/response cycle
In Single page Applications only a single html page is sent to the server. The next time the user wants
to view another page, another component is rendered in the same html page. This saves the time taken to
get response from server.

condition ? True : False

LifeCycle Hooks:https://www.youtube.com/watch?v=iYz2OKWO09U&list=PL4cUxeGkcC9ij8CfkAY2RAGb-tmkNwQHG&index=22
Mounting
Updating
UnMounting


React Router:
Link allows page to load without request from server(Refresh)
NavLink allows page to load without request from server(Refresh) and adds a class of active

Props:
They are used to carry data between different components
They also contain route information

redux:
Centeral Store
Used for state management

react-thunk:
pauses the action before dispatch
helps to perfrom async actions 


connect always has 2 parameters ie mapStateToProp and mapDispatchToProp
connect is used to pass the state of the redux into the particular component Props
compose is used to add multiple higher order function


WorkFlow while using Redux:

1. add a reducer in the rootReducer

2. In order to make an async call i.e. add to database, create a function in the action.js file

3. Depending on the result of the action make an entry in the reducer.js file to handle the result
   i.e. add the result to redux store or send error json

4. Export the action to the desired component.

5. In the required component create 2 functions:
i.  mapDispatchToProp:
    Component can access the desired actions
    dispatch the imported action with the necessary parameters in a json

ii. mapStateToProp:
    Component can access the redux store
    return a json containing the desired keys from the redux store

6. In the component call the json key containing the required action and pass the parameters

Eg project: marioplan - SignUp Component

1. Add "authReducer" to rootReducer
2. Create a function to handle addition of new user to database in authAction.js viz. "signUp"
3. Depending upon the result of the action 2 types of reducer cases are dispatched viz. "SIGNUP_SUCCESS" & "SIGNUP_ERROR"
4. Export the action "signUp" to component "SignIn.js"
5. mapStateToProp:
    adds auth to redux
    adds authError to redux
    returns json containing the above keys

6. mapDispatchToProp:
    dispatches "signUp" action
    returns signUp

7. These can be used in the props

7. In the "handleSubmit" function the signUp is called


Context API:
Share state with component tree