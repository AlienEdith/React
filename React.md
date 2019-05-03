# React
A JavaScript library for show content (HTML) to user (with [JSX](#JSX)) and handle user interaction (with Event Handlers).

    
##### React Project
- Create
  - package: create-react-app
  - `npm create-react-app <project_name>`
- Behind the Scenes Libraries
  - Webpack: combine all javascript files/codes together
  - [Babel](https://babeljs.io/): JavaScript Compiler, convert new version (2015+) of JS  codes to compatible version in currentr browsers.
  - Dev Server
- Essential Libraries
  - React: Knows how to make React components work together
  - ReactDOM: Knows how to take a pile of React components and show them in the DOM
- File Structure
  - src
  - public: static files (images...)
  - node_moduls: dependencies
  - package.json: record dependencies and configures
  - package-lock.json: record exact version of packages we install
- Import System: `import React from 'react`, same as `require`, but for ES2015+.
- Environment Variables: 
  - Config: `.env` file - `REACT_APP_KEY=VALUE`
  - Usage: `process.env.KEY`
## JSX
<a id="JSX"></a>
Produces HTML and very similar to HTML. Babel convert JSX into normal JS codes.
- vs. HTML
  - Adding custom styling as a **object**
      ```html
      <div style={ { border: '1px solid red' } }></div>
      ```
  - Adding class with `className="..."`
  - Refer JS variable/logic inside `{ JS_CODE }`, (Normally, avoid logic in JSX)
  
- A function could return JSX
    ```javascript
    return (
        <div> ...JSX (tags...) </div>
    )
    ```

## Component
A Function or a Class
- Component Nesting
- Component Resuability
  - Define a single component in a seperate file
  - Export:
    - `export default <ComponentName>` 
    - `export const/class <ComponentName> = {...}`
  - Import:
    - `import <ComponentName> from <FileName>.js`
    - `import { <ComponentName> } from <FileName>.js`
  - Use Component as a JSX Tag
    `<ComponentName />`
- Component Configuration
  
### Class Component
    ```javascript
    class ComponentName extends React.Component {
        ...
        render(){   //required
            return(...JSX...)
        }
    }
    ```
#### State System
The class component holds a object `state` for storing data. 
- When `state` changes, component will instantly rerender itself. 
- Must be initialized
    <a id="constructor"></a>
    ```javascript
    state = {key: value, ...}
    // or
    constructor(props){
        super(props); //required
        this.state = {...}
        ...
    }
    ```
- update
    ```javascript
    this.setState({
        key: value, ...
    })
    ```
 
#### Component Lifecycle
| Methods | Purpose | Usage  |
| ------- | ------- | -----:|
| constructor | One-time setup | [code](#constructor) |
| render| Avoid anything besides returning JSX | `return(.JSX.)` |
| componentDidMount | Data Loading | API request / redux action  |
| componentDidUpdate(prevProps) | More Data Loading when state/props change | MAY update `state` with comparing `prevProps` and `this.props`  |
| componentWillUnmount | Clean Up |     |
| shouldComponentUpdate(nextProps, nextState) | Set up when shoud Rerender | compare `props` and/or `state`, return `true` => should update |
| ... | ... | ... |

### Function Component
    ```javascript
    const ComponentName = () => {
        return (...JSX...)
    }
    ```
#### Hook System
State and lifecycle methods for function component. Make it easier to **share** logic between components.
| Name | Goal |
| ------- | ------- | 
| useState | state |
| useEffect| lifecycle methods |
| useContext | context system |
| useRef | Ref system |
| useReducer | store data through a 'reducer' |

- `useState`:  usually store ONE single data in each "resource", instead of a object. For each data, just call `useState` again.
    ```javascript
    const [ resource, setResource ] = useState(initialValue)

    setResource(newValue)
    ```
- `useEffect`: everytime the component mount/update, `useEffect` will be called.
    ```javascript
    useEffect( () => {
        ... //call other functions, set 'resource'...
    }, [someValue])
    ```
    - Automatically check whether `someValue` changes, if so, re-render component, call `useEffect` again. If empty, only render once, If no this argument, stuck in infinite loop. 
    - **Attention**: in JavaScript, whenever comparing two objects, always *different*, even the key-value pairs are the same. Use `JSON.stringify()` to enable key-value pairs comparision.

### Passing Data between Components

#### Props System: 
passing data from a parent component to a child component.
```html
<ParentComponent>
    <ChildComponent key={value}>
</ParentComponent>
```
```javascript
// Inside ChildComponent
    this.props.key  // class
    props.key       // function
```

#### [Context System](https://reactjs.org/docs/context.html)
passing data from a parent component to **any** nested child component => "Global Data"

#### From Child Component to Parent Component
- Parent Component passes a function to Child Component as a prop
- Child Component calls the function got from Parent Component with desired data as arguments
- The function is acutally executed **inside** Parent Component, thus the data have been passed to Parent Component

    Example: 
    ```javascript
    // Parent Component 
    onSubmit = (value) => {
        ... //set State, API request...
    }

    <ChildComponent onSubmit={this.onSubmit} />

    // Child Component 
    onSubmit = (value) => {
        this.props.onSubmit(value);
    }
    ```

### Ref System
Refs provide a way to access DOM nodes or React elements created in the render method. 
- create Refs in `constructor`: 

    `this.ElementRef = React.createRef();`

    **Suggestion: `console.log(this.ElementRef)` to see details of a ref**
- Pass Refs to element as an prop

    `<element ref={this.ElementRef}` />

- Access the DOM (change style, add listeners...) through Refs.
  
  For example:
    `this.ElementRef.current.addEventListener('load', ...)`

### Controlled Component
Controlled Component: form data is handled by a React component. Store data/information inside of our components in **`state`**, not inside the DOM. (Uncontrolled Components: data is handled by the DOM itself.)

Example: A Form
```javascript
state = {term : ""};

onFormSubmit(event){
    event.preventDefault(); // always use with form submit, supress default form submit event: refresh the webpage automatically
    this.props.onSubmit(this.state.term);
}

<form onSubmit={(event) => this.onFormSubmit(event)}>
    <input type="text" name="" 
        value = {this.state.term}
        onChange = {(e) => this.setState({term: e.target.value})}
    />
</form>
```

## API request
package: [axios](https://www.npmjs.com/package/axios)
```javascript
// must use async/await
const api = axios.create(...baseURL...)

async <requestFunction> = () => {
    const response = await api.get(path, {
        params: {key, value, ...},
        ...
    })
}
```

## Routing
package: [react-router](https://github.com/ReactTraining/react-router)

With `react-router`, each component needs to be designed to work in isolation (**fetch its own data**)

`import { Router, BrowserRouter, Route, Switch, Link } from 'react-router-dom' `

```html
<BrowserRouter/>
    <Switch>
        <Route path=".../:key" exact component={ComponentName} />
    </Switch>
</BrowserRouter>

<Link to="..url..">link</Link>
```
- Mechanism: 
  - Intentional Redirect: `react-router` holds an array `history` that keeps track of the address bar in browser. `BrowserRouter` listens to `history` for changes to the URL. 
  - Programmic Redirect: 
    - create our own `history`
        ```javascript
        import createHistory from 'history/createBrowserHistory';

        export default createHistory(); 
        ```
    - use `<Router>` instead of <`BrowserRouter>`
        ```html
        import history from '../history'
        <Router history={history}>...</Router>
        ```
    - redirect: `history.push("..url..")`
- By default, `react-route` matched ALL routes that **contains** the path. With `exact`, only match the **exact** path. 
- `<Switch>`: only route the **first** matched router
- `<Link>`: same function as `<a>`, but do not refresh the page (rerender `index.html`).
- `\:key`: Path Variable
  
  `value = this.props.match.params.key`

## Parse URL parameters
package: `query-string`: 

```javascript
import queryString from 'query-string';
const query = queryString.parse(props.location.search); 
// an object with key-value pairs match the url parameters
```

## Redux
package: `react-redux` (Integration layer between react and redux)

State management library. Make a **global state**, centralize data in one **global store**.

Workflow: To change `state`, we call an *Action Creator* that produces an *Action*, feds it to *dispatch* that fowards it to all *Reducers*, only the one that matches the `action.type` will create **new** `state`.

- `index.js`: connect redux with react
    ```javascript
    import { Provider } from 'react-redux';
    import { createStore, applyMiddleware } from 'redux';
    import thunk from 'redux-thunk';

    import reducers from './reducers';  // ./reducers/index.js

    const store = createStore(reducers, applyMiddleware(thunk));
    ReactDOM.render(
        <Provider store={store}>
            <App />
        </Provider>, 
        document.querySelector('#root')
    )
    ```
- `/action/index.js`: Action Creators 
    ```javascript
    export const ActionName = (data) => {
        return {
            type: 'ACTION_TYPE',   // required
            payload: data          // pass data to reducers, in order to update state
        };
    };
    ```
- `/reducers/`
  - `<NameReducers>.js`: individual reducers, each one is resposible for *one* value in state. Take the action, create **new** state data accoding to the data received from action.
    ```javascript
    const ValueReducer = (state=initialValue, action) => {
        switch(action.type){
            case "...":
                return (...action.payload...); //new state object 
            ...
        } 
        return state;
    }
    ```
    - **Attention**: Reducers must return a totally **new** `state` object, never mutate and return its input `state` argument! (As long as they re the same object/array in *memory*, Redux assumes nothing changes, will not update anything)
        | Action | Method |
        | ------- | ------- | 
        | Remove an element from an array | `state.filter(element => element !== value)` |
        | Add an element from an array | `[ ...state, newValue ]` |
        | Replace an element in an array | `state.map(el => el === oldValue ? newValue : el)` |
        | Update a property in an object | `{ ...state, oldKey: newValue }` |
        | Add a property in an object | `{ ...state, newKey: newValue }` |
        | Remove a property in an object | `_.omit(state, 'oldKey')` => lodash js library |

  - `index.js`: redux state store, map reducers to values in state.
    ```javascript
    import { combineReducers } from 'redux';
    import { ValueReducer } from './ValueReducer';
    export default combineReducers({
        key: ValueReducer, ...   // key will show up in state object
    })    
    ```  
- use `state` data and `action`s in component
    ```javascript
    import { connect } from 'react-redux';
    import { ActionName } from '../actions';
    
    value = this.props.key
    this.props.ActionName(data) // trigger the action, dispatch it to reducers

    // map state value into props system
    const mapStateToProps = (state, ownProps) => {  // could only return desired data accoring to some specific props value
        return {
            key: state.key
        };
    }

    export default connect(mapStateToProps, {
        ActionName: ActionName  // make it a REAL action creater
    })(ComponentName);    
    ```

#### Async Actions in Redux
package: `redux-thunk` (Middleware to help make requests in a redux application)

Usage: 
1. Action Creators could make API request (takes time). Dispatch actions to reducers only when the request is **done** (successfully fetched data)
    ```javascript
    export const ActionName = () => {
        return async (dispatch, getState) => {  // Two argument for Redux-thunk, 
            const response = await someAPIRequest.get('...')
            dispatch({
                type: 'ACTION_TYPE',
                payload: response.data
            });        
        } 
    }
    ```
2. Action Creators can return functions (Another Action Creator).

#### [Redux Form](https://redux-form.com/8.2.0/)


#### Redux Dev Tools
    ```javascript
    const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
    const store = createStore(
        reducers, 
        composeEnhancers(applyMiddleware(reduxThunk))
    );

    ReactDOM.render(
        <Provider store={store}>
            <App />
        </Provider>, 
        document.getElementById('root')
    );
    ```


## Others
- `<React.Fragment`>: allows a component to return multiple elements. Fragments let you group a list of children without adding extra nodes to the DOM.
    ```javascript
    render() {
        return (
            <React.Fragment>
            <ChildA />
            <ChildB />
            <ChildC />
            </React.Fragment>
        );
    }
    ```
- Arrow Function: bind `this` keyword to the component automatically.
    ```javascript
    functionName = (args) => {
        ...
    }
    ```
- Advance JavaScript Synatax/Method:
    ```javascript
    const str = `Hello ${name}` // name is a string variable.

    objectName = {
        name                    // name(key): name(value)
    }

    //result is an array, often used for return a list of components/element
    const result = arr.map((e) => { 
        return <div key={uniqueSmth}>{e...}</div>
    })
    ```
