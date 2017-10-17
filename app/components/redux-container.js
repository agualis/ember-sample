import Ember from 'ember';
import { connect } from 'ember-redux';

const stateToComputed = state => {
  console.log('ESTE ES EL ESTADO:', state)
  return {
    number: state.number
  };
};

const dispatchToActions = dispatch => {
  return {
    add: () => dispatch({type: 'ADD'})
  };
};

export const NumbersComponent = Ember.Component.extend({});

export default connect(stateToComputed, dispatchToActions)(NumbersComponent);

