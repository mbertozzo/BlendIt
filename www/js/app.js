import Vue from 'vue';
import VueRouter from 'vue-router';

import VueMaterial from 'vue-material';
import 'vue-material/dist/vue-material.min.css';
import 'vue-material/dist/theme/default.css';

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

Vue.use(VueMaterial);

export {
  MyApp
}