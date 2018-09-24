import Ember from 'ember';

export default Ember.Route.extend({
    model() {
        debugger;
        console.log(this.store.getProperties())
        return this.store.findAll('trending')
    }
});
