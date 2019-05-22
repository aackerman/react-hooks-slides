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
  glasses: require('../assets/glasses.png'),
  statelessFunctionalComponent: require('../assets/statelessFunctionalComponent.png'),
  counterSetState: require('../assets/counterSetState.png'),
  useState: require('../assets/useState.png'),
  useStateComponent: require('../assets/useStateComponent.png'),
  themedButtonUseContext: require('../assets/themedButtonUseContext.png'),
  classComponentContext: require('../assets/classComponentContext.png'),
  classContextMultipleProviders: require('../assets/classContextMultipleProviders.png'),
  multipleUseContextWithHooks: require('../assets/multipleUseContextWithHooks.png'),
  useReducerCounter: require('../assets/useReducerCounter.png'),
  useEffect: require('../assets/useEffect.png'),
  stringRefs: require('../assets/stringRefs.png'),
  callbackRefs: require('../assets/callbackRefs.png'),
  createRef: require('../assets/createRef.png'),
  useRef: require('../assets/useRef.png'),
  forwardRef: require('../assets/forwardRef.png'),
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
            Hooks in React
          </Heading>
        </Slide>

        <Slide transition={['zoom']} bgColor="primary">
          <img style={{ maxWidth: '100%', maxHeight: '700px' }} src={images.glasses} />
          <Heading size={4} lineHeight={2} textColor="secondary">
            Aaron Ackerman
          </Heading>
          <Heading size={4} lineHeight={2} textColor="secondary">
            @_aaronackerman_
          </Heading>

          <Notes>
            <p>Hello everyone, I'm Aaron Ackerman. I'm a Senior Site Reliability Engineer at Movable Ink. If you're unfamiliar with site reliability engineering, you might be more familiar with DevOps, it mostly means that I work on building tooling, continuous delivery, and monitoring to ensure that our systems continue running with high reliability. We're also hiring for another position on my team, Movable Ink is based in New York City and I work remote from home in South Minneapolis. So if you also do reliability engineering and you're looking to switch things up come talk to me afterwards.</p>
          </Notes>
        </Slide>

        <Slide>
          <Heading size={4} lineHeight={2} textColor="secondary">
            React in 2015
          </Heading>

          <Heading size={5} lineHeight={2} textColor="secondary">
            Stateless functional components
          </Heading>

          <Notes>
            <p>I'm happy to be here today to talk to you about Hooks in React.</p>
            <p>React has come a long way since I started using it 5 years ago. I gave a talk at the React Minneapolis meetup a couple months ago recounting some of the features that have been released over the history of React and I continue to be impressed with how the React core team continues to innovate on a library that was already considerably good for building web applications.</p>
            <p>I looked back at those slides to consider where we were and where we are now. In October 2015 the 0.14.0 release included stateless functional components, this was also the release where they split react vs react-dom packages. So let's start there, stateless functional components.</p>
          </Notes>
        </Slide>

        <Slide transition={['zoom']} bgColor="primary">
          <a style={{color: '#FFF'}} href="https://codesandbox.io/s/wizardly-allen-r58lq">
            <img style={{ maxWidth: '100%', maxHeight: '700px' }} src={images.statelessFunctionalComponent} />
          </a>
          <Notes>

          </Notes>
        </Slide>

        <Slide transition={['zoom']} bgColor="primary">
          <Heading size={3} lineHeight={2} textColor="secondary">
            React v16.8.0
          </Heading>
          <Heading size={3} lineHeight={2} textColor="secondary">
            Create React App v3.0.0
          </Heading>
          <Notes>
          </Notes>
        </Slide>

        <Slide transition={['zoom']} bgColor="primary">
          <Heading size={6} lineHeight={2} textColor="secondary">
            Opt-in, 100% Backwards Compatible
          </Heading>

          <Notes>
            <p>
              If you're wondering about whether you can use hooks there's a lot of good news.
              They're available now, it's completely opt-in.
              You don't have to use them and you don't have to rewrite anything to use hooks, even if you may want to.
              Hooks are completely backwards compatible with existing applications.
              If you're using React 16 already, it's likely an easy upgrade to 16.8 and you can start using hooks right now.
            </p>
          </Notes>
        </Slide>

        <Slide transition={['zoom']} bgColor="primary">
          <Heading size={6} lineHeight={2} textColor="secondary">
            Hooks start with 'use'
          </Heading>

          <List>
            <ListItem>useState</ListItem>
            <ListItem>useContext</ListItem>
            <ListItem>useEffect</ListItem>
            <ListItem>useReducer</ListItem>
            <ListItem>useRef</ListItem>
            <ListItem>...</ListItem>
          </List>
          <Notes>
          </Notes>
        </Slide>

        <Slide transition={['zoom']} bgColor="primary">
          <a style={{color: '#FFF'}} href="https://codesandbox.io/s/blissful-napier-ppgz4">
            <img style={{ maxWidth: '100%', maxHeight: '700px' }} src={images.counterSetState} />
          </a>

          <Notes>
            <p>When I wrote this example it actually didn't work, and that's because I tried to have this.state equal to zero and I completely forgot that this.state needs to be an object with keys. That doesn't need to be the case with the useState hook, you can use whatever type of value you want</p>
            <p>If you're using React, you have a good understanding of using state in class components, let's take a look at an equivalent component using hooks</p>
         </Notes>
        </Slide>

        <Slide transition={['zoom']} bgColor="primary">
          <a style={{color: '#FFF'}} href="https://codesandbox.io/s/xenodochial-gould-h7dgb">
            <img style={{ maxWidth: '100%', maxHeight: '700px' }} src={images.useStateComponent} />
          </a>

          <Notes>
            <p></p>
          </Notes>
        </Slide>

        <Slide transition={['zoom']} bgColor="primary">
          <a href="https://codesandbox.io/s/happy-architecture-1zemx">
            <img style={{ maxWidth: '100%', maxHeight: '700px' }} src={images.classComponentContext} />
          </a>
          <Notes>
            <p></p>
          </Notes>
        </Slide>

        <Slide transition={['zoom']} bgColor="primary">
          <img style={{ maxWidth: '100%', maxHeight: '700px' }} src={images.themedButtonUseContext} />
          <Notes>
            <p></p>
          </Notes>
        </Slide>

        <Slide transition={['zoom']} bgColor="primary">
          <img style={{ maxWidth: '100%', maxHeight: '700px' }} src={images.classContextMultipleProviders} />
          <Notes>
            <p></p>
          </Notes>
        </Slide>

        <Slide transition={['zoom']} bgColor="primary">
          <img style={{ maxWidth: '100%', maxHeight: '700px' }} src={images.multipleUseContextWithHooks} />
          <Notes>
            <p></p>
          </Notes>
        </Slide>

        <Slide transition={['zoom']} bgColor="primary">
          <a href="https://codesandbox.io/s/great-easley-qmz44">
            <img style={{ maxWidth: '100%', maxHeight: '700px' }} src={images.useReducerCounter} />
          </a>
          <Notes>
            <p></p>
          </Notes>
        </Slide>

        <Slide transition={['zoom']} bgColor="primary">
          <a href="https://codesandbox.io/s/bitter-sunset-78vvh">
            <img style={{ maxWidth: '100%', maxHeight: '700px' }} src={images.useEffect} />
          </a>
          <Notes>
            <p></p>
          </Notes>
        </Slide>

        <Slide transition={['zoom']} bgColor="primary">
          <img style={{ maxWidth: '100%', maxHeight: '700px' }} src={images.stringRefs} />
          <Notes>
            <p></p>
          </Notes>
        </Slide>

        <Slide transition={['zoom']} bgColor="primary">
          <img style={{ maxWidth: '100%', maxHeight: '700px' }} src={images.callbackRefs} />
          <Notes>
            <p></p>
          </Notes>
        </Slide>

        <Slide transition={['zoom']} bgColor="primary">
          <img style={{ maxWidth: '100%', maxHeight: '700px' }} src={images.createRef} />
          <Notes>
            <p></p>
          </Notes>
        </Slide>

        <Slide transition={['zoom']} bgColor="primary">
          <a href="https://codesandbox.io/s/tender-sun-szxvn">
            <img style={{ maxWidth: '100%', maxHeight: '700px' }} src={images.useRef} />
          </a>
          <Notes>
            <p></p>
          </Notes>
        </Slide>

        <Slide transition={['zoom']} bgColor="primary">
          <a href="https://codesandbox.io/s/modern-sky-88e08">
            <img style={{ maxWidth: '100%', maxHeight: '700px' }} src={images.forwardRef} />
          </a>
          <Notes>
            <p></p>
          </Notes>
        </Slide>

        <Slide transition={['zoom']} bgColor="primary">
          <Heading size={4} lineHeight={2} textColor="secondary">
            Be safe with hooks
          </Heading>

          <Heading size={4} lineHeight={2} textColor="secondary">
            eslint-plugin-react-hooks
          </Heading>

          <Notes>
            <p></p>
          </Notes>
        </Slide>

        <Slide transition={['zoom']} bgColor="primary">
          <img style={{ maxWidth: '100%', maxHeight: '700px' }} src={images.glasses} />
          <Heading size={4} lineHeight={2} textColor="secondary">
            @_aaronackerman_
          </Heading>

          <Notes>
            Thank you for your time tonight, you can find me here on twitter.
          </Notes>
        </Slide>
      </Deck>
    );
  }
}
