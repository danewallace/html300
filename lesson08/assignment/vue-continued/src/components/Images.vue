<template>
<div class="images">
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
        <router-link class="nav-item nav-link active" to="/images">Images<span class="sr-only">(current)</span></router-link>
        <router-link class="nav-item nav-link" to="/facts">Facts</router-link>
        <router-link class="nav-item nav-link" to="/social">Social</router-link>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>

  <!-- Page heading using named slot -->
  <div id="page-heading">
    <page-heading>
      <h1 class="font-weight-light text-center text-lg-left mt-4 mb-0" style="margin-left: 1rem;" slot="page-title">Cat photos</h1>
    </page-heading>
  </div>

  <!-- Gallery container using prop and iteration overy array of picture objects -->
  <section class="gallery-container" >
    <div class="row text-center text-lg-left">
      <div class="col-lg-3 col-md-4 col-6" v-for="picture in pictures" :key="picture.link">
        <picture-data :link="picture.link" :src="picture.src" :alt="picture.alt"/>
      </div>
    </div>
  </section>
</div>
</template>

<script>
import PictureData from "@/components/PictureData.vue";
import PageHeading from "@/components/PageHeading.vue";

export default {
  components: {
    PictureData,
    PageHeading
  },
  data() {
    return {
      pictures: [
        {link: 'https://source.unsplash.com/EnsRjlBwQsg/', src: 'https://source.unsplash.com/EnsRjlBwQsg/400x300', alt: 'Random photo of cat'},
        {link: 'https://source.unsplash.com/V7RugxejXH8/', src: 'https://source.unsplash.com/V7RugxejXH8/400x300', alt: 'Random photo of cat'},
        {link: 'https://source.unsplash.com/ZEd44nDPTfA/', src: 'https://source.unsplash.com/ZEd44nDPTfA/400x300', alt: 'Random photo of cat'},
        {link: 'https://source.unsplash.com/FT9SsFEXqF4/', src: 'https://source.unsplash.com/FT9SsFEXqF4/400x300', alt: 'Random photo of cat'},
        {link: 'https://source.unsplash.com/_STvosrG-pw/', src: 'https://source.unsplash.com/_STvosrG-pw/400x300', alt: 'Random photo of cat'},
        {link: 'https://source.unsplash.com/BMKtREjthyo/', src: 'https://source.unsplash.com/BMKtREjthyo/400x300', alt: 'Random photo of cat'},
        {link: 'https://source.unsplash.com/bGG85MrGV1o/', src: 'https://source.unsplash.com/bGG85MrGV1o/400x300', alt: 'Random photo of cat'},
        {link: 'https://source.unsplash.com/eFJfJkufGCU/', src: 'https://source.unsplash.com/eFJfJkufGCU/400x300', alt: 'Random photo of cat'},
        {link: 'https://source.unsplash.com/hjLueu0RbV8/', src: 'https://source.unsplash.com/hjLueu0RbV8/400x300', alt: 'Random photo of cat'},
        {link: 'https://source.unsplash.com/J8meHFhqSCM/', src: 'https://source.unsplash.com/J8meHFhqSCM/400x300', alt: 'Random photo of cat'},
        {link: 'https://source.unsplash.com/_VX-6amHgDY/', src: 'https://source.unsplash.com/_VX-6amHgDY/400x300', alt: 'Random photo of cat'},
        {link: 'https://source.unsplash.com/W8iQBo22Mp4/', src: 'https://source.unsplash.com/W8iQBo22Mp4/400x300', alt: 'Random photo of cat'}
      ]
    }
  }
}
</script>
