import * as React from 'react';
import { Dimmer, Loader, Segment } from 'semantic-ui-react';

const Spinner: React.SFC = () => (
  <Segment className="spinner">
    <Dimmer active={true} inverted={true}>
      <Loader inverted={false}>読み込み中...</Loader>
    </Dimmer>
  </Segment>
);

export default Spinner;
