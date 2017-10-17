import Ember from 'ember';
import { connect } from 'ember-redux';

const stateToComputed = state => {
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

