import Ember from 'ember';

export default Ember.Route.extend({
    model() {
        
        let model_obj = {
            trending: this.store.findAll('trending'),
            upcoming: this.store.findAll('upcoming')
        }
        
        return model_obj;
        
    },

    actions: {
        transitionToDetails(trending) {
            return this.transitionTo('details', trending.get('id'));
        },

        transitionToDetails(upcoming) {
            return this.transitionTo('details', upcoming.get('id'));
        }
    }
});
