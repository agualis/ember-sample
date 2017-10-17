import { connect } from 'ember-redux';
import { NumbersComponent } from './redux-container';

const stateToComputed = state => {
  // console.log('THIS IS MOCKED STATE:', state)
  return {
    number: state.number
  };
};

const dispatchToActions = dispatch => {
  return {
    add: () => dispatch({type: 'ADD'})
  };
};

export default connect(stateToComputed, dispatchToActions)(NumbersComponent);

