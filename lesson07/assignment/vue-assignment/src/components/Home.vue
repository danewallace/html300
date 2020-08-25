<template>
  <div class="home">
    <!-- Bootstrap navbar -->
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <router-link class="navbar-brand" to="/"><span style='font-size:100px;'>&#128049;</span></router-link>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div class="navbar-nav">
          <router-link class="nav-item nav-link active" to="/">Home<span class="sr-only">(current)</span></router-link>
          <router-link class="nav-item nav-link" to="/images">Images</router-link>
          <router-link class="nav-item nav-link" to="/facts">Facts</router-link>
          <router-link class="nav-item nav-link" to="/social">Social</router-link>
        </div>
      </div>
    </nav>

  <!-- Bootstrap jumbotron for main content -->
    <div class="jumbotron jumbotron-fluid">
      <div class="container">
        <h1 class="display-4"><span>&#128075;</span></h1>
        <p class="lead">  {{ msg }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
  data () {
    return {
      msg: "This site has been created using Vue, Vue Router, and Bootstrap."
    }
  }
};
</script>
