import Ember from 'ember';

const Course = Ember.Object.extend({
  init(){
    this._super(...arguments);
    this.set('title', "No Title");
    this.set('description', "");
    this.set('tags', []);
    this.set('languages', []);
  },

});

Course.reopenClass({

  _lmap: {
    'js': 'JavaScript'
  },

  languageName(lang){
    if(lang == null){
      return "Unknown"
    }

    return this._lmap[lang];
  }
});

export default Course;
