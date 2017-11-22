<template>
  <section class="section">
    <div class="container">
      <h1 class="title">{{ hello.message }}</h1>
      <div class="field is-grouped">
        <p class="control">
          <label class="label">Name</label>
        </p>
        <div class="control has-icons-left">
          <input class="input" v-model="name" placeholder="Your Name Here">
          <span class="icon is-left">
            <i class="fa fa-user"></i>
          </span>
        </div>
      </div>
      <div class="content">
        <div>Layout Links</div>
        <ul>
          <li>
            <router-link to="/landing">Landing</router-link>
          </li>
          <li>
            <router-link to="/hero">Hero</router-link>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script>
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

