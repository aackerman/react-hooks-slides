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
          <Text textColor="secondary">class => className removed from react-tools</Text>

          <Text textColor="secondary">Support for more events</Text>
          <Text textColor="secondary">Support for more DOM properties</Text>

          <Notes>
            In October of 2013 the team released 0.5.0.

            There was support in the react-tools project that I mentioned earlier to take the class attribute that is normally used in HTML and transform that to the className prop that is normally used in React components. The team decided to remove that functionality, and that might have been the right decision at the time, but the project using className instead of class continues to be a source of confusion for both beginner and seasoned developers and when copy/pasting HTML.
          </Notes>
        </Slide>

        <Slide transition={['zoom']} bgColor="primary">
          <Heading size={2} lineHeight={2} textColor="secondary">
            0.8.0 (December 19, 2013)
          </Heading>
          <Text textColor="secondary">Support for more events</Text>
          <Text textColor="secondary">Support for more DOM properties</Text>
          <Notes>
            In December of 2013 the team released 0.8.0. This was a smaller release that didn't have a lot of notable features.
          </Notes>
        </Slide>

        <Slide transition={['zoom']} bgColor="primary">
          <Heading size={2} lineHeight={2} textColor="secondary">
            January 2, 2014
          </Heading>
          <Text textColor="secondary">React Developer Tools</Text>

          <Notes>
            The React developer tools were released in 2014. I honestly didn't know that they had been around for that long. The dev tools extension has been a great addition from the beginning and have only improved along way with React.
          </Notes>
        </Slide>

        <Slide transition={['zoom']} bgColor="primary">
          <Heading size={2} lineHeight={2} textColor="secondary">
            February 20, 2014: 0.9.0
          </Heading>
          <Text textColor="secondary">Support for more events/callbacks</Text>
          <Text textColor="secondary">Support for more DOM properties/attributes</Text>
          <Text textColor="secondary">Support for more types in React.PropTypes</Text>
          <Text textColor="secondary">React.addons.TestUtils</Text>
          <Text textColor="secondary">React.addons.CSSTransitionGroup</Text>
          <Text textColor="secondary">Component.displayName</Text>
          <Notes>
            TODO: needs notes and examples
          </Notes>
        </Slide>

        <Slide transition={['zoom']} bgColor="primary">
          <Heading size={2} lineHeight={2} textColor="secondary">
            March 21, 2014: 0.10.0
          </Heading>
          <Text textColor="secondary">Support for more DOM properties/attributes</Text>
          <Text textColor="secondary">React.addons.update</Text>
          <Notes>
            TODO: needs notes and examples
          </Notes>
        </Slide>

        <Slide transition={['zoom']} bgColor="primary">
          <Heading size={2} lineHeight={2} textColor="secondary">
            July 13, 2014
          </Heading>
          <Text textColor="secondary">react-hot-loader</Text>
          <Notes>
            TODO: needs notes and examples
          </Notes>
        </Slide>

        <Slide transition={['zoom']} bgColor="primary">
          <Heading size={2} lineHeight={2} textColor="secondary">
            July 17, 2014: 0.11.0
          </Heading>
          <Text textColor="secondary">{'Rendering null vs <div/>'}</Text>
          <Text textColor="secondary">PureRenderMixin</Text>
          <Text textColor="secondary">{'Component namespaces e.g. <Components.Checkbox />'}</Text>
          <Text textColor="secondary">Support for more DOM properties/attributes</Text>
          <Text textColor="secondary">Improved SVG support</Text>
          <Notes>
            TODO: needs notes and examples
          </Notes>
        </Slide>

        <Slide transition={['zoom']} bgColor="primary">
          <Heading size={2} lineHeight={2} textColor="secondary">
            September 16, 2014: 0.11.2
          </Heading>
          <Text textColor="secondary">{'<dialog> and <picture> elements'}</Text>
          <Text textColor="secondary">React.createElement API introduced</Text>
          <Notes>
            TODO: needs notes and examples
          </Notes>
        </Slide>

        <Slide transition={['zoom']} bgColor="primary">
          <Heading size={2} lineHeight={2} textColor="secondary">
            October 28, 2014: 0.12.0
          </Heading>
          <Text textColor="secondary">JSX Object Spread</Text>
          <Text textColor="secondary">React.createFactory</Text>
          <Text textColor="secondary">React.render instead of React.renderComponent</Text>
          <Text textColor="secondary">Lower-cased tags are now treated as DOM elements, upper-cased as composite components</Text>
          <Text textColor="secondary">JSX Pragma no longer required</Text>
          <Notes>
            TODO: needs notes and examples
          </Notes>
        </Slide>

        <Slide transition={['zoom']} bgColor="primary">
          <Heading size={2} lineHeight={2} textColor="secondary">
            Nov 26, 2014: react-router
          </Heading>
          <Text textColor="secondary">First Tag</Text>
        </Slide>

        <Slide transition={['zoom']} bgColor="primary">
          <Heading size={2} lineHeight={2} textColor="secondary">
            January 28-29 React.js Conf 2015
          </Heading>
          <Text textColor="secondary">React Native</Text>
          <Text textColor="secondary">GraphQL</Text>
          <Text textColor="secondary">Relay</Text>
          <Notes>
            TODO: needs notes
          </Notes>
        </Slide>

        <Slide transition={['zoom']} bgColor="primary">
          <Heading size={2} lineHeight={2} textColor="secondary">
            March 10, 2015: 0.13.0
          </Heading>

          <Text textColor="secondary">Calls to setState in life-cycle methods are now always batched and therefore asynchronous</Text>
          <Text textColor="secondary">Mutating props after an element is created is deprecated and will cause warnings</Text>
          <Text textColor="secondary">Support for using ES6 classes</Text>
          <Text textColor="secondary">React.findDOMNode</Text>
          <Text textColor="secondary">setState callback</Text>
          <Text textColor="secondary">React.addons.classSet deprecated, classnames module introduced</Text>
          <Notes>
            TODO: needs notes and examples
          </Notes>
        </Slide>

        <Slide transition={['zoom']} bgColor="primary">
          <Heading size={2} lineHeight={2} textColor="secondary">
            June 2, 2015: Redux
          </Heading>
          <Notes>
            TODO: needs notes
          </Notes>
        </Slide>
        <Slide transition={['zoom']} bgColor="primary">
          <Heading size={2} lineHeight={2} textColor="secondary">
            Sept 14, 2015: React Native for Android
          </Heading>
          <Notes>
            TODO: needs notes
          </Notes>
        </Slide>

        <Slide transition={['zoom']} bgColor="primary">
          <Heading size={2} lineHeight={2} textColor="secondary">
            October 7, 2015: 0.14.0
          </Heading>

          <Text textColor="secondary">Stateless functional Components</Text>
          <Text textColor="secondary">react-dom</Text>
          <Text textColor="secondary">Separate packages for react addons</Text>
          <Text textColor="secondary">React.initializeTouchEvents</Text>
          <Text textColor="secondary">Deprecated react-tools in favor of babel</Text>
          <Notes>
            TODO: needs notes and examples
          </Notes>
        </Slide>
        <Slide transition={['zoom']} bgColor="primary">
          <Heading size={2} lineHeight={2} textColor="secondary">
            April 7, 2016: 15.0.0
          </Heading>

          <Text textColor="secondary">Goodbye data-reactid</Text>
          <Text textColor="secondary">Goodbye extra spans</Text>
          <Text textColor="secondary">All SVG tags supported</Text>
          <Notes>
            TODO: needs notes and examples
          </Notes>
        </Slide>

        <Slide transition={['zoom']} bgColor="primary">
          <Heading size={2} lineHeight={2} textColor="secondary">
            July 22, 2016: create-react-app
          </Heading>

          <Text textColor="secondary"></Text>
          <Text textColor="secondary"></Text>
          <Text textColor="secondary"></Text>
          <Notes>
            TODO: needs notes
          </Notes>
        </Slide>

        <Slide transition={['zoom']} bgColor="primary">
          <Heading size={2} lineHeight={2} textColor="secondary">
            July 29, 2016: 15.3.0
          </Heading>

          <Text textColor="secondary">React.PureComponent</Text>
          <Text textColor="secondary">React Test Renderer</Text>
          <Notes>
            TODO: needs notes and examples
          </Notes>
        </Slide>

        <Slide transition={['zoom']} bgColor="primary">
          <Heading size={2} lineHeight={2} textColor="secondary">
            March 16, 2017: prop-types
          </Heading>
          <Notes>
            TODO: needs notes and examples
            I gave the React team the prop-types repo
          </Notes>
        </Slide>

        <Slide transition={['zoom']} bgColor="primary">
          <Heading size={2} lineHeight={2} textColor="secondary">
            June 13, 2017: 15.6.0
          </Heading>
          <Text textColor="secondary">Deprecation warnings for React.createClass</Text>
          <Notes>
            TODO: needs notes
          </Notes>
        </Slide>

        <Slide transition={['zoom']} bgColor="primary">
          <Heading size={2} lineHeight={2} textColor="secondary">
            September 25, 2017: 15.6.2
          </Heading>
          <Text textColor="secondary">Switched from BSD + Patents to MIT license</Text>
          <Notes>
            TODO: needs notes
          </Notes>
        </Slide>

        <Slide transition={['zoom']} bgColor="primary">
          <Heading size={2} lineHeight={2} textColor="secondary">
            September 26, 2017: 16.0.0
          </Heading>
          <Text textColor="secondary">Rendering of arrays and strings from `render`</Text>
          <Text textColor="secondary">Error Boundaries</Text>
          <Text textColor="secondary">Portals</Text>
          <Text textColor="secondary">Server-side stream rendering</Text>
          <Text textColor="secondary">Fragments</Text>
          <Text textColor="secondary">Major Deprecations Removed</Text>
          <Notes>
            TODO: needs notes and examples
          </Notes>
        </Slide>

        <Slide transition={['zoom']} bgColor="primary">
          <Heading size={2} lineHeight={2} textColor="secondary">
            November 9, 2017: 16.1.0
          </Heading>
          <Text textColor="secondary">No more Bower releases</Text>
          <Notes>
            TODO: needs notes
          </Notes>
        </Slide>

        <Slide transition={['zoom']} bgColor="primary">
          <Heading size={2} lineHeight={2} textColor="secondary">
            March 29, 2018: 16.3.0
          </Heading>
          <Text textColor="secondary">Officially supported Context API</Text>
          <Text textColor="secondary">React.createRef</Text>
          <Text textColor="secondary">React.forwardRef</Text>
          <Text textColor="secondary">getDerivedStateFromProps</Text>
          <Text textColor="secondary">React.StrictMode</Text>
          <Text textColor="secondary">React.unstable_AsyncMode to support suspense</Text>
          <Notes>
            TODO: needs notes and examples
          </Notes>
        </Slide>

        <Slide transition={['zoom']} bgColor="primary">
          <Heading size={2} lineHeight={2} textColor="secondary">
            February 6, 2019: 16.8.0
          </Heading>
          <Text textColor="secondary">Hooks</Text>
          <Text textColor="secondary">React.lazy</Text>
          <Notes>
            TODO: needs notes and examples
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
