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
  createClass: require('../assets/createClass.png'),
  propTypes: require('../assets/propTypes.png'),
  propTypesEmail: require('../assets/propTypesEmail.png'),
  statelessFunctionalComponents: require('../assets/statelessFunctionalComponents.png'),
  hooks: require('../assets/hooks.png'),
  babel: require('../assets/babel.png'),
  roadmap: require('../assets/roadmap.png'),
  glasses: require('../assets/glasses.png'),
  pureComponent: require('../assets/pureComponent.png'),
  testRenderer: require('../assets/testRenderer.png'),
  errorBoundary: require('../assets/errorBoundary.png'),
  portal: require('../assets/portal.png'),
  fragment: require('../assets/fragment.png'),
  context: require('../assets/context.png'),
  portalGame: require('../assets/portalGame.jpg'),
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
            <p>Tonight we're going to whirlwind through how React has changed since its release</p>
            <p>I'm definitely going to leave a bunch out, and it's totally subjective what I decided to leave out. I had about 10 days to prepare this talk and I would have loved to spend more time on it, and just to be clear many of these examples are screenshotted from the react documentation, so props to anyone who has worked on those.</p>
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
            <p>It's a project that commonly releases new features that other popular projects like Angular, Vue, and Ember adopt immediately</p>
            <p>The initial public release happened midway through 2013</p>
          </Notes>
        </Slide>

        <Slide transition={['zoom']} bgColor="primary">
          <Heading size={4} lineHeight={2} textColor="secondary">
            May 29, 2013: 0.3.0
          </Heading>
          <Text textColor="secondary">Initial public release</Text>
          <Notes>
            <p>It didn't strike me as a big event at the time.</p>
            <p>I saw plenty of tweets and reactions both positive and negavite, but nobody can deny that React has done a lot to shape the landscape of web and mobile application development</p>
            <p>The first version of React shipped with some base fundamentals</p>
          </Notes>
        </Slide>

        <Slide transition={['zoom']} bgColor="primary">
          <Text textColor="secondary">props</Text>
          <Text textColor="secondary">state</Text>
          <Text textColor="secondary">lifecycle</Text>
          <Text textColor="secondary">events</Text>
          <Text textColor="secondary">rendering</Text>
          <Text textColor="secondary">jsx</Text>
          <Notes>
            <p>Props, State, lifecycle methods, events, rendering, and JSX.</p>
            <p>The forms have slightly changed over time as React has changed, but the underpinnings were in place from the beginning</p>
            <p>In the first release when the only way to render was to use...</p>
          </Notes>
        </Slide>

        <Slide transition={['zoom']} bgColor="primary">
          <img style={{ maxHeight: '700px' }} src={images.createClass} />
          <Notes>
            <p>React.createClass</p>
            <p>It looked a lot like this, you can see I'm making a ham sandwich with mustard and cheese</p>
            <p>And you can see that I went for real nostalgia here by using var declarations and classic require syntax</p>
            <p>createClass had a few parts that aren't around anymore</p>
          </Notes>
        </Slide>

        <Slide transition={['zoom']} bgColor="primary">
          <Heading size={4} lineHeight={1} textFont="monospace" textColor="secondary">
            getInitialState
          </Heading>
          <Heading size={4} lineHeight={1} textFont="monospace" textColor="secondary">
            getDefaultProps
          </Heading>
          <Heading size={4} lineHeight={1} textFont="monospace" textColor="secondary">
            mixins
          </Heading>

          <Notes>
            <p>getInitialState and getDefaultProps</p>
            <p>In class components, defaultProps is a static property on the class and initial state is defined in the constructor</p>
            <p>createClass had these mixins and mixins were a way to share functionality, arguably a poor way to share functionality</p>
            <p>There is no direct form of mixins in newer versions of react, they were essentially removed entirely when the createClass form was deprecated.</p>
            <p>Newer solutions favor composition in a couple different forms, specifically higher order components, render props, and reusing hooks</p>

            <p>When React was first released, people focused on some phrasing that was used by the React team</p>
          </Notes>
        </Slide>

        <Slide transition={['zoom']} bgColor="primary">
          <Heading size={4} lineHeight={1} textColor="secondary">
            Virtual DOM
          </Heading>

          <Notes>
            <p>Virtual DOM</p>
            <p>The part of React that handles the Virtual DOM the React team calls the reconciler</p>
            <p>That part of the code is responsible for keeping a representation of the DOM in memory understanding the differences between the desired state of the DOM and the current state of the DOM and applying changes</p>
            <p>The idea of the Virtual DOM turned out to be so unimportant to actually *using* React that there is not one mention of the word virtual and DOM together in the codebase today</p>

            <p>When React was released the project used a special comment to identify files that should be compiled with JSX</p>
          </Notes>
        </Slide>

        <Slide transition={['zoom']} bgColor="primary">
          <Heading size={4} lineHeight={2} textFont="monospace" textColor="secondary">
            /** @jsx React.DOM */
          </Heading>
          <Heading size={4} lineHeight={2} textFont="monospace" textColor="secondary">
            React.DOM.div
          </Heading>
          <Heading size={4} lineHeight={2} textFont="monospace" textColor="secondary">
            React.DOM.span
          </Heading>

          <Notes>
            <p>That's the first line you can see here, the JSX pragma. It was comment that starts with @jsx and then React.DOM. This lines up with how JSX was compiled in early versions of React. It was common to be creating a react file with JSX, forget to add that comment to your file and have absolutely no idea why the file wouldn't compile and you would notice the problem or bring over someone else, or even post on stack overflow, but eventually you copy pasted the answer, because nobody types that out from scratch.</p>

            <p>It's common today to use Babel to compile projects with new syntax that is unsupported in modern browsers or modern syntax that is supported in older browsers</p>
            <p>JSX itself isn't a standard JavaScript syntax so natually it needs to be compiled to JavaScript. In 2013 the tool that was used to do this was the [trigger slide]</p>
          </Notes>
        </Slide>

        <Slide transition={['zoom']} bgColor="primary">
          <Heading size={2} lineHeight={1} textFont="monospace" textColor="secondary">
            react-tools
          </Heading>

          <Notes>
            react-tools project. It was a project that you can still find on npm and it would compile separate JSX files to standard ES5 JavaScript files. And that was what you had to use because Babel didn't even exist and this is what they were using at Facebook.
          </Notes>
        </Slide>

        <Slide transition={['zoom']} bgColor="primary">
          <Heading size={4} lineHeight={2} textColor="secondary">
            July 17, 2013: 0.4.0
          </Heading>
          <Notes>
            <p>I'm going to start getting into some of the releases and the features that went along with them. I'm not going to call out all of the features, but I will bring up the notable ones. And I'm going to skip bug fixes entirely. There are a lot of bug fixes that go into each release.</p>
            <p>Back in 2013 we had the 0.4.0 release and it included a few important features</p>
          </Notes>
        </Slide>

        <Slide transition={['zoom']} bgColor="primary">
          <Heading size={4} lineHeight={2} textColor="secondary">
            Key Props
          </Heading>
          <Text textFont="monospace" textColor="secondary">{'<div key={id} />'}</Text>

          <Notes>
            <p>Key props are still a thing. But, they weren't present in the library until after it was publicly released. I still commonly see warnings for key props that I've mapped over a list of elements and the array of elements is missing keys.</p>
            <p>If you're unfamiliar with key props, they are used by react to determine if the ordering of elements is the same after an update, and just remember to not use array indexes for your key props</p>
          </Notes>
        </Slide>

        <Slide transition={['zoom']} bgColor="primary">
          <Heading size={4} lineHeight={2} textColor="secondary">
            {'<canvas>'}
          </Heading>

          <Notes>
            <p>In the early days of react not all elements were supported. People would attempt to use DOM elements that weren't supported, the elements wouldn't render and they would end up filing an issue on GitHub.</p>
            <p>So the 0.4.0 release brought support for the canvas element</p>
          </Notes>
        </Slide>

        <Slide transition={['zoom']} bgColor="primary">
          <img style={{ maxWidth: '100%', maxHeight: '700px' }} src={images.propTypes} />

          <Notes>
            Prop types were released in 0.4.0. If you're new to React, prop types are used as a helpful warning system. When incorrect values are passed to a component you will see helpful warning messages in your developer tools console. I still use prop types often. Earlier in the history of react they were embedded in the core of the project, they weren't a separate package. I went ahead and extracted prop-types into a separate package so I could use it in projects I was working on that weren't using React.
          </Notes>
        </Slide>

        <Slide transition={['zoom']} bgColor="primary">
          <Heading size={4} lineHeight={2} textColor="secondary">
            Synthetic Event System
          </Heading>
          <Notes>
            <p>You may be unaware that React is powered by a synthetic event system</p>
            <p>This means that React is normalizing event properties and behavior across different browsers to provide a consistent developer experience</p>
            <p>This means that as a user you can immediately forget that I said anything about this because generally it Just Works™</p>
          </Notes>
        </Slide>

        <Slide transition={['zoom']} bgColor="primary">
          <Heading size={4} lineHeight={2} textColor="secondary">
            Consistent onChange event
          </Heading>

          <Notes>
            <p>React provides a consistent onChange event for all elements that behave as form inputs. This is differs from the behavior that the native DOM interface provides, but at least it provides some consistency to the user.</p>
            <p>The native DOM onchange event for an input element will trigger when the a user clicks outside the input or tabs to another element</p>
            <p>The onChange behavior in React is closer to the native oninput callback that can be attached to input elements where the callback is called everytime the value changes</p>
            <p>The consistency of the onChange event is a part of React that I value, I don't have to know about the difference between oninput and onchange. There's only one option to use.</p>
          </Notes>
        </Slide>

        <Slide transition={['zoom']} bgColor="primary">
          <Heading size={4} lineHeight={2} textColor="secondary">
            Wrappers for native<br/> DOM elements
          </Heading>

          <Notes>
            <p>Similar to the consistent onChange event and the synthetic event system, React uses wrappers for the native form inputs like textarea, select, and the input itself "to standardize inconsistencies in browser implementations"</p>
            <p>Problems with inconsistencies between browsers are things that don't commonly come up in code reviews or even in manual testing scenarios.</p>
          </Notes>
        </Slide>

        <Slide transition={['zoom']} bgColor="primary">
          <Heading size={4} lineHeight={2} textColor="secondary">
            React with Add-ons
          </Heading>

          <List>
            <ListItem>update</ListItem>
            <ListItem>ReactTestUtils</ListItem>
            <ListItem>LinkedStateMixin</ListItem>
            <ListItem>...</ListItem>
          </List>

          <Notes>
            <p>Early on in React there was the concept of these addon packages that were supposed to help with using React.</p>
            <p>The update addon was used to make deep updates to state, the Immer project that was mentioned at a previous meetup can be used in place of that to make deep updates to state in an easy way</p>
            <p>The ReactTestUtils are still commonly used to test React components if you're not using something else like Enzyme</p>
            <p>The LinkedStateMixin mixin allowed inputs to simulate two-way binding behavior that was common in other popular libraries at the time</p>
            <p>Today many of these addons still exist, but they have been pulled into separate packages on npm and are no longer bundled alongside React core</p>

            <p>Early on in the history of React every DOM node rendered by React was given a unique id and used the id attribute of the DOM node</p>
            <p></p>
          </Notes>
        </Slide>

        <Slide transition={['zoom']} bgColor="primary">
          <Heading size={4} lineHeight={2} textColor="secondary">
            #id to data-reactid
          </Heading>

          <Notes>
            <p>It's not uncommon to want to use ids for CSS styling so at some point in time the team moved to using data star attributes with data-reactid.</p>
            <p>At some point this was also a thorn in the team and I'll mention later when these data attributes were removed</p>
            <p>There were several important features in the 0.4.0 release, and in creating this talk it was fun to look back and see just how early some of the groundwork was laid for the success of the project</p>
          </Notes>
        </Slide>

        <Slide transition={['zoom']} bgColor="primary">
          <Heading size={4} lineHeight={2} textColor="secondary">
            October 16, 2013: 0.5.0
          </Heading>
          <Text textColor="secondary">class to className removed from react-tools</Text>
          <Text textColor="secondary">Support for more events</Text>
          <Text textColor="secondary">Support for more DOM properties</Text>

          <Notes>
            <p>In October of 2013 the team released 0.5.0.</p>

            <p>There was support in the react-tools project that I mentioned earlier to take the class attribute that is normally used in HTML and transform that to the className prop that is normally used in React components. The team decided to remove that functionality, there are now warnings instead</p>
            <p>I mentioned before about adding support for new DOM elements, in the same way not all of the DOM callbacks or properties were supported, especially around SVG, so I'll note a couple times these releases that add support for more of those.</p>
          </Notes>
        </Slide>

        <Slide transition={['zoom']} bgColor="primary">
          <Heading size={4} lineHeight={2} textColor="secondary">
            December 19, 2013: 0.8.0
          </Heading>
          <Text textColor="secondary">Support for more events</Text>
          <Text textColor="secondary">Support for more DOM properties</Text>
          <Notes>
            <p>In December of 2013 the team released 0.8.0. This was a smaller release that didn't have a lot of notable features.</p>
          </Notes>
        </Slide>

        <Slide transition={['zoom']} bgColor="primary">
          <Heading size={4} lineHeight={2} textColor="secondary">
            January 2, 2014
          </Heading>
          <Text textColor="secondary">React Developer Tools</Text>

          <Notes>
            <p>The React developer tools were released in 2014</p>
            <p>I honestly didn't know that they had been around for that long. The dev tools extension has been a great addition from the beginning and have only improved along way with React.</p>
          </Notes>
        </Slide>

        <Slide transition={['zoom']} bgColor="primary">
          <Heading size={4} lineHeight={2} textColor="secondary">
            February 20, 2014: 0.9.0
          </Heading>
          <Text textColor="secondary">Support for more events/callbacks</Text>
          <Text textColor="secondary">Support for more DOM properties/attributes</Text>
          <Text textColor="secondary">Support for more types in React.PropTypes</Text>
          <Text textColor="secondary">React.addons.TestUtils</Text>
          <Text textColor="secondary">React.addons.CSSTransitionGroup</Text>
          <Text textColor="secondary">Component.displayName</Text>
          <Notes>
            The 0.9.0 release in February 5 years ago, came along with ReactTestUtils and component displayName. TestUtils has been important for exactly the reason it's named the way it is, for testing. Component displayName is something that most people don't worry about, these days the babel JSX transform will handle adding a displayName to component where the name is easy to figure out. But the displayName is important for react-dev-tools and being able to understand the component hierarchy at a glance.
          </Notes>
        </Slide>

        <Slide transition={['zoom']} bgColor="primary">
          <Heading size={4} lineHeight={2} textColor="secondary">
            March 21, 2014: 0.10.0
          </Heading>
          <Text textColor="secondary">Support for more SVG tags</Text>
          <Text textColor="secondary">Support for more DOM properties/attributes</Text>
          <Text textColor="secondary">React.addons.update</Text>
          <Notes>
            <p>March 2014 brought the 0.10.0 release with support for more SVG and DOM callbacks like onLoad for img tags. As well as the addon for performing deep updates on objects that often need to happen for setState</p>
          </Notes>
        </Slide>

        <Slide transition={['zoom']} bgColor="primary">
          <Heading size={4} lineHeight={2} textColor="secondary">
            July 13, 2014
          </Heading>
          <Text textColor="secondary">react-hot-loader 🔥</Text>
          <Notes>
            <p>In July 2014 Dan Abramov, who works on the React team at Facebook, released a project called react-hot-loader. If you're not familiar with react-hot-loader it's a fun project that takes advantage of the hot coad reloading functionality in webpack where code is updated in place without having the refresh the browser. Normally without react-hot-loader any components would lose their local component state. When you use react-hot-loader you can take advantage of not losing that state and not having to possibly go through several clicks to get the app to the state you want it to be in</p>
          </Notes>
        </Slide>

        <Slide transition={['zoom']} bgColor="primary">
          <Heading size={4} lineHeight={2} textColor="secondary">
            July 17, 2014: 0.11.0
          </Heading>
          <Text textColor="secondary">{'Rendering null vs <div/>'}</Text>
          <Text textColor="secondary">PureRenderMixin</Text>
          <Text textColor="secondary">{'Component namespaces e.g. <Components.Checkbox />'}</Text>
          <Text textColor="secondary">Support for more DOM properties/attributes</Text>
          <Text textColor="secondary">Improved SVG support</Text>
          <Notes>
            <p>Before July 2014 a component had to render a DOM element, they couldn't effectively render nothing, so as of the 0.11.0 release you can render nothing.</p>
            <p>I mentioned mixins earlier, the PureRenderMixin implemented the shouldComponentUpdate lifecycle method for a createClass component to do a shallow compare to determine if the component should render again. It's an optimization if you can guarantee that the component only uses values that can be compared with a triple equals strict equality comparison</p>
            <p>Component namespaces are still a thing you might want if you're building a library of components and you don't want all of your library consumers to rely on specific files</p>
            <p>And again another release with incremental improvements for DOM callbacks, attributes, and support for SVG tags</p>
          </Notes>
        </Slide>

        <Slide transition={['zoom']} bgColor="primary">
          <Heading size={4} lineHeight={2} textColor="secondary">
            September 16, 2014: 0.11.2
          </Heading>
          <Text textColor="secondary">{'<dialog> and <picture> elements'}</Text>
          <Text textColor="secondary">React.createElement API introduced</Text>
          <Notes>
            <p>More support for new elements, we the get dialog and picture elements</p>
            <p>The createElement API is created to replace the element factories that look like React.DOM.div and React.DOM.span, instead you either pass the class of the component to instantiate or the string of a native DOM element like a div or a span</p>
          </Notes>
        </Slide>

        <Slide transition={['zoom']} bgColor="primary">
          <Heading size={4} lineHeight={2} textColor="secondary">
            October 28, 2014: 0.12.0
          </Heading>
          <Text textColor="secondary">JSX Object Spread</Text>
          <Text textColor="secondary">JSX Pragma no longer required</Text>

          <Notes>
            <p>Late 2014, brought some great things to React. </p>
            <p>Object spread in JSX allowed people to pass props to a component without specifying every single field that was coming through. And it was familiar to rest/spread syntax for JavaScript arrays. This feature was so good in JSX that it is now included in the 2018 version of the spec.</p>
            <p>The JSX pragma was also no longer needed so it couldn't be forgotten when compiling JSX files</p>
          </Notes>
        </Slide>

        <Slide transition={['zoom']} bgColor="primary">
          <Heading size={4} lineHeight={2} textColor="secondary">
            Nov 26, 2014: react-router
          </Heading>

          <Notes>
            react-router is a project that I commonly reach for when building new React projects. If you're new to react, the react-router project is use to handle conditional view rendering based on the state of the browser URL or an in-memory representation of a navigation history.
          </Notes>
        </Slide>

        <Slide transition={['zoom']} bgColor="primary">
          <Heading size={4} lineHeight={2} textColor="secondary">
            January 28-29<br/>React.js Conf 2015
          </Heading>
          <Text textColor="secondary">React Native</Text>
          <Text textColor="secondary">GraphQL</Text>
          <Text textColor="secondary">Relay</Text>
          <Notes>
            <p>React.js Conf 2015 was very exciting</p>
            <p>I didn't get to go personally, but some very impactful projects were released at the conference. React Native for iOS was released to be able to use JavaScript Core and a wire protocol to be able to communicate between JavaScript and native Objective-C and Swift and create full featured iOS apps with React. This was and still is awesome, I don't know Objective-C or Swift and I could probably create an app using React Native and deploy it to the app store.</p>
          </Notes>
        </Slide>

        <Slide transition={['zoom']} bgColor="primary">
          <Heading size={4} lineHeight={2} textColor="secondary">
            March 10, 2015: 0.13.0
          </Heading>

          <Text textColor="secondary">Calls to setState in life-cycle methods are asynchronous</Text>
          <Text textColor="secondary">setState callback</Text>
          <Text textColor="secondary">Mutating props causes warnings</Text>
          <Text textColor="secondary">React.findDOMNode</Text>
          <Text textColor="secondary">React.addons.classSet deprecated, classnames module introduced</Text>
          <Text textColor="secondary">Support for using ES2015 classes</Text>
          <Notes>
            <p>March 2015 introduced a few things</p>
            <p>If you were unaware, setState takes two arguments, the first being an object or updater function to set the new state, and the second being a callback to be run after component state has been updated. So when calling setState inside a lifecycle method you can't guarantee that reading from state on a line after a call to setState will be the updated values. This change necessitated second callback argument if you definitely need to do something after the state has been updated.</p>

            <p>Mutating props has always been a big no no, so the team added warnings for that</p>
            <p>The findDOMNode method was introduced because of the plans to use classes and deprecate the method that createClass was using to find DOM nodes</p>
          </Notes>
        </Slide>

        <Slide transition={['zoom']} bgColor="primary">
          <Heading size={4} lineHeight={2} textColor="secondary">
            June 2, 2015: Redux
          </Heading>
          <Notes>
            Redux the project you probably all know, whether you like it or not. There was this idea of a flux architecture for React, in practice this usually meant global singleton in-memory stores than fired change events, they were global so different components in the component hierarchy were depending on exactly the same state and not two different copies of the same state that had the possibility of being out of sync. Redux kind of blew out of the water most of the other global state container projects and for many people became a de-facto standard. There are clearly many options and based on my interpretation of community sentiment redux has somewhat fallen out of favor and people are looking for a simpler option, but it is still a very popular project.
          </Notes>
        </Slide>

        <Slide transition={['zoom']} bgColor="primary">
          <Heading size={4} lineHeight={2} textColor="secondary">
            Sept 14, 2015<br/>React Native for Android
          </Heading>
          <Notes>
            React Native for iOS was released in January 2015 and the initial Android release was delayed until September. So at this point native applications could be built for iOS and Android by developers that know very little about the ecosystem of those platforms as long as they had knowledge of how to use React. Thus pushing the ethos that you can learn once and build everywhere.
          </Notes>
        </Slide>

        <Slide transition={['zoom']} bgColor="primary">
          <Heading size={4} lineHeight={2} textColor="secondary">
            October 7, 2015: 0.14.0
          </Heading>

          <Text textColor="secondary">react-dom</Text>
          <Text textColor="secondary">Separate packages for react addons</Text>
          <Notes>
            On to October 2015 the 0.14.0 release. The React team released packages that were split up. Separate packages for the code that handles the DOM in the react-dom package and separate packages for all of the different addons. This provides more flexibility and means that if you're not using the addons they aren't part of your compiled bundle that comes along with React and the code for handling DOM updates isn't included in projects written for React Native. Along with these two things we have a big thing, Stateless Functional Components.
          </Notes>
        </Slide>

        <Slide>
          <img style={{ maxWidth: '100%', maxHeight: '700px' }} src={images.statelessFunctionalComponents} />
          <Notes>
            Stateless functional components are great, if you just need a component that doesn't contain any business logic you can use a function and return some JSX. You can see here that both App and Welcome are functional components that are passed props
          </Notes>
        </Slide>

        <Slide>
          <img style={{ maxWidth: '100%', maxHeight: '700px' }} src={images.babel} />
          <Notes>
            The last part of the 0.14.0 release that I thought was important was that react-tools, which was the project that people used to handle compiling JSX was deprecated.
            react-tools was a Facebook project and the community buzz around using Babel was really heating up, so the React team decided to push for using Babel with a react preset to transform JSX and other JavaScript syntax. Deciding to use Babel was a great decision for everyone in the community and it meant that the React team could focus more on React instead of a tertiary project.
          </Notes>
        </Slide>

        <Slide transition={['zoom']} bgColor="primary">
          <Heading size={4} lineHeight={2} textColor="secondary">
            April 7, 2016: 15.0.0
          </Heading>

          <Text textColor="secondary">Goodbye data-reactid</Text>
          <Text textColor="secondary">Goodbye extra spans</Text>
          <Text textColor="secondary">All SVG tags supported</Text>
          <Notes>
            April 2016, big change here. The React team decided that a 1.0.0 release didn't make sense, so they cranked it up to 15.
          </Notes>
        </Slide>

        <Slide transition={['zoom']} bgColor="primary">
          <Heading size={4} lineHeight={2} textColor="secondary">
            July 22, 2016: create-react-app
          </Heading>
          <Notes>
            In July 2016 we got create-react-app. An absolutely fantastic project for starting a react project and I really can't think of using something else as a foundation.
          </Notes>
        </Slide>

        <Slide transition={['zoom']} bgColor="primary">
          <Heading size={4} lineHeight={2} textColor="secondary">
            July 29, 2016: 15.3.0
          </Heading>

          <Notes>
            Close on the heels of the create-react-app release in late July the 15.3.0 brought a couple useful features. React.PureComponent and the Test Renderer.
          </Notes>
        </Slide>

        <Slide>
          <img style={{ maxWidth: '100%', maxHeight: '700px' }} src={images.pureComponent} />
          <Notes>
            Ealier I mentioned the PureRenderMixin that could be used with createClass. Normal class components extend from React.Component, but you get the same behavior as the pure render mixin when extending from React.PureComponent.
          </Notes>
        </Slide>

        <Slide>
          <img style={{ maxWidth: '100%', maxHeight: '700px' }} src={images.testRenderer} />
          <Notes>
            <p>React test renderer can be used in testing to render components to JSON instead of using a mock DOM implementation like JSDom, this makes it easy to snapshot a component tree with a testing framework like Jest</p>
          </Notes>
        </Slide>

        <Slide transition={['zoom']} bgColor="primary">
          <img style={{ maxWidth: '100%', maxHeight: '700px' }} src={images.propTypesEmail} />
          <Notes>
            A few years ago I wanted to use prop-types separately from React, so I read through the original source and extracted the implementation into an npm module. The name prop-types name was available, so natually I took it. You can see here, Andrew from the React team politely asked me to let them take over the name. And I said yes because I would rather they have it than the community be confused. I don't think I have any commits or pull requests for the React repo but if you've used prop-types in the last few years, I had the opportunity to donate the package name to the team.
          </Notes>
        </Slide>

        <Slide transition={['zoom']} bgColor="primary">
          <Heading size={4} lineHeight={2} textColor="secondary">
            June 13, 2017: 15.6.0
          </Heading>
          <Text textColor="secondary">Deprecation warnings for React.createClass</Text>
          <Notes>
            createClass was one of the first features that we talked about. In 15.6.0 the team added deprecation warnings when using createClass. The team did something great with this though, they provided a separate package called create-react-class that allowed using the same functionality. And secondly they provided a codemod, or an automated script that would analyze all of the JavaScript files in your project and update them to use this new separate package. So they didn't require anyone to hand rewrite files or write some terrible regex to change out these calls. They provided a very stable upgrade path.
          </Notes>
        </Slide>

        <Slide transition={['zoom']} bgColor="primary">
          <Heading size={4} lineHeight={2} textColor="secondary">
            September 25, 2017: 15.6.2
          </Heading>
          <Text textColor="secondary">Switched from BSD + Patents to MIT license</Text>
          <Notes>
            There was a lot of anxiety in the community about how React was licensed. In some case companies were unwilling to use React just based on the wording of the specific patents clause that React was licensed with. To prevent a lot of bikeshedding around the licensing project they switched to the very permissive MIT license. This was a great move because there were likely a number of companies that were using the licensing as their last objection to using React within their organization.
          </Notes>
        </Slide>

        <Slide transition={['zoom']} bgColor="primary">
          <Heading size={4} lineHeight={2} textColor="secondary">
            September 26, 2017: 16.0.0
          </Heading>
          <Text textColor="secondary">Error Boundaries</Text>
          <Text textColor="secondary">Portals</Text>
          <Text textColor="secondary">Fragments</Text>
          <Notes>
            The React team really likes to make their major releases actually have major features. The 16.0.0 release had an important underlying rewrite that happened called fiber, they even had a website for tracking the progress they were making on getting all of the tests to pass for the new architecture.
          </Notes>
        </Slide>

        <Slide>
          <img style={{ maxWidth: '100%', maxHeight: '700px' }} src={images.errorBoundary} />

          <Notes>
            It's somewhat amazing that it took so long for error boundaries to get into react. You can see there that the ErrorBoundary component uses a special lifecycle method called componentDidCatch. When an error is thrown in render or in a lifecycle method the componentDidCatch callback gives the opportunity to set some state on the component, and you can see in the render if there is an error we display that something went wrong. This also gives us the opportunity to log to an error catching service.
          </Notes>
        </Slide>

        <Slide>
          <img style={{ maxWidth: '100%', maxHeight: '300px' }} src={images.portalGame} />
          <img style={{ maxWidth: '100%', maxHeight: '300px' }} src={images.portal} />

          <Notes>
            Portals are an interesting concept that was introduced to React. Portals are used to render into a different part of the DOM. This is common behavior that you want when you need to overlay a view that is definitely supposed to be displayed with a high z-index stacked on top of everything else. The things that come to mind here are modals, datepickers, and hovercards.
          </Notes>
        </Slide>

        <Slide>
          <img style={{ maxWidth: '100%', maxHeight: '700px' }} src={images.fragment} />

          <Notes>
            Fragments here are a special syntax that can be used to return a grouping of elements that don't have a single wrapping DOM element. It's always been a natural inclination to want to return multiple elements from a React component and whenever a person new to React runs into this they question what's going on here and why can't I do this. Using JSX can kind of trick you here, and it's necessary to think about how this code is going to be compiled. JavaScript only has single return values and the elements described in JSX will be compiled to to different function calls. So it turns out to be necessary to wrap the two {'<td>'} tags in a Fragment so they can be returned as one value. Before fragments it was necessary to wrap something like this in a {'<div>'} but that doesn't end up working well for tables.
          </Notes>
        </Slide>

        <Slide transition={['zoom']} bgColor="primary">
          <Heading size={4} lineHeight={2} textColor="secondary">
            March 29, 2018: 16.3.0
          </Heading>
          <Text textColor="secondary">Officially supported Context API</Text>
          <Text textColor="secondary">React.StrictMode</Text>
          <Text textColor="secondary">React.unstable_AsyncMode to support suspense</Text>
          <Notes>
            March 2018 finally brought an Officially supported context API that even uses render props. React.StrictMode to support the future features related to the fiber architecture and Suspense. And unstable_AsyncMode is available and recommended not to be used in production, but gives people a chance to prepare for features that are upcoming on the React roadmap.
          </Notes>
        </Slide>

        <Slide transition={['zoom']} bgColor="primary">
          <img style={{ maxWidth: '100%', maxHeight: '700px' }} src={images.context} />

          <Notes>
            Context

            TODO
          </Notes>
        </Slide>

        <Slide transition={['zoom']} bgColor="primary">
          <Heading size={4} lineHeight={2} textFont="monospace" textColor="secondary">
            {'<React.StrictMode>'}
          </Heading>

          <Notes>
            StrictMode is a component provided by React that can be used to make sure that your components are compatible with what the React team is calling the fiber architecture and AsyncMode, to be able to prioritize and interleave rendering to the DOM in batches.
          </Notes>
        </Slide>

        <Slide transition={['zoom']} bgColor="primary">
          <Heading size={4} lineHeight={2} textColor="secondary">
            February 6, 2019: 16.8.0
          </Heading>
          <Text textColor="secondary">Hooks</Text>
          <Notes>
            Earlier this month, the 16.8.0 release might have been the most important release to date. The big thing that came in this release was hooks.
          </Notes>
        </Slide>

        <Slide>
          <img style={{ maxWidth: '100%', maxHeight: '700px' }} src={images.hooks} />

          <Notes>
            All the way back in October 2015 Stateless Functional Components were released to be able to write components with pure functions instead of createClass or ES2015 classes. But now with hooks, those functional components aren't so stateless anymore. You can see in this counter example the useState hook being used in a functional component. it returns two values, the current state and a method to set the next value of the state. There are several other hooks that allow for the same functionality that the component lifecycle methods provide for classes. So functional components are now essentially as powerful to use a class components and require less code to write.

            <p>It's almost time to wrap this up, just a few more slides and one of them is about me</p>
          </Notes>
        </Slide>

        <Slide transition={['zoom']} bgColor="primary">
          <img style={{ maxWidth: '100%', maxHeight: '700px' }} src={images.roadmap} />
          <a style={{color: '#FFF'}} href="https://www.youtube.com/watch?v=nLF0n9SACd4">Dan Abramov: JSConf Iceland 2018</a>

          <Notes>
            React has had a long history as far as browser view libraries go. Personally I'm more excited to use React now than I was when I started. The team behind the project has strong corporate and community backing and there are major updates like Suspense still on the horizon in the coming months.

            You can get a good overview of the how the Suspense features are expected to work by watching the talk that Dan Abramov gave at JSConf Iceland 2018.
          </Notes>
        </Slide>

        <Slide transition={['zoom']} bgColor="primary">
          <img style={{ maxWidth: '100%', maxHeight: '700px' }} src={images.glasses} />
          <Heading size={4} lineHeight={2} textColor="secondary">
            @_aaronackerman_
          </Heading>
        </Slide>
      </Deck>
    );
  }
}
