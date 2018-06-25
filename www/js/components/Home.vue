<template>
  <div class="page-container md-layout-column">
    <md-toolbar class="md-primary" md-elevation="0">
      <md-button class="md-icon-button" @click="showNavigation = true">
        <md-icon>menu</md-icon>
      </md-button>
      <span class="md-title">BlendIt</span>
    </md-toolbar>
    <md-tabs class="md-primary" md-alignment="fixed" md-elevation="4">
      <md-tab id="tab-home" md-label="All Recipes"><recipes-list></recipes-list></md-tab>
      <md-tab id="tab-pages" md-label="Add Recipe"><recipe-add></recipe-add></md-tab>
      <md-tab id="tab-posts" md-label="Favorites"><favorites></favorites></md-tab>
    </md-tabs>

    <md-drawer :md-active.sync="showNavigation">
      <md-toolbar class="md-transparent" md-elevation="0">
        <span class="md-title">BlendIt</span>
      </md-toolbar>

      <md-list>
        <md-list-item>
          <md-icon>home</md-icon>
          <span class="md-list-item-text">Home</span>
        </md-list-item>

        <md-list-item>
          <md-icon>add</md-icon>
          <span class="md-list-item-text">Add recipe</span>
        </md-list-item>
      </md-list>
    </md-drawer>
  </div>
</template>


<style>
.md-content {
  height: auto !important;
}
</style>

<script>
import RecipesList from './RecipesList.vue';
import RecipeAdd from './RecipeAdd.vue';
import Favorites from './Favorites.vue'
export default {
  name: 'home',
  components: {
    'recipes-list': RecipesList,
    'recipe-add': RecipeAdd,
    'favorites': Favorites
  },
  data: () => ({
    showNavigation: false,
  })
}
</script>