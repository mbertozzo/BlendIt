import Vue from 'vue';
import VueRouter from 'vue-router';

import App from './components/App';
import Home from './components/Home';
import Recipes from './components/Recipes';

Vue.use(VueRouter);

const routes = [
	{
		path: '/',
		component : Home, 
  },
  {
		path: '/recipes',
		components : {
      default: Recipes
    }
	}
];

const router = new VueRouter({routes});

let MyApp = {
  initialize: function() {
    new Vue({
      el: '#app',
      template: '<App/>',
      components: {App},
      router
    });
  }
}

export {
  MyApp
}