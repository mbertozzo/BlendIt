<template>
  <f7-page>
    <f7-list>
      <f7-list-item v-for="myRecipe in myRecipes" :title="myRecipe.category"></f7-list-item>
    </f7-list>
  </f7-page>
</template>

<style>

</style>

<script>
export default {
  name: 'home',
  data(){
    return {
      myRecipes: []
    }
  },
  mounted() {
    this.fetchMyRecipes();
  },
  methods: {
    fetchMyRecipes(){
      fetch('https://blendit-99756.firebaseio.com/recipes.json')
      .then(response => response.json())
      .then(json => this.myRecipes = json);
    }
  }
}
</script>