import Ember from 'ember';

export function placeholderUrl(params, hash={}) {
  return "http://placekitten.com/"+ Math.max(hash.w||100, 10) +"/"+ Math.max(hash.h||120, 10);
}

export default Ember.Helper.helper(placeholderUrl);
