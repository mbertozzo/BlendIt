<template>
  <div class="md-layout md-gutter">
    <md-card class="md-layout-item" v-for="el in recipes" v-bind:key="el._id">
      <md-card-header>
        <div class="md-title">{{el.name}}</div>
      </md-card-header>

      <md-card-content>
        {{el.directions.substring(0,100) + '...'}}
      </md-card-content>

      <md-card-actions>
        <md-button><router-link :to="{name: 'RecipeView', params: {id: el._id}}">View</router-link></md-button>
        <!-- <md-button>Action</md-button> -->
      </md-card-actions>
    </md-card>
  </div>
</template>

<style>
.md-layout {
  padding-top: 15px;
  padding-left: 10px;
  padding-right: 10px;
}
.md-layout-item {
  margin: 5px;
}
.md-title {
  margin-top: 0px;
}
</style>

<script>
export default {
  name: 'recipes-list',
  data: () => ({
    recipes: []
  }),
  mounted(){
    this.fetchRecipes();
    this.$root.$on('updateList', () => {
      this.fetchRecipes();
    })
  },  
  methods: {
    fetchRecipes: function() {   //definisco un metodo che poi potrò richiamare altrove
      fetch('http://localhost:3000/recipes/list')
      .then(function(response){
        return response.json()
      })
      .then (response => this.recipes = response);
    }
  }
}
</script>