import { connect } from 'react-redux';

import ColorfulBeads, { ColorfulBeadsProps } from 'components/ColorfulBeads';
import { State } from 'reducer';

interface StateProps {
  count: number;
}

const mapStateToProps = (state: State) => ({
  count: state.count,
});

export default connect<StateProps, {}, ColorfulBeadsProps>(mapStateToProps)(
  ColorfulBeads,
);
