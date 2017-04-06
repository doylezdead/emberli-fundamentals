import Ember from 'ember';
import config from './config/environment';


const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
    this.route('course', function () {
      // Index is implied here
      this.route('view', {path: 'course/:course_id'});
    });
});


export default Router;
