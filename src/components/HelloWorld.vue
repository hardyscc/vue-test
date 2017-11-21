<template>
  <div class="page">
    <input v-model="name" placeholder="edit me">
    <h1>{{ hello.message }}</h1>
    <h2>Essential Links</h2>
    <ul>
      <li>
        <router-link to="/landing">Landing</router-link>
      </li>
      <li>
        <router-link to="/hero">Hero</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
// @ts-nocheck
import gql from 'graphql-tag'

export default {
  name: 'HelloWorld',
  apollo: {
    hello: {
      query: gql`
        query hello($name: String) {
          hello(name: $name) {
            message
          }
        }
      `,
      fetchPolicy: 'network-only',
      variables() {
        return {
          name: this.name
        }
      }
    }
  },
  data() {
    return {
      name: '',
      hello: { message: '' }
    }
  }
}
</script>

<style scoped>
.page {
  padding: 5em 5em;
  text-align: center;
}
</style>

