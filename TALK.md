## Hooks in React

## Intro slide

<p>Hello everyone, I'm Aaron Ackerman. I'm a Senior Site Reliability Engineer at Movable Ink. If you're unfamiliar with site reliability engineering, you might be more familiar with DevOps, it mostly means that I work on building tooling, continuous delivery, and monitoring to ensure that our systems continue running with high reliability. We're also hiring for another position on my team, Movable Ink is based in New York City and I work remote from home in South Minneapolis. So if you also do reliability engineering and you're looking to switch things up come talk to me afterwards.</p>

## React in 2015, Stateless functional components

<p>I'm happy to be here today to talk to you about Hooks in React.</p>

<p>React has come a long way since I started using it. I gave a talk at the React Minneapolis meetup a couple months ago recounting some of the features that have been released over the history of React and I continue to be impressed with how the React core team continues to innovate on a library that was already considerably good for building web applications.</p>

<p>I looked back at those slides to consider where we were and where we are now. In October 2015 the 0.14.0 release included stateless functional components, this was also the release where they split react vs react-dom packages. So let's start there, stateless functional components. This will be really quick because there's not much to say about them, but functional components were the genesis for hooks in the first place, so it's a good place to start.</p>

## stateless functional components

<p>As a precursor, I have a bunch of code examples here, I ended up doing all of them in codesandbox, which is pretty great for hacking on something small. I wanted many of them to show up larger so then ended up being screenshots. If you are really interested in the examples, the talk will be public repo on GitHub and you can take a look at all of the links to the sandboxes on there.</p>

<p>As you can see there, we have one function call App, it has one useful prop called title and we are rendering that function with React DOM with the title "Open Source North" and it ends up displaying "Hello Open Source North".</p>

https://codesandbox.io/s/wizardly-allen-r58lq

<p>So at that time in late 2015 we were able to use functional components, and it was nice, but they were limited. You only had access to props, it wasn't possible to use state, context, refs or the component lifecycle. Just props, it was essentially render and forget. All of that changed earlier this year when React 16.8 was released.</p>

## react/create-react-app versions slide

<p>Several functions called hooks were added to React to allow functional components to have associated state and an understanding of the lifecycle of the component. The first version where you can use hooks is 16.8.0 and for any create-react-app projects you can start using hooks in create-react-app 3 or by upgrading `react-scripts` to 3 or higher.</p>

## Opt-in, 100% Backwards Compatible

<p>If you're not using hooks already you may be wondering about the upgrade process to use them. The good news is that everything that I'm going to show you about hooks today is completely opt-in and backwards compatible with older versions. That means, nothing has to be rewritten, you don't have to go out and rewrite every class component to be functional and use hooks. So you can choose to use hooks or not. I personally believe that hooks simplify several patterns, so it may make sense to use hooks in some cases and classes in another. Let's get into looking at some of the built in hooks that ship with React 16.8.</p>

## Hooks start with 'use'

<p>You can easily identify these functions because they all have the prefix 'use'. I've listed a few of the built-in hooks that we'll talk about today. They all start with the 'use' prefix, so they're easy to identify vs. other utility functions you use in your projects. Tooling for eslint has also been built on the assumption that standard and custom hooks will have the 'use' prefix in their function names. So it is to your benefit to stick to the community convention that was set forth by the React team. And if you're already using create-react-app, this tooling is already built-in to help avoid some of the gotchas that you can run into accidentally. These aren't all the hooks there are more, and you can create custom hooks, so I recommend looking at the documentation for more information.</p>

<p>Let's move on and look at a comparison of how we handle state in a class component up against how state is handled with hooks in functional components.</p>

## Class Component with State

<p>This is a full example that we can look at on codesandbox. We can see a class component called `Counter`. It's initialized with state to keep track of the count. It renders one `div` that shows the current count and when the `div` is clicked the count state is incremented by `setState` and the component is re-rendered. If you've used React before I'm sure you're pretty comfortable with class components, setting state and rendering.</p>

<p>Let's look at an equivalent implementation using a functional component with the `useState` hook.</p>

## useState

<p>`useState` is the most basic and easiest to understand hook. You can see at the top of this example `useState` is imported from React. We have function component called `Counter` and on the first line of the component we call `useState` and pass an initial state of zero. This is the value we'll end up using the first time the component is rendered. And `useState` is returning a two element array and we're accessing the elements with array destructuring syntax. The first item in the array we're calling `count` is the current state value when the component is rendered and the second item in the array that we're calling `setCount` is a function that can be used to update the state. In the same way as the previous example the count is being updated in the `onClick` handler, however in this case we're calling `setCount` instead of calling `setState` like you would use in a class component. Calling `setCount` triggers a re-render and we can see that the DOM is updated to reflect the new state.</p>

<p>In this example we have just one instance where we're calling `useState`, but any number of these `useState` hooks can be used. You're not limited to just one state object like class components, and you're not limited to using an object as the base value. You can see in this example we're calling `useState` with an initial value of zero, and calling `setCount` with a number. In the class component we're forced to use an object and have count as a key in that object. So `useState` is slightly more flexible.</p>

<p>You may also be wondering about the `setState` function returned by `useState` it can accept a raw value or it can accept a function similar to `setState` in class components if the new state value depends on the old state value you can pass a function to the `setState` method. There is a gotcha here though. With the `setState` method that's returned from `useState` objects aren't merged, the value is always completely overwritten. So if you want to simply update a value on an object, you need to merge the previous state with you new state.</p>

<p>In creating these two examples, setState with a class component and useState with a functional component, one thing that stuck out at me here, was the difference in the size of these. Admittedly these are toy examples, but the hooks version is about 60% of the size of the original based on raw bytes and less than half the line count.</p>

## Class component using context

<p>If you haven't had the opportunity to take advantage of the context feature in React it can be extremely useful to be able to pass information down the component tree without having the pass the information through props all the way down, while still getting the benefit of re-rendering when the context value changes. This can be really useful for features that are global state, such as a color scheme or theme or information about the current logged in user. You don't want to have to have the state of the logged in user in your top of your component tree and have to pass it as a prop to each of the deeply nested components, but you still might want these deeply nested components to have access to information about the logged in user. These are a couple situations where the context features are really, really useful.</p>

<p>Let's take a look at an example taken from the React documentation. There is a `ThemeContext` that is created by `React.createContext` in another file. The component here `ThemedButton` uses the static class variable contextType to let React known that we want the value from that context to be available to this component. In this case we expect the value held in `ThemeContext` to be an object of css styles that could be passed to the style prop.</p>

<p>Let's get a better look at the whole layout and look at this in codesandbox.</p>

<p>If we look at `ThemeContext` we have 2 themes, light and dark. They each provide a text color and a background color for styles. In the index we have a couple components. We have the main App component where we are keeping the state of the theme, and an intermediate component called `Toolbar` this is simply passing along props to the `ThemedButton` component. This is meant to show that the `ThemedButton` is nested a couple layers. For the `ThemedButton` to be able to access the context it has to be wrapped in a provider. This is true for class components as well as hooks.</p>

<p>So we have the `ThemedButton` that gets a context value from the `ThemeContext` and clicking the `ThemedButton` updates the theme. Cool. Let's take a look at an example where we change the `ThemedButton` to be a functional component with the `useContext` hook</p>

## useContext with single context

<p>It looks pretty similar to the `useState` example, we call `useContext` and get the value. It's almost so easy it's boring. But you could imagine how using context creates an easy way to pass information down the component tree. However, with class components it's easy with one context value, but it ends up being more complicated with multiple context values.</p>

## Class component using multiple contexts

<p>On this slide we have a component thats using two different contexts, I mentioned theming and a logged in user earlier. So we have a `ThemeContext` and a `UserContext`. The class component I showed earlier was accessing the context value with `this.context`. When you're dealing with multiple contexts it's not possible to access both of them that way. So the only option is really what is being shown in the `Content` component here. Wrap the `ProfilePage` component in both context consumer components, use render props with each of those and pass the context values as props. Nested render props create like a pyramid of doom kind of effect for me and it ends up being so much easier with the `useContext` hook.</p>

## useContext with multiple contexts

<p>So imagine we rewrote the `ProfilePage` component from the last example. It was expecting a user and a theme as props, but if we use hooks we can get the values from `useContext`. And it could not be easier or more simple. I don't have more to say on this other than kudos to the React team for creating a very elegant solution. The next hook that we'll look at is `useReducer` the functionality may be familiar for those of you who have used redux.</p>

## useReducer

<p>You can see in the example here that `useReducer` behaves similarly to `useState` it returns a two element array where we're using array destructuring to access the current state value and a dispatch function.</p>

<p>In this case however, the updates happen indirectly because `useReducer` accepts a `reducer` method an initial state and possibly an initializing action. The `dispatch` function accepts actions, you can see at the bottom when the buttons are clicked we dispatch the action with type `increment` or `decrement` and the `reducer` function is responsible for understanding those actions and handling any operations to update the state.</p>

<p>Similarly to redux it is expected that when the state has changed the `reducer` is returning a new state object that would not be strictly equal to the previous state object. So `useReducer` is useful when you have more complex state or state transitions. It can also be easier to extract and test state changes with reducers and plain JavaScript vs testing React component rendering and responding to DOM events. If you get into a situation where you feel like there's a lot of different state to keep track of and you're using `useState` all over the place, try out `useReducer` to handle when your state starts getting out of control.</p>

<p>The next hook `useEffect` is an interesting one. It's likely that you will have to use it often. Most likely you will use the `useEffect` hook for data fetching purposes. So let's look into how we might implement the `useEffect` hook.</p>

## useEffect

Click to open codesandbox

<p>What we have here is our App component that displays an initial user and two buttons to switch between viewing the initial user and another user.</p>

<p>In the `User` component we are calling `useState` to get the current user information and displaying a loading message when we have no user information or displaying the username of the user when we do have a user. Inside of the `useEffect` hook we are calling `fetchUser`, this function accepts a userId and returns the user for that id. So when we click "View user 1" it shows the username for user 1, "sam" and if we click user 2, it shows "dean". I've also added an artificial delay to ensure that we can properly see the loading states.</p>

<p>`useEffect` is interesting wording, initially it was hard to wrap my head around what was meant by an effect, and I think it can be easy to get caught up in the terminology and lose your way to the underlying meaning. You really care about when the callback is going to be run. First of all th e callback will be run after the component is mount and flushed to the DOM, so it acts as a stand in for using `componentDidMount` in class components. The callback is also run when the dependencies change.</p>

### dependencies

<p>An important part of the `useEffect` hook is the second argument. `useEffect` accepts a function to call, and an array of dependencies. In the example here, we have an array with `props.userId`. What that means is that the function we pass to `useEffect` will be executed again whenever `props.userId` changes. So whenever I click one of the buttons to set the user id, it changes, the callback is executed, and we fetch the right user to display. In this way it acts as a stand in for `componentDidUpdate` class components. So when you would reach for a lifecycle method in a class component, you want to look at the `useEffect` hook in functional components.</p>

## useEffect teardown

<p>What would you expect to happen if we're looking at Sam, I click to view Dean, and then before Dean shows up I changed my mind and I click back to view Sam. I would like it to be the case that I only ever see the user Sam, I shouldn't see Dean, I changed my mind. When I click on Sam before Dean is loaded I'm saying I don't want to see Dean, just go back to Sam.</p>

<p>Let's see what happens when I do that.</p>

<p>Ok I so I was looking at Sam, I clicked Dean and then before Dean was loaded I clicked back to Sam. And we saw, it showed loading while Dean was being loaded, we clicked back to Sam, still showed loading, then it showed Dean, and then switched back to Sam with any loading message. That's definitely a bug right there.</p>

<p>We've been looking at the contents of index-1. Let's look at index-2 and see how I ended up solving this bug.</p>

<p>> Update index.js to require('./index-2')</p>

<p>At the top of the `useEffect` callback I added a variable `isCurrent` that is set to true when the callback is executed. And at the end of the callback we're returning a function that sets `isCurrent` to false. And in the middle we're checking `isCurrent` before calling `setUser`. What's happening here is an issue with concurrency. When I click one of these buttons, the `userId` prop changes and the `useEffect` callback is executed. If I click again before `fetchUser` finishes we could have two of these happening at the same time and they're both racing to set the user. The teardown function that we return gives us a way to determine if the callback we're running is the latest execution. So when the callback isn't the latest execution, `isCurrent` is false and we don't call `setUser` when the promise resolves.</p>

### async functions

<p>For the async/await lovers out there, I've included one more `useEffect` example using async and await. It's not possible to pass an async function as the callback for `useEffect`. Let's take a look at that. We'll get a helpful error message though when we try to do this. It says we can define an async function in the scope of the `useEffect` callback and use await inside of that function.</p>

## Refs

<p>In complex web applications it's not uncommon to have get a handle to a specific DOM node, in jQuery this was all you ever did. React has a feature calls refs that can be used to get a reference to a DOM node. Refs has had 3 different iterations and I've been pleased with the changes that have been made along the way to get us where we are.</p>

## String refs component slide

<p>You can see in the render method of this component we're rendering a single `div` and passing the string container as the ref prop to the `div`. Behind the scenes React would set a value on `this.refs` that matched the same name on the component. Ref equals container on the div and in `componentDidMount` you have access to `this.refs.container`.</p>

<p>This would allow you to get a handle or a reference to the underlying DOM element. One example where this is useful is where you need to call focus imperatively on an input. So you can see that I'm logging the DOM element after the component has been mounted.</p>

<p>If I was to try to access `this.refs.container` before the component was mounted or after the component was unmounted the ref would be null because there wouldn't be a DOM node to reference.</p>

<p>This was how refs were used for several years in React. Later it was more in-style to pass a function to a ref prop and set the ref as an instance variable on a class component.</p>

## Callback refs

<p>In the callback style refs example you'll probably notice that nothing significant changed. Instead of passing a string to the ref prop of the div, we're passing a function that accepts a DOM element and sets `this.container` as an instance variable on the component, not much different from before.</p>

## createRef

<p>The third and current iteration on refs came from React.createRef(). In this createRef example you can see in the constructor that we set `this.container` to the result of `React.createRef()` and we access the value of the DOM node through `this.container.current`. So refs that come from createRef or useRef are an object with a current being the current value.</p>

## useRef

<p>Now that I've shown you createRef, the useRef example is just as straightforward. But there are added benefits to useRef with hooks. When using class components it can be common to need instance variables in addition to using component state. When using functional components we don't have the luxury of instance variables. However, refs can behave as instances variables for functional components. Since useRef will continue to return the same ref throughout the lifetime of the component, it's possible to set the current value of a ref and use it as an instance variable.</p>

https://codesandbox.io/s/tender-sun-szxvn

## forwardRef and useImperative handle

<p>My last example was a fun one to work on, this is essentially an implementation of the autoFocus prop, using imperative APIs. We have two components here `App` and `FancyInput`. In `App` we are calling `useRef` and passing that down to `FancyInput`, and we'll get back to the `useEffect` callback in `App` in a second. `FancyInput` is a function component wrapped in `forwardRef` so in addition to props we get a second ref variable passed to the component. `FancyInput` calls `useRef` itself to create a ref for its rendered input. And then we have the `useImperativeHandle` hook. This is an interesting hook. `App` is passing a ref down to a child component `FancyInput`, and then later in `useEffect` calling an imperative method that the child component provides on that ref, you can see the method called `myFocus`. That's being defined in the child component and being used in the parent component. This allows for controlled two-way communication between the parent and the child and the child defines that API for that interaction. Now we could debate whether this opens up good patterns or bad patterns, but what I can definitively say is "use sparingly". One-way communication with passing data props and callbacks will usually be easier.</p>

https://codesandbox.io/s/modern-sky-88e08

## Gotchas

<p>Now earlier in the talk I mentioned the word gotchas. And there are a couple. Eslint will handle a couple of these, so if you're already using create-react-app you're covered. If you have a different project setup, I would recommend including eslint-plugin-react-hooks in your eslint configuration. There are a couple rules that provide some sane checks. When writing a `useEffect` callback and you reference state or props inside it, you want to re-run the callback when those values change. If those values aren't included in the list of dependencies, eslint will warn you about this. I mentioned that you can use any number of hooks, but the number has to be stable. What I meant by that was don't use hooks in loop, or wrap if statements around the use of hooks.</p>

<p>The one final note about gotchas I have is infinite loops. It's a little easier to get into infinite loops because the control flow is indirect. In your component you're directly calling a setState method. This indirectly calls your component to render again. So if the flow of rendering continues to update your state, you run into an infinite loop. And we can see this in the counter example.</p>

## Outro

<p>I didn't have the time to get to everything today. I didn't have time to talk about custom hooks or even all of the built-in hooks. I skipped over `useCallback` and `useMemo`. I'll be around for the rest of the day, feel free to ask questions or you can follow me on twitter and send me messages on there. I'll make the slides available online later today and I'll tweet out a link.</p>

<p>One last thing, if you're interested in hacking on side-projects or running a small business. I've recently started a meeetup for Indie Hackers Minneapolis and you can find it on meetup.com</p>
