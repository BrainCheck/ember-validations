/* jshint ignore:start */

import Ember from 'ember';

const set = Ember.set;

export default Ember.Service.extend({
  init: function() {
    set(this, 'cache', {});
  }
});

/* jshint ignore:end */