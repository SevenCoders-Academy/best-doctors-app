import { text, boolean } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react-native';
import React from 'react';
import { Button } from './index';
import { Container } from '../Container';

const story = storiesOf('Button', module);

story.addDecorator(getStory => <Container>{getStory()}</Container>);

story.add('Standard', () => (
  <Button outline={boolean('Outline', false)}>
    {text('TextButton', 'LOGIN')}
  </Button>
));
