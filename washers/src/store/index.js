import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        apiRouteDev: 'http://localhost:8080/api/',
        apiRouteProd: 'not supported yet'
    }
});

export default store;