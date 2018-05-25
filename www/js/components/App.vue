<template>
  <div id="app">
    <f7-panel left cover>
      <f7-view url="/left-menu" links-view=".views.main"></f7-view>
    </f7-panel>
    <f7-view url="/" :main="true" class="ios-edges"></f7-view>
  </div>
</template>

<style>

</style>

<script>
export default {
  name: 'app'
}
</script>