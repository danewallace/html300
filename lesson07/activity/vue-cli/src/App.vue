<template>
<div id="app">
  <img src="./assets/logo.png">
  <h1>{{ msg }}</h1>

  <input type="text" v-on:input="changeTitle">
  <a v-bind:href="link" target="_blank">Google</a>
  <br>
  <button type="button" name="button" v-on:click="increase">Button</button>
  <p>{{ counter }}</p>
  <br>
  <p v-if="show">Some Text</p>
  <button type="button" name="button" v-on:click="show = !show">Button two</button>
  <br>
  <ul v-for="ingredient in ingredients">
    <li>{{ ingredient }}</li>
  </ul>
  <br>
  <ul v-for="person in persons">
    <li>{{ person.name }} {{ person }}</li>
  </ul>
  <br>
  <p>--------------------------</p>
  <br>
  <!-- Form activity -->
  <h1 class="formTitle">{{ formTitle }}</h1>

  <form>
    <input type="button" id="clickMeBtn" v-on:click="disabled = !disabled" value="Click Me">
    <input type="submit" id="submitBtn" :disabled="disabled" value="Submit">
  </form>

  <!-- <h2>Essential Links</h2>
    <ul>
      <li><a href="https://vuejs.org" target="_blank">Core Docs</a></li>
      <li><a href="https://forum.vuejs.org" target="_blank">Forum</a></li>
      <li><a href="https://chat.vuejs.org" target="_blank">Community Chat</a></li>
      <li><a href="https://twitter.com/vuejs" target="_blank">Twitter</a></li>
    </ul>
    <h2>Ecosystem</h2>
    <ul>
      <li><a href="http://router.vuejs.org/" target="_blank">vue-router</a></li>
      <li><a href="http://vuex.vuejs.org/" target="_blank">vuex</a></li>
      <li><a href="http://vue-loader.vuejs.org/" target="_blank">vue-loader</a></li>
      <li><a href="https://github.com/vuejs/awesome-vue" target="_blank">awesome-vue</a></li>
    </ul> -->
</div>
</template>

<script>
export default {
  name: 'app',
  data() {
    return {
      msg: 'Hello',
      link: "https://www.google.com/",
      counter: 0,
      show: false,
      ingredients: ["meat", "fruit", "vegetables"],
      persons: [{
          name: 'Dane',
          age: 34,
          color: 'brown'
        },
        {
          name: 'Ida',
          age: 31,
          color: 'blonde'
        }
      ],
      formTitle: "Form activity",
      disabled: true,
    }
  },
  methods: {
    changeTitle: function(event) {
      this.msg = event.target.value;
    },
    increase: function() {
      this.counter++;
    }
  }
}
</script>

<style lang="scss">
#app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
}

h1,
h2 {
    font-weight: normal;
}

ul {
    list-style-type: none;
    padding: 0;
}

li {
    display: inline-block;
    margin: 0 10px;
}

a {
    color: #42b983;
}
</style>
