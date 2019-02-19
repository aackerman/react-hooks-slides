// Import React
import React from 'react';

// Import Spectacle Core tags
import {
  BlockQuote,
  Cite,
  Deck,
  Heading,
  Image,
  List,
  ListItem,
  Notes,
  Quote,
  Slide,
  Text,
  CodePane,
  Code,
} from 'spectacle';

import createClass from 'raw-loader!../examples/createClass.txt'

// Import theme
import createTheme from 'spectacle/lib/themes/default';

const images = {
  formidagon: require('../assets/formidable-logo.svg'),
  goodWork: require('../assets/good-work.gif')
};

// Require CSS
require('normalize.css');

const theme = createTheme(
  {
    primary: 'rgb(27,43,52)', // 'white'
    secondary: 'white',//'#1F2022',
    tertiary: '#03A9FC',
    quaternary: '#CECECE'
  },
  {
    primary: 'Montserrat',
    secondary: 'Helvetica',
    monospace: 'monospace'
  }
);

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck
        transition={['zoom', 'slide']}
        transitionDuration={500}
        theme={theme}
        progress='none'
      >

        <Slide transition={['zoom']} bgColor="primary">
          <Heading size={1} fit lineHeight={1} textColor="secondary">
            React Across Time
          </Heading>
          <Notes>
            <p>Hello, I'm Aaron Ackerman.</p>
            <p>I've been working with React for about 5 years.</p>
            <p>When those job posting ask for 5 years of experience with React, I actually qualify.</p>
            <p>Tonight we're going to whirlwind through how React has changed since its release.</p>
          </Notes>
        </Slide>

        <Slide transition={['zoom']} bgColor="primary">
          <Heading size={2} lineHeight={2} textColor="secondary">
            Today
          </Heading>
          <Text size={2} lineHeight={2} textColor="secondary">
            122,000 Stars
          </Text>
          <Text size={2} lineHeight={2} textColor="secondary">
            10,000 Commits
          </Text>
          <Text size={2} lineHeight={2} textColor="secondary">
            1,200 Contributors
          </Text>
          <Notes>
            <p>These numbers speak for themselves, 122000 stars, 10000 commits, 1200 contributors</p>
            <p>Today React is a wildly popular library which leads us all to be here tonight</p>
            <p>It's a project that commonly releases new features that other popular projects like Angular, Vue and Ember adopt immediately</p>
            <p>The initial public release happened midway through 2013</p>
          </Notes>
        </Slide>

        <Slide transition={['zoom']} bgColor="primary">
          <Heading size={2} lineHeight={2} textColor="secondary">
            May 29, 2013
          </Heading>
          <Text textColor="secondary">Initial public release 0.3.0</Text>
          <Notes>
            <p>It didn't strike me as a big event at the time.</p>
            <p>I saw plenty of tweets and reactions to the release, but React has done a lot to shape how I've built web applications and the landscape of web application development as a whole</p>
            <p>The first version of React shipped with some base fundamentals</p>
          </Notes>
        </Slide>

        <Slide transition={['zoom']} bgColor="primary">
          <Text textColor="secondary">props</Text>
          <Text textColor="secondary">state</Text>
          <Text textColor="secondary">lifecycle</Text>
          <Text textColor="secondary">events</Text>
          <Text textColor="secondary">rendering</Text>
          <Text textColor="secondary">JSX</Text>
          <Notes>
            <p>The fundamentals of React have been there from the beginning. Props, State, lifecycle methods, events, rendering, and JSX.</p>
            <p>The forms have slightly changed over time as React has changed, but the underpinnings were in place from the beginning</p>
            <p>Since the first release when the only way to render was to use...</p>
          </Notes>
        </Slide>

        <Slide transition={['zoom']} bgColor="primary">
          <Heading size={2} lineHeight={1} textFont="monospace" textColor="secondary">
            React.createClass
          </Heading>
          <Notes>
            <p>React.createClass</p>
            <p>createClass had some implementation details that are different than we see today but the basic are still the same</p>

            <p>It goes to show that the ideas surrounding React were more important than the specifics of the implementation.</p>

            <p>React.createClass has a few lifecycle methods that aren't necessary with like getInitialState and getDefaultProps</p>
            <p>createClass had mixins</p>
          </Notes>
        </Slide>

        <Slide transition={['zoom']} bgColor="primary">
          // TODO fill slide
        </Slide>

        <Slide transition={['zoom']} bgColor="primary">
          <Heading size={2} lineHeight={1} textColor="secondary">
            Virtual DOM
          </Heading>
        </Slide>

        <Slide transition={['zoom']} bgColor="primary">
          <Heading size={2} lineHeight={1} textFont="monospace" textColor="secondary">
            /** @jsx React.DOM */
          </Heading>
        </Slide>

        <Slide transition={['zoom']} bgColor="primary">
          <Heading size={2} lineHeight={1} textFont="monospace" textColor="secondary">
            react-tools
          </Heading>
        </Slide>

        <Slide transition={['zoom']} bgColor="primary">
          <Heading size={2} lineHeight={2} textColor="secondary">
            July 17, 2013
          </Heading>
          <Text textColor="secondary">0.4.0</Text>

          <Notes>
            I'm going to start getting into some of the releases and the features that went along with them. I'm not going to call out all of the features, but I will bring up the notable ones. And I'm going to skip bug fixes entirely. There are a lot of bug fixes that go into each release.
          </Notes>
        </Slide>

        <Slide transition={['zoom']} bgColor="primary">
          <Heading size={2} lineHeight={2} textColor="secondary">
            Key Props
          </Heading>
          <Text textFont="monospace" textColor="secondary">{'<div key={id} />'}</Text>
        </Slide>

        <Slide transition={['zoom']} bgColor="primary">
          <Heading size={2} lineHeight={2} textColor="secondary">
            Not all elements were supported
          </Heading>
        </Slide>

        <Slide transition={['zoom']} bgColor="primary">
          <Heading size={2} lineHeight={2} textColor="secondary">
            Synthetic Event System
          </Heading>
        </Slide>

        <Slide transition={['zoom']} bgColor="primary">
          <Heading size={2} lineHeight={2} textColor="secondary">
            Consistent onChange event
          </Heading>

          <Notes>
            React provides a consistent onChange event for all elements that behave as form inputs. This is differs from the behavior that the native DOM interface provides, but at least it provides some consistency to the user.
          </Notes>
        </Slide>

        <Slide transition={['zoom']} bgColor="primary">
          <Heading size={2} lineHeight={2} textColor="secondary">
            React with Add-ons
          </Heading>

          <Notes>
            Early on in React there was the concept of these addon packages that were supposed to help with using React.
            TODO dig into more detail about which addons existed
          </Notes>
        </Slide>

        <Slide transition={['zoom']} bgColor="primary">
          <Heading size={2} lineHeight={2} textColor="secondary">
            #id to data-reactid
          </Heading>

          <Notes>
            To track changes to DOM nodes, early on in the history of React every node rendered by React was given a unique id. It's not uncommon to want to use ids for CSS styling so at some point in time the team moved to using data star attributes.
          </Notes>
        </Slide>

        <Slide transition={['zoom']} bgColor="primary">
          <Heading size={2} lineHeight={2} textColor="secondary">
            0.5.0 (October 16, 2013)
          </Heading>
          <Text>class => className removed from react-tools</Text>

          <Text>Support for more events</Text>
          <Text>Support for more DOM properties</Text>

          <Notes>
            In October of 2013 the team released 0.5.0.

            There was support in the react-tools project that I mentioned earlier to take the class attribute that is normally used in HTML and transform that to the className prop that is normally used in React components. The team decided to remove that functionality, and that might have been the right decision at the time, but the project using className instead of class continues to be a source of confusion for both beginner and seasoned developers and when copy/pasting HTML.
          </Notes>
        </Slide>

        <Slide transition={['zoom']} bgColor="primary">
          <Heading size={2} lineHeight={2} textColor="secondary">
            0.8.0 (December 19, 2013)
          </Heading>
          <Text>Support for more events</Text>
          <Text>Support for more DOM properties</Text>
          <Notes>
            In December of 2013 the team released 0.8.0. This was a smaller release that didn't have a lot of notable features.
          </Notes>
        </Slide>

        <Slide transition={['zoom']} bgColor="primary">
          <Heading size={2} lineHeight={2} textColor="secondary">
            January 2, 2014
          </Heading>
          <Text>React Developer Tools</Text>

          <Notes>
            The React developer tools were released in 2014. I honestly didn't know that they had been around for that long. The dev tools extension has been a great addition from the beginning and have only improved along way with React.
          </Notes>
        </Slide>

        <Slide transition={['zoom']} bgColor="primary">
          <Heading size={2} lineHeight={2} textColor="secondary">
            February 20, 2014: 0.9.0
          </Heading>
          <Text>Support for more events/callbacks</Text>
          <Text>Support for more DOM properties/attributes</Text>
          <Text>Support for more types in React.PropTypes</Text>
          <Text>React.addons.TestUtils</Text>
          <Text>React.addons.CSSTransitionGroup</Text>
          <Text>Component.displayName</Text>
          <Notes>

          </Notes>
        </Slide>

        <Slide transition={['zoom']} bgColor="primary">
          <Heading size={2} lineHeight={2} textColor="secondary">
            March 21, 2014: 0.10.0
          </Heading>
          <Text>Support for more DOM properties/attributes</Text>
          <Text>React.addons.update</Text>
          <Notes>

          </Notes>
        </Slide>

        <Slide transition={['zoom']} bgColor="primary">
          <Heading size={2} lineHeight={2} textColor="secondary">
            July 13, 2014
          </Heading>
          <Text>react-hot-loader</Text>
          <Notes>

          </Notes>
        </Slide>

        <Slide transition={['zoom']} bgColor="primary">
          <Heading size={2} lineHeight={2} textColor="secondary">
            July 17, 2014: 0.11.0
          </Heading>
          <Text>{'Rendering null vs <div/>'}</Text>
          <Text>PureRenderMixin</Text>
          <Text>{'Component namespaces e.g. <Components.Checkbox />'}</Text>
          <Text>Support for more DOM properties/attributes</Text>
          <Text>Improved SVG support</Text>
          <Notes>

          </Notes>
        </Slide>

        <Slide transition={['zoom']} bgColor="primary">
          <Heading size={2} lineHeight={2} textColor="secondary">
            September 16, 2014: 0.11.2
          </Heading>
          <Text>{'<dialog> and <picture> elements'}</Text>
          <Text>React.createElement API introduced</Text>
          <Notes>

          </Notes>
        </Slide>

        <Slide transition={['zoom']} bgColor="primary">
          <Heading size={2} lineHeight={2} textColor="secondary">
            October 28, 2014: 0.12.0
          </Heading>
          <Text>JSX Object Spread</Text>
          <Text>React.createFactory</Text>
          <Text>React.render instead of React.renderComponent</Text>
          <Text>Lower-cased tags are now treated as DOM elements, upper-cased as composite components</Text>
          <Text>JSX Pragma no longer required</Text>
          <Notes>

          </Notes>
        </Slide>

        <Slide transition={['zoom']} bgColor="primary">
          <Heading size={2} lineHeight={2} textColor="secondary">
            January 28-29 React.js Conf 2015
          </Heading>
          <Text>React Native</Text>
          <Text>GraphQL</Text>
          <Text>Relay</Text>
          <Notes>

          </Notes>
        </Slide>

        <Slide transition={['zoom']} bgColor="primary">
          <Heading size={2} lineHeight={2} textColor="secondary">
            March 10, 2015: 0.13.0
          </Heading>

          <Text>Calls to setState in life-cycle methods are now always batched and therefore asynchronous</Text>
          <Text>Mutating props after an element is created is deprecated and will cause warnings</Text>
          <Text>Support for using ES6 classes</Text>
          <Text>React.findDOMNode</Text>
          <Text>setState callback</Text>
          <Text>React.addons.classSet deprecated, classnames module introduced</Text>
          <Notes>

          </Notes>
        </Slide>

        <Slide transition={['zoom']} bgColor="primary">
          <Heading size={2} lineHeight={2} textColor="secondary">
            June 2, 2015: Redux
          </Heading>
          <Notes>

          </Notes>
        </Slide>
        <Slide transition={['zoom']} bgColor="primary">
          <Heading size={2} lineHeight={2} textColor="secondary">
            Sept 14, 2015: React Native for Android
          </Heading>
          <Notes>

          </Notes>
        </Slide>

        <Slide transition={['zoom']} bgColor="primary">
          <Heading size={2} lineHeight={2} textColor="secondary">
            October 7, 2015: 0.14.0
          </Heading>

          <Text>Stateless functional Components</Text>
          <Text>react-dom</Text>
          <Text>Separate packages for react addons</Text>
          <Text>React.initializeTouchEvents</Text>
          <Text>Deprecated react-tools in favor of babel</Text>
          <Notes>

          </Notes>
        </Slide>
        <Slide transition={['zoom']} bgColor="primary">
          <Heading size={2} lineHeight={2} textColor="secondary">
            April 7, 2016: 15.0.0
          </Heading>

          <Text>Goodbye data-reactid</Text>
          <Text>Goodbye extra spans</Text>
          <Text>All SVG tags supported</Text>
          <Notes>

          </Notes>
        </Slide>

        <Slide transition={['zoom']} bgColor="primary">
          <Heading size={2} lineHeight={2} textColor="secondary">
            July 22, 2016: create-react-app
          </Heading>

          <Text></Text>
          <Text></Text>
          <Text></Text>
          <Notes>

          </Notes>
        </Slide>

        <Slide transition={['zoom']} bgColor="primary">
          <Heading size={2} lineHeight={2} textColor="secondary">
            July 29, 2016: 15.3.0
          </Heading>

          <Text>React.PureComponent</Text>
          <Text>React Test Renderer</Text>
          <Notes>

          </Notes>
        </Slide>

        <Slide transition={['zoom']} bgColor="primary">
          <Heading size={2} lineHeight={2} textColor="secondary">
            March 16, 2017: prop-types
          </Heading>
          <Notes>
            I gave the React team the prop-types repo
          </Notes>
        </Slide>

        <Slide transition={['zoom']} bgColor="primary">
          <Heading size={2} lineHeight={2} textColor="secondary">
            June 13, 2017: 15.6.0
          </Heading>
          <Text>Deprecation warnings for React.createClass</Text>
          <Notes>

          </Notes>
        </Slide>

        <Slide transition={['zoom']} bgColor="primary">
          <Heading size={2} lineHeight={2} textColor="secondary">
            September 25, 2017: 15.6.2
          </Heading>
          <Text>Switched from BSD + Patents to MIT license</Text>
          <Notes>

          </Notes>
        </Slide>

        <Slide transition={['zoom']} bgColor="primary">
          <Heading size={2} lineHeight={2} textColor="secondary">
            September 26, 2017: 16.0.0
          </Heading>
          <Text>Rendering of arrays and strings from `render`</Text>
          <Text>Error Boundaries</Text>
          <Text>Portals</Text>
          <Text>Server-side stream rendering</Text>
          <Text>Fragments</Text>
          <Text>Major Deprecations Removed</Text>
          <Notes>

          </Notes>
        </Slide>

        <Slide transition={['zoom']} bgColor="primary">
          <Heading size={2} lineHeight={2} textColor="secondary">
            November 9, 2017: 16.1.0
          </Heading>
          <Text>No more Bower releases</Text>
          <Notes>

          </Notes>
        </Slide>

        <Slide transition={['zoom']} bgColor="primary">
          <Heading size={2} lineHeight={2} textColor="secondary">
            March 29, 2018: 16.3.0
          </Heading>
          <Text>Officially supported Context API</Text>
          <Text>React.createRef</Text>
          <Text>React.forwardRef</Text>
          <Text>getDerivedStateFromProps</Text>
          <Text>React.StrictMode</Text>
          <Text>React.unstable_AsyncMode to support suspense</Text>
          <Notes>

          </Notes>
        </Slide>

        <Slide transition={['zoom']} bgColor="primary">
          <Heading size={2} lineHeight={2} textColor="secondary">
            February 6, 2019: 16.8.0
          </Heading>
          <Text>Hooks</Text>
          <Text>React.lazy</Text>
          <Notes>

          </Notes>
        </Slide>

        <Slide transition={['zoom']} bgColor="primary">
          <Heading size={2} lineHeight={2} textColor="secondary">
            Conclusions
          </Heading>

          <Notes>
            React has had a long history as far as browser view libraries go. Personally I'm more excited to use React now than I was when I started. The team behind the project has strong corporate and community backing and there are major updates like Suspense still on the horizon in the coming months.
          </Notes>
        </Slide>
      </Deck>
    );
  }
}
