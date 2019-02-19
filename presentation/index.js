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
          <iframe src="https://carbon.now.sh/embed/?bg=rgba(171%2C%20184%2C%20195%2C%201)&t=blackboard&wt=none&l=auto&ds=true&dsyoff=20px&dsblur=68px&wc=true&wa=true&pv=48px&ph=32px&ln=false&fm=Hack&fs=14px&lh=133%25&si=false&es=2x&wm=false" style={{
            transform: 'scale(1)',
            width: 1024,
            height: 600,
            border: 0,
            overflow: 'hidden'
          }} sandbox="allow-scripts allow-same-origin" />
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
        </Slide>

        <Slide transition={['zoom']} bgColor="primary">
          <Heading size={2} lineHeight={2} textColor="secondary">
            Key Props
          </Heading>
          <Text textFont="monospace" textColor="secondary">{'<div key={id} />'}</Text>
        </Slide>
      </Deck>
    );
  }
}
