<template>
<div class="images">
  <!-- Bootstrap vue navbar -->
  <b-navbar toggleable="sm" type="light" variant="light">
   <b-navbar-toggle target="nav-text-collapse"></b-navbar-toggle>

   <b-navbar-brand><router-link class="navbar-brand" to="/"><span style='font-size:100px;'>&#128049;</span></router-link></b-navbar-brand>

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

<!-- Looped gallery container -->
  <section class="gallery-container">
    <div class="row text-center text-lg-left">
      <div class="col-lg-3 col-md-4 col-6" v-for="image in catImages" :key="image.link">
        <a v-bind:href="image.link" target="_blank" class="d-block mb-4 h-100">
          <img class="img-fluid img-thumbnail" v-bind:src="image.source" alt="Random photo of a cat">
        </a>
      </div>
    </div>
  </section>
</div>
</template>

<script>
export default {
  name: "Images",
  data() {
    return {
      title: "Cat images",
      catImages: [
        {
          link: "https://source.unsplash.com/EnsRjlBwQsg/",
          source: "https://source.unsplash.com/EnsRjlBwQsg/400x300"
        },
        {
          link: "https://source.unsplash.com/V7RugxejXH8/",
          source: "https://source.unsplash.com/V7RugxejXH8/400x300"
        },
        {
          link: "https://source.unsplash.com/ZEd44nDPTfA/",
          source: "https://source.unsplash.com/ZEd44nDPTfA/400x300"
        },
        {
          link: "https://source.unsplash.com/FT9SsFEXqF4/",
          source: "https://source.unsplash.com/FT9SsFEXqF4/400x300"
        },
        {
          link: "https://source.unsplash.com/_STvosrG-pw/",
          source: "https://source.unsplash.com/_STvosrG-pw/400x300"
        },
        {
          link: "https://source.unsplash.com/BMKtREjthyo/",
          source: "https://source.unsplash.com/BMKtREjthyo/400x300"
        },
        {
          link: "https://source.unsplash.com/bGG85MrGV1o/",
          source: "https://source.unsplash.com/bGG85MrGV1o/400x300"
        },
        {
          link: "https://source.unsplash.com/eFJfJkufGCU/",
          source: "https://source.unsplash.com/eFJfJkufGCU/400x300"
        },
        {
          link: "https://source.unsplash.com/W8iQBo22Mp4/",
          source: "https://source.unsplash.com/W8iQBo22Mp4/400x300"
        },
        {
          link: "https://source.unsplash.com/hjLueu0RbV8/",
          source: "https://source.unsplash.com/hjLueu0RbV8/400x300"
        },
        {
          link: "https://source.unsplash.com/J8meHFhqSCM/",
          source: "https://source.unsplash.com/J8meHFhqSCM/400x300"
        },
        {
          link: "https://source.unsplash.com/_VX-6amHgDY/",
          source: "https://source.unsplash.com/_VX-6amHgDY/400x300"
        }
      ]
    }
  }
};
</script>
