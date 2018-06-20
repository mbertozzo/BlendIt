import Vue from 'vue';
import VueRouter from 'vue-router';

import VueMaterial from 'vue-material';
import 'vue-material/dist/vue-material.min.css';
/* import 'vue-material/dist/theme/default.css'; */
import '../css/theme.scss';

import App from './components/App';
import Home from './components/Home';
import RecipeView from './components/RecipeView';

Vue.use(VueRouter);

const routes = [
	{
		path: '/',
		component : Home, 
  },
  {
    path: '/view/:id',
    name: 'RecipeView',
		components : {
      default: RecipeView
    },
	}
];

const router = new VueRouter({routes});

let bus = new Vue({})

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