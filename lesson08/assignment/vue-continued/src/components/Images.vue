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

  <!-- Page heading -->
  <h1 class="font-weight-light text-center text-lg-left mt-4 mb-0" style="margin-left: 1rem;"> {{ title }} </h1>

  <section class="gallery-container" v-for="picture in pictures" :key="picture.link">
    <picture-data :link="picture.link" :src="picture.src" :alt="picture.alt"/>
  </section>
</div>
</template>

<script>
import PictureData from "@/components/PictureData.vue";

export default {
  components: {
    PictureData
  },
  data() {
    return {
      title: 'Cat photos',
      pictures: [
        {link: 'https://source.unsplash.com/EnsRjlBwQsg/', src: 'https://source.unsplash.com/EnsRjlBwQsg/400x300', alt: 'Random photo of cat'},
        {link: 'https://source.unsplash.com/V7RugxejXH8/', src: 'https://source.unsplash.com/V7RugxejXH8/400x300', alt: 'Random photo of cat'}
      ],
      picture: {
        link: 'linkTest',
        src: 'srcTest',
        alt: 'altTest'
      }
    }
  }
}
</script>
