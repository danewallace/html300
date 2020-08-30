<template>
<div class="social">
  <!-- Bootstrap vue navbar -->
  <b-navbar toggleable="sm" type="light" variant="light">
    <b-navbar-toggle target="nav-text-collapse"></b-navbar-toggle>

    <b-navbar-brand>
      <router-link class="navbar-brand" to="/"><span style='font-size:100px;'>&#128049;</span></router-link>
    </b-navbar-brand>

    <b-collapse id="nav-text-collapse" is-nav>
      <b-navbar-nav>
        <router-link class="nav-item nav-link" to="/">Home<span class="sr-only">(current)</span></router-link>
        <router-link class="nav-item nav-link" to="/images">Images<span class="sr-only">(current)</span></router-link>
        <router-link class="nav-item nav-link" to="/facts">Facts</router-link>
        <router-link class="nav-item nav-link active" to="/social">Social<span class="sr-only">(current)</span></router-link>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>

  <!-- Page heading -->
  <h1 class="font-weight-light text-center text-lg-left mt-4 mb-0" style="margin-left: 1rem;"> {{ title }} </h1>


  <!-- Bootstrap grid declaration -->
  <div class="row">
    <div class="col-xl-8 col-lg-7 col-sm-6 col-12 p-5" v-if="kittenMode">
      <img v-bind:src="kittenSource" alt="..." class="img-fluid">
      <p></p>
      <b-button variant="outline-primary" v-on:click="kittenMode = !kittenMode">Toggle Kitten Mode</b-button>
    </div>
    <div class="col-xl-8 col-lg-7 col-sm-6 col-12 p-5" v-else>
      <img v-bind:src="source" alt="..." class="img-fluid">
      <p></p>
      <b-button variant="outline-primary" v-on:click="kittenMode = !kittenMode">Toggle Kitten Mode</b-button>
    </div>

    <!-- Bootstrap grid item for page copy -->
    <div class="col-xl-4 col-lg-5 col-sm-6 col-12 p-5">
      <p class="lead text-center"> {{ heading }} </p>
      <p class="text-center"> {{ msg }} </p>
      <b-button pill v-bind:href="link">{{ btnText }}</b-button>
    </div>
  </div>

</div>
</template>

<script>
export default {
  name: "Social",
  data() {

    return {
      title: "Social",
      heading: "Meet Moon and Miu Miu",
      msg: "They're a long-haired tuxedo cat and Scottish Fold that grew up in New York City and currently reside in sunny Los Angeles, CA.",
      btnText: "Follow on Instagram",
      source: 'https://p46.f4.n0.cdn.getcloudapp.com/items/o0uxGLvW/moonandmiumiu.jpeg?v=cd58ce8822e2316f57d9e648a389acef',
      kittenSource: 'https://p46.f4.n0.cdn.getcloudapp.com/items/8LuPg7Kz/IMG_0187.JPG?source=viewer&v=805dcc1c7bd11a1afcec4c3adbe0f9c9',
      link: 'https://www.instagram.com/moonandmiumiu/',
      kittenMode: false
    }
  }
};
</script>
