import Ember from 'ember';

export default Ember.Route.extend({

    model({course_id}) {
      return this.store.findRecord('course', course_id);
    }

});
