import Ember from "ember";

export default Ember.Component.extend({
  // attributeBindings: ["inval_text:lowercase-field", "outval_text:uppercase-field"],
  inval_text: "",
  init(){
    this._super(...arguments);
    this.set("inval_text", "");
  },
  outval_text: Ember.computed("inval_text", {
    get() {
      return this.get('inval_text').toUpperCase();
    },
    set(key, newVal) {
      this.set("inval_text", newVal.toLowerCase());
      return newVal;
    }
  })
});
