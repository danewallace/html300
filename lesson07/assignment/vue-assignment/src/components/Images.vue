<template>
<div class="images">
  <!-- Bootstrap navbar -->
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <router-link class="navbar-brand" to="/"><span style='font-size:100px;'>&#128049;</span></router-link>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div class="navbar-nav">
        <router-link class="nav-item nav-link" to="/">Home</router-link>
        <router-link class="nav-item nav-link active" to="/images">Images<span class="sr-only">(current)</span></router-link>
        <router-link class="nav-item nav-link" to="/facts">Facts</router-link>
        <router-link class="nav-item nav-link" to="/social">Social</router-link>
      </div>
    </div>
  </nav>

  <!-- Page heading -->
  <h1 class="font-weight-light text-center text-lg-left mt-4 mb-0" style="margin-left: 1rem;"> {{ title }} </h1>

<!-- Looped gallery container -->
  <section class="gallery-container">
    <div class="row text-center text-lg-left">
      <div class="col-lg-3 col-md-4 col-6" v-for="image in catImages">
        <a v-bind:href="link" target="_blank" class="d-block mb-4 h-100">
          <img class="img-fluid img-thumbnail" v-bind:src="source" alt="">
        </a>
      </div>
    </div>
  </section>

  <!-- Original gallery container -->
  <section class="gallery-container">
    <div class="row text-center text-lg-left">
      <!-- Interactive image that links to full image within responsive container -->
      <div class="col-lg-3 col-md-4 col-6">
        <a href="https://source.unsplash.com/EnsRjlBwQsg/" class="d-block mb-4 h-100">
          <img class="img-fluid img-thumbnail" src="https://source.unsplash.com/EnsRjlBwQsg/400x300" alt="">
        </a>
      </div>
      <!-- Interactive image that links to full image within responsive container -->
      <div class="col-lg-3 col-md-4 col-6">
        <a href="https://source.unsplash.com/V7RugxejXH8/" class="d-block mb-4 h-100">
          <img class="img-fluid img-thumbnail" src="https://source.unsplash.com/V7RugxejXH8/400x300" alt="">
        </a>
      </div>
      <!-- Interactive image that links to full image within responsive container -->
      <div class="col-lg-3 col-md-4 col-6">
        <a href="https://source.unsplash.com/ZEd44nDPTfA/" class="d-block mb-4 h-100">
          <img class="img-fluid img-thumbnail" src="https://source.unsplash.com/ZEd44nDPTfA/400x300" alt="">
        </a>
      </div>
      <!-- Interactive image that links to full image within responsive container -->
      <div class="col-lg-3 col-md-4 col-6">
        <a href="https://source.unsplash.com/FT9SsFEXqF4/" class="d-block mb-4 h-100">
          <img class="img-fluid img-thumbnail" src="https://source.unsplash.com/FT9SsFEXqF4/400x300" alt="">
        </a>
      </div>
      <!-- Interactive image that links to full image within responsive container -->
      <div class="col-lg-3 col-md-4 col-6">
        <a href="https://source.unsplash.com/_STvosrG-pw/" class="d-block mb-4 h-100">
          <img class="img-fluid img-thumbnail" src="https://source.unsplash.com/_STvosrG-pw/400x300" alt="">
        </a>
      </div>
      <!-- Interactive image that links to full image within responsive container -->
      <div class="col-lg-3 col-md-4 col-6">
        <a href="https://source.unsplash.com/BMKtREjthyo/" class="d-block mb-4 h-100">
          <img class="img-fluid img-thumbnail" src="https://source.unsplash.com/BMKtREjthyo/400x300" alt="">
        </a>
      </div>
      <!-- Interactive image that links to full image within responsive container -->
      <div class="col-lg-3 col-md-4 col-6">
        <a href="https://source.unsplash.com/bGG85MrGV1o/" class="d-block mb-4 h-100">
          <img class="img-fluid img-thumbnail" src="https://source.unsplash.com/bGG85MrGV1o/400x300" alt="">
        </a>
      </div>
      <!-- Interactive image that links to full image within responsive container -->
      <div class="col-lg-3 col-md-4 col-6">
        <a href="https://source.unsplash.com/eFJfJkufGCU/" class="d-block mb-4 h-100">
          <img class="img-fluid img-thumbnail" src="https://source.unsplash.com/eFJfJkufGCU/400x300" alt="">
        </a>
      </div>
      <!-- Interactive image that links to full image within responsive container -->
      <div class="col-lg-3 col-md-4 col-6">
        <a href="https://source.unsplash.com/W8iQBo22Mp4/" class="d-block mb-4 h-100">
          <img class="img-fluid img-thumbnail" src="https://source.unsplash.com/W8iQBo22Mp4/400x300" alt="">
        </a>
      </div>
      <!-- Interactive image that links to full image within responsive container -->
      <div class="col-lg-3 col-md-4 col-6">
        <a href="https://source.unsplash.com/hjLueu0RbV8/" class="d-block mb-4 h-100">
          <img class="img-fluid img-thumbnail" src="https://source.unsplash.com/hjLueu0RbV8/400x300" alt="">
        </a>
      </div>
      <!-- Interactive image that links to full image within responsive container -->
      <div class="col-lg-3 col-md-4 col-6">
        <a href="https://source.unsplash.com/J8meHFhqSCM/" class="d-block mb-4 h-100">
          <img class="img-fluid img-thumbnail" src="https://source.unsplash.com/J8meHFhqSCM/400x300" alt="">
        </a>
      </div>
      <!-- Interactive image that links to full image within responsive container -->
      <div class="col-lg-3 col-md-4 col-6">
        <a href="https://source.unsplash.com/_VX-6amHgDY/" class="d-block mb-4 h-100">
          <img class="img-fluid img-thumbnail" src="https://source.unsplash.com/_VX-6amHgDY/400x300" alt="">
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
          link: "https://source.unsplash.com/_VX-6amHgDY/",
          source: "https://source.unsplash.com/_VX-6amHgDY/400x300"
        },
        {
          link: "https://source.unsplash.com/J8meHFhqSCM/",
          source: "https://source.unsplash.com/_VX-6amHgDY/400x300"
        }
      ]
    }
  }
};
</script>
