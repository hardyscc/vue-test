<template>
  <section class="section">
    <div class="container">
      <div class="title">{{ hello.message }}</div>
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
      <p class="content">
        <a class="button is-info" @click="$store.commit('increment')"> Increment {{ $store.state.count }}</a>
      </p>
      <div class="subtitle">
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

