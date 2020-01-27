# React Updates
Since I've learned React, a couple of key updates were changed. I'm doing this side project to brush up on my frontend JavaScript skills while I wait for 8p to hit & I can finally buy specialty cookies.

## create-react-app 
I did a really painful exercise where I tried to build a react app without using Facebook's starter kit. Yeah that got somewhere after like 2 hours of messing around. But I really prefer the `create-react-app` command to set up a project quickly. Unfortunately, I found out today that `create-react-app` is a deprecated command and I would get this error message whenever I tried to set up a quick react frontend repo:

```javascript
A template was not provided. This is likely because you're using an outdated version of create-react-app.
Please note that global installs of create-react-app are no longer supported.
```

Solution:
[stackoverflow](https://stackoverflow.com/questions/59188624/template-not-provided-using-create-react-app)
Long story short, I globally uninstalled create-react-app, made sure my cache was cleared, and used the command `yarn create react-app <app_name>` to initialize a react app.

## Service Workers
Truth be told, I still don't really get service workers. But I ran into issues with deployment about a month ago that led me to a rabbit hole of figuring out what went wrong. My solution led me to enabling service worker so that I don't run into a whitescreen issues again when deploying. I think the error had to do with caching / chunking during deployment.

## Types of Components
Functional and Stateful components. Or what I like to call dumb and smart components. All it really means is whether or not the component has read only data (props) or mutable / owns its data (state).

### Functional components
```javascript
import React from 'react'
export default function Dumb() {
    const text = 'Example text'
    return (
        <div className="dumb">
            {text}
        </div>
    )
}
```

### Stateful components
```javascript
import React from 'react'
import Person from './Person'

export default class Smart extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            geniuses: [{
                name: 'Ada Lovelace',
                dates: '1815-1852'
            }, {
                name: 'Rosalind Franklin',
                dates: '1920-1958'
            }, {
                name: 'Rear Admiral Dr. Grace M. Hopper',
                dates: '1906-1992'
            }]
        }
    }
    render() {
        const cards = this.state.geniuses.map((genius, index) =>
            <li key={index}>
                <Person {...geniuses} />
            </li>
        );
        return (
            <div>
                <h3>{this.props.title}</h3>
                <ul className="list">
                    {cards}
                </ul>
            </div>
        );
    }
}
```

## Props & State
It's always good to re-read the documentation on props and state.

One way to vary the output of a component is through its props. Props are short for properties and they behave much the same way that a attribute does for an html tag. They are passed from the outside (parent component).

In stateful components, instead of props being passed as an argument to the render method, it is accessed through `this.props.txt`. whereas functional components you call props as `props.txt`


A component can have as many props as you set it to. When you want a prop to have a default value, you can use defaultProps attribute. Look through `src/components/Item` for an example of defaultProps.

There are times when you need to validate the type of props you are passing onto the component. This would make it easier to manage passing correct types of props when you are just using vanilla React versus a state manager (like Redux). Look through `src/components/List` for an example of prop-types validation. [Click here for more info](https://github.com/facebook/prop-types#usage).
*/