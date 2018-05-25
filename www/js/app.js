import Vue from 'vue';
import Framework7 from 'framework7/dist/framework7.esm.bundle.js';
import Framework7Vue from 'framework7-vue/dist/framework7-vue.esm.bundle.js';

import Framework7CSS from 'framework7/dist/css/framework7.css';
import Framework7Icons from 'framework7-icons/css/framework7-icons.css';
import FontAwesome from 'font-awesome/css/font-awesome.css';

import App from './components/App';
import LeftMenu from './components/LeftMenu';
import Home from './components/Home';
import Recipes from './components/Recipes';
import RecipeDetail from './components/RecipeDetail';
import Search from './components/Search';

Vue.use(Framework7Vue, Framework7);

const routes = [
	{
		path: '/',
		component : Home, 
  },
  {
		path: '/left-menu',
		component : LeftMenu
  },
  {
		path: '/recipes',
		component : Recipes
  },
  {
    path: '/detail/:id',
    component: RecipeDetail
  },
  {
		path: '/search',
		component : Search
  },
];

let theme = 'auto';
if (document.location.search.indexOf('theme=') >= 0) {
  theme = document.location.search.split('theme=')[1].split('&')[0];
}

let MyApp = {
  initialize: function() {
    new Vue({
      el: '#app',
      template: '<App/>',
      components: {App},
      framework7: {
        id: 'com.matteobertozzo.blendit',
        theme,
      },
      routes
    });
  }
}

export {
  MyApp
}