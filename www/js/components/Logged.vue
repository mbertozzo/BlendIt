<template>
  <f7-page>
    <f7-navbar no-shadow>
      <f7-nav-left>
        <f7-link href="./recipes/" tab-link icon="fa fa-user"></f7-link>
      </f7-nav-left>
      <f7-nav-title>{{navTitle}}</f7-nav-title>
      <f7-nav-right>
        <f7-link href="/login" icon="fa fa-sign-out"></f7-link>
      </f7-nav-right>
    </f7-navbar>
    <f7-toolbar tabbar labels>
      <f7-link text="Home" tab-link="" tab-link-active href="./" icon="fa fa-home" class="home" @click="activateTab('home')"></f7-link>
      <f7-link text="Recipes" tab-link="" href="./recipes/" icon="fa fa-book" class="recipes" @click="activateTab('recipes')"></f7-link>
    </f7-toolbar>
    <f7-tabs routable>
      <f7-tab id="home" tab-active></f7-tab>
      <f7-tab id="recipes"></f7-tab>
    </f7-tabs>
  </f7-page>
</template>

<style>

</style>

<script>
export default {
  name: 'logged',
  data() {
    return {
      activeTab: 'home',
      tabList: {
        'home': 'Home', //coppia id del tab e titolo che deve comparire
        'recipes': 'Recipes'
      }
    }
  },
  computed: {
    navTitle() {
      return this.tabList[this.activeTab];
    }
  },
  methods: {
    activateTab(tab) {
      //il this è l'istanza del componente [logged], non il this della funzione
      this.activeTab = tab;
      this.$$('a.tab-link-active').removeClass('tab-link-active');
      this.$$(`.${tab}`).addClass('tab-link-active');
    }
  }
}
</script>