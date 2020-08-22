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

  <!-- Bootsrap form -->
  <form>
    <!-- Click me button -->
    <b-button class="d-incline-block" v-on:click="disabled = !disabled">Click Me</b-button>
    <!-- Wrapper container to enable tooltip on disabled button -->
    <b-form-group class="d-inline-block">
      <span id="disabled-wrapper" class="d-inline-block" tabindex="0">
        <!-- Submit Button -->
        <b-button type="submit" :disabled="disabled">Submit</b-button>
      </span>
      <!-- Tooltip -->
      <b-tooltip target="disabled-wrapper" :disabled="!disabled">Click the other button</b-tooltip>
    </b-form-group>
  </form>

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
      toolTipShow: true,
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
    },
    onSubmit(evt) {
      evt.preventDefault()
      alert(JSON.stringify(this.form))
    },
    onReset(evt) {
      evt.preventDefault()
      // Reset our form values
      this.form.email = ''
      this.form.name = ''
      this.form.food = null
      this.form.checked = []
      // Trick to reset/clear native browser form validation state
      this.show = false
      this.$nextTick(() => {
        this.show = true
      })
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
