import DS from 'ember-data';

export default DS.RESTAdapter.extend({
    host: 'https://api.themoviedb.org',
    namespace: '/3/trending/all',

    buildURL() {
        return this.host + this.namespace + '/day?api_key=9e9e537b07ca06461baecb3fb357bd5f' 
    }
});
