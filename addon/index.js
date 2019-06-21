/*jshint esversion: 6 */

import Mixin from 'ember-validations/mixin';

export default Mixin;
export function validator(callback) {
  return { callback };
}
