<template>
  <div class="page-container">
    <md-app md-mode="fixed">
      <md-app-toolbar class="md-primary">
        <md-button class="md-icon-button">
          <router-link :to="'/'"><md-icon>arrow_back</md-icon></router-link>  
        </md-button>
        <span class="md-title" v-for="el in recipe" v-bind:key="el._id">{{el.name}}</span>
      </md-app-toolbar>

      <md-app-content v-for="el in recipe" v-bind:key="el._id">
        <md-card>
          <md-card-content id="icons">
            <div class="fifty">
              <md-icon>access_alarm</md-icon>
              <span>{{el.time.hour + " : " + el.time.min}}</span>
            </div>
            <div class="fifty">
              <md-icon>people</md-icon>
              <span>{{el.servings}}</span>
            </div>
            <div class="fifty">
              <md-icon>restaurant_menu</md-icon>
              <span v-if="el.difficulty == 1">Easy</span>
              <span v-if="el.difficulty == 2">Medium</span>
              <span v-if="el.difficulty == 3">Hard</span>
            </div>
            <div class="fifty">
              <md-icon>room_service</md-icon>
              <span v-for="cat in el.category" v-bind:key="cat._id">{{cat}}</span>
            </div>
          </md-card-content>
        </md-card>

        <md-card>
          <md-card-header>Ingredients</md-card-header>
          <md-card-content>
            <p v-for="ing in el.ingredients" v-bind:key="ing._id">{{ing}}</p>
          </md-card-content>
        </md-card>

        <md-card>
          <md-card-header>Directions</md-card-header>
          <md-card-content>
            <p>{{el.directions}}</p>
          </md-card-content>
        </md-card>

      </md-app-content>
    </md-app>
  </div>
</template>

<style scoped>
  .md-card {
    width: 100%;
    margin: 0px;
    margin-bottom: 10px;
  }
  .md-card-content#icons {
    display: flex;
    text-align: center;
  }
  .md-card-content#icons span {
    display: block;
  }
  .fifty {
    width: 50%;
  }
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