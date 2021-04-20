import { text } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react-native';
import React from 'react';
import { Input } from './index';
import { Container } from '../../atoms/Container';

const story = storiesOf('Input', module);

story.addDecorator(getStory => <Container>{getStory()}</Container>);

story.add('Standard', () => (
  <Input
    placeholder={text('Placeholder', 'Seu E-mail')}
    label={text('Label', 'EMAIL')}
  />
));
