<template>
  <f7-page>
    <f7-navbar>
      <f7-nav-left>
        <f7-link class="panel-open" open-panel="left" icon="fa fa-bars"></f7-link>
      </f7-nav-left>
      <div class="title">BlendIt</div>
      <f7-nav-right>
        <f7-link class="searchbar-enable" data-searchbar=".searchbar-components" icon="fa fa-search"></f7-link>
      </f7-nav-right>
      <f7-searchbar class="searchbar-components" search-container=".components-list" search-in="a" expandable></f7-searchbar>
    </f7-navbar>
    <f7-toolbar tabbar labels>
      <f7-link icon="" text="Tab 1" tab-link="#tab1"></f7-link>
      <f7-link icon="icon-2" text="Tab 2" tab-link="#tab2"></f7-link>
    </f7-toolbar>
  </f7-page>
</template>

<style>

</style>

<script>
export default {
  name: 'home'
}
</script>