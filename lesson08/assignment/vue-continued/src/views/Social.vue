<template>
<div class="social">
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
        <router-link class="nav-item nav-link" to="/">Home<span class="sr-only">(current)</span></router-link>
        <router-link class="nav-item nav-link" to="/images">Images<span class="sr-only">(current)</span></router-link>
        <router-link class="nav-item nav-link" to="/facts">Facts</router-link>
        <router-link class="nav-item nav-link active" to="/social">Social<span class="sr-only">(current)</span></router-link>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>

  <!-- Page heading using named slot -->
  <div id="page-heading">
    <page-heading>
      <h1 class="font-weight-light text-center text-lg-left mt-4 mb-0" style="margin-left: 1rem;" slot="page-title">Social</h1>
    </page-heading>
  </div>

  <!-- Bootstrap grid declaration -->
  <div class="row">
    <!-- v-if v-else implementation that changes image and text based on button toggle -->
    <div class="col-xl-8 col-lg-7 col-sm-6 col-12 p-5" v-if="kittenMode">
      <img v-bind:src="kittenSource" alt="Photo of cute gray kitten" class="img-fluid">
      <p></p>
      <b-button variant="outline-primary" v-on:click="kittenMode = !kittenMode">Toggle Kitten Mode</b-button>
      <p class="text-success"> {{ activatedText }}</p>
    </div>
    <!-- v-else block -->
    <div class="col-xl-8 col-lg-7 col-sm-6 col-12 p-5" v-else>
      <img v-bind:src="source" alt="Photo of two cats cuddling with each other" class="img-fluid">
      <p></p>
      <b-button variant="outline-primary" v-on:click="kittenMode = !kittenMode">Toggle Kitten Mode</b-button>
      <p class="text-danger"> {{ deactivatedText }} </p>
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
import PageHeading from "@/components/PageHeading.vue";

export default {
  components: {
    PageHeading
  },
  name: "Social",
  data() {
    return {
      heading: "Meet Moon and Miu Miu",
      msg: "They're a long-haired tuxedo cat and Scottish Fold that grew up in New York City and currently reside in sunny Los Angeles, CA.",
      btnText: "Follow on Instagram",
      source: 'https://p46.f4.n0.cdn.getcloudapp.com/items/wbu7v7WY/moonandmiumiu.jpeg?source=viewer&v=2adb8019ffffe3997439f17a16da7cbe',
      kittenSource: 'https://p46.f4.n0.cdn.getcloudapp.com/items/d5uEyEWE/IMG_0187.JPG?source=viewer&v=891f6f5ea4825336029a00f4f3795f93',
      link: 'https://www.instagram.com/moonandmiumiu/',
      kittenMode: false,
      activatedText: "Kitten mode: Activated",
      deactivatedText: "Kitten mode: Deactivated",
    }
  }
};
</script>
