<template>
<div class="home">
  <!-- Bootstrap vue navbar -->
  <b-navbar toggleable="sm" type="light" variant="light">
    <b-navbar-toggle target="nav-text-collapse"></b-navbar-toggle>
    <!-- Emoji with route to / -->
    <b-navbar-brand>
      <router-link class="navbar-brand" to="/"><span style='font-size:100px;'>&#128049;</span></router-link>
    </b-navbar-brand>
    <!-- Router links with current page emphasized -->
    <b-collapse id="nav-text-collapse" is-nav>
      <b-navbar-nav>
        <router-link class="nav-item nav-link active" to="/">Home<span class="sr-only">(current)</span></router-link>
        <router-link class="nav-item nav-link" to="/images">Images</router-link>
        <router-link class="nav-item nav-link" to="/facts">Facts</router-link>
        <router-link class="nav-item nav-link" to="/social">Social</router-link>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>

  <!-- Bootstrap jumbotron for main content -->
  <div class="jumbotron jumbotron-fluid">
    <div class="container">
      <h1 class="display-4"><span>&#128075;</span></h1>
      <p class="lead"> {{ msg }}</p>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      msg: "This site has been created using Vue, Vue Router, and Bootstrap."
    }
  }
};
</script>
