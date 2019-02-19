React Across Time

* 0.3.0 (May 29, 2013)
  * Initial Public Release
  * React.createClass
  * react-tools
  * JSX Pragma
* 0.4.0 (July 17, 2013)
  * key prop
  * Not all elements supported
  * Synthetic event system
  * Consistent onChange event
  * React with Add-ons
  * data-reactid
* 0.5.0 (October 16, 2013)
  * class => className transform removed from react-tools
  * Support for more events
  * Support for more DOM properties
* 0.8.0 (December 19, 2013)
  * Support for more events
  * Support for more DOM properties
* January 2, 2014
  * React Developer Tools
* 0.9.0 (February 20, 2014)
  * Support for more events/callbacks
  * Support for more DOM properties/attributes
  * Support for more types in React.PropTypes
  * React.addons.TestUtils
  * React.addons.CSSTransitionGroup
  * component displayName
* 0.10.0 (March 21, 2014)
  * Support for more DOM properties/attributes
  * React.addons.update
* July 13, 2014
  * react-hot-loader
* 0.11.0 (July 17, 2014)
  * Rendering null vs <div/>
  * PureRenderMixin
  * Component namespaces e.g. <Components.Checkbox />
  * Support for more DOM properties/attributes
  * Improved SVG support
* 0.11.2 (September 16, 2014)
  * <dialog> and <picture> elements
  * React.createElement API introduced
* 0.12.0 (October 28, 2014)
  * JSX Object Spread
  * React.createFactory
  * React.render instead of React.renderComponent
  * Lower-cased tags are now treated as DOM elements, upper-cased as composite components
  * JSX Pragma no longer required
* January 28-29 React.js Conf 2015
  * React Native
  * Relay
  * GraphQL
* 0.13.0 (March 10, 2015)
  * "Calls to setState in life-cycle methods are now always batched and therefore asynchronous"
  * "Mutating props after an element is created is deprecated and will cause warnings"
  * Support for using ES6 classes (getDOMNode, replaceState, isMounted, setProps, replaceProps) not available
  * React.findDOMNode
  * setState callback
  * React.addons.classSet deprecated, classnames module introduced
* June 2: Redux
* Sept 14: React Native for Android
* 0.14.0 (October 7, 2015)
  * Stateless functional Components
  * react-dom package introduced to separate react-core and dom handling
  * Separate packages for react addons
  * React.initializeTouchEvents
  * Deprecated react-tools in favor of babel
* 15.0.0 (April 7, 2016)
  * Goodbye data-reactid
  * Goodbye extra spans
  * All SVG tags supported
* create-react-app 0.1.0 (July 22, 2016)
* 15.3.0 (July 29, 2016)
  * React.PureComponent
  * React Test Renderer
* March 16, 2017
  * Gave prop-types to React team
* 15.6.0 (June 13, 2017)
  * Deprecation warning for React.createClass
* 15.6.2 (September 25, 2017)
  * Switched from BSD + Patents to MIT license
* 16.0.0 (September 26, 2017)
  * Rendering of arrays and strings from `render`
  * Error Boundaries
  * Portals
  * Server-side stream rendering
  * Fragments
  * Major Deprecations Removed
    * React.addons
    * React.PropTypes
    * React.createClass
    * React.DOM
* 16.1.0 (November 9, 2017)
  * No more Bower releases
* 16.3.0 (March 29, 2018)
  * Officially supported Context API
  * React.createRef()
  * React.forwardRef()
  * getDerivedStateFromProps
  * React.StrictMode
  * React.unstable_AsyncMode to support suspense
* 16.8.0 (February 6, 2019)
  * Hooks
  * React.lazy

Etc.

* redux
* react-router
* create-react-app
* react-native
* graphql
* relay
* React Dev Tools
* Render Props
* Context API


Stats:
* 10.6k commits
* 1200 contributors
* 7500 PRs



Slide: May 29, 2013 (with the JS logo)

May 29, 2013 React was released at JSConf US.

It didn't strike me as a big event at the time, but React has done a lot to shape the landscape of web application development in the years since its release. And now, React has one hundred and twenty two thousand stars on GitHub, over ten thousand commits, and twelve hundred contributors.

Slide: React.createClass (with bullets for react-tools and the JSX pragma, virtual dom)

The fundamentals of React have been there from the beginning. Props, State, lifecycle methods, and rendering. Since the first release when the only way to render was to use [trigger slide] `React.createClass`. It goes to show you that the ideas surrounding React were more important than the specific implementation.

When React was first released, people focused on some phrasing that was used by the React team, [trigger slide] Virtual DOM. The part of React that handles the Virtual DOM the React team calls the reconciler. That part of the code is responsible for keeping a representation of the DOM in memory understanding the differences between the desired state of the DOM and the current state of the DOM and applying changes. The idea of the Virtual DOM turned out to be so unimportant to actually *using* React that there is not one mention of the word virtual and DOM together in the codebase today.

When React was released the project used a special signifier to identify files that should be compiled with JSX. [trigger slide] You can see here the JSX pragma. The comment starts with a star and then has @jsx and then React.DOM. This lines up with how JSX was compiled in early versions of React. Today we have React.createElement, but then it was React.DOM.div, and React.DOM.span and so on.

It's common today to use Babel to compile projects with syntax that is unsupported in older browsers. JSX itself isn't a standard JavaScript syntax so natually it needs to be compiled to JavaScript. In 2013 the tool that was used to do this was the [trigger slide] react-tools project. It was a project that you can still find on npm and it would compile separate JSX files to standard ES5 JavaScript files.
