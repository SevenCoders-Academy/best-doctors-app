import { boolean, text } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react-native';
import React from 'react';
import { SelectTypeCard } from './index';
import { Container } from '../../atoms/Container';

const story = storiesOf('SelectTypeCard', module);

story.addDecorator(getStory => <Container>{getStory()}</Container>);

story.add('Standard', () => (
  <SelectTypeCard
    selected={boolean('Selected', false)}
    title={text('Title,', 'PACIENTE')}
    description={text(
      'Description',
      'Vou buscar as clínicas e médicos próximos a mim para agendar consultas e ter um histórico.',
    )}
  />
));
