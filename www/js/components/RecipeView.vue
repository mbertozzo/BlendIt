<template>
  <div class="page-container">
    <md-app md-mode="fixed">
      <md-app-toolbar class="md-primary">
        <md-button class="md-icon-button">
          <router-link :to="'/'"><md-icon>arrow_back</md-icon></router-link>  
        </md-button>
        <span class="md-title" v-for="el in recipe" v-bind:key="el._id">{{el.name}}</span>
      </md-app-toolbar>

      <md-app-content>
        <div class="md-layout md-gutter">
          <p v-for="el in recipe" v-bind:key="el._id">{{el.directions}}</p>
        </div>
      </md-app-content>
    </md-app>
  </div>
</template>

<style>
/* .md-layout {
  padding-top: 15px;
  padding-left: 10px;
  padding-right: 10px;
}
.md-layout-item {
  margin: 5px;
}
.md-title {
  margin-top: 0px;
} */
</style>

<script>
export default {
  name: 'recipes-view',
  data: () => ({
    id: 0,
    recipe: []
  }),
  created() {
    this.id = this.$route.params.id;
  },
  mounted(){
    this.fetchRecipe(); 
  },  
  methods: {
    fetchRecipe: function() {   //definisco un metodo che poi potrò richiamare altrove
      fetch('http://localhost:3000/recipes/view/' + this.id)
      .then(function(response){
        return response.json()
      })
      .then (response => this.recipe = response);
    }
  }
}
</script>