import Vue from 'vue'
import Vuex from 'vuex'

// step 8: import module's store here
// import cart from './cart/store'
// import products from './products/store'

import createLogger from 'vuex/logger'

Vue.use(Vuex);
Vue.config.debug = true;

const debug = process.env.NODE_ENV !== 'production';

export default new Vuex.Store({
  modules: {
    // step 8.1: and then add them here, after this one module is done, go back to step 1 to add more pages
    // cart,
    // products
  },
  strict: debug,
  middlewares: debug ? [createLogger()] : []
})
