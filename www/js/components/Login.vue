<template>
  <f7-page name="login">
    <f7-list>
      <f7-list-item>
        <f7-label>User</f7-label>
        <f7-input placeholder="Enter your username" type="text" :value="account.name" @input="account.name = $event.target.value"></f7-input>
      </f7-list-item>
      <f7-list-item>
        <f7-label>Password</f7-label>
        <f7-input placeholder="Insert your password" type="text" :value="account.password" @input="account.password = $event.target.value"></f7-input>
      </f7-list-item>
    </f7-list>
    <f7-list>
      <f7-list-button title="Sign In" @click="signin"></f7-list-button>
    </f7-list>
  </f7-page>
</template>
<script>
export default {
  name: 'login',
  data() {
    return {
      account: {
        name: '',
        password: ''
      }
    }
  },
  methods: {
    signin() {
      this.$f7router.navigate('/logged/');
    }
  }
}
</script>

