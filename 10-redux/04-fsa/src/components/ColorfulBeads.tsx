import * as React from 'react';
import { Container, Label } from 'semantic-ui-react';

import './ColorfulBeads.css';

const range = (n: number) => (n < 0 ? [] : Array.from(Array(n), (_, i) => i));
const colors = [
  'red',
  'orange',
  'yellow',
  'olive',
  'green',
  'teal',
  'blue',
  'violet',
  'purple',
  'pink',
  'brown',
  'grey',
  'black',
];

export interface ColorfulBeadsProps {
  count?: number;
}

const ColorfulBeads: React.SFC<ColorfulBeadsProps> = ({ count = 0 }) => (
  <Container className="beads-box">
    {range(count).map((i: number) => (
      <Label circular={true} color={colors[i % colors.length] as any} key={i} />
    ))}
  </Container>
);

export default ColorfulBeads;
