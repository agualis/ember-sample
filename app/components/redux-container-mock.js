import { connect } from 'ember-redux';
import { NumbersComponent } from './redux-container';

const stateToComputed = state => {
  console.log('ESTE ES EL ESTADO MOCKEADO:', state)
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

