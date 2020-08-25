<template>
  <div class="social">
    <!-- Bootstrap navbar -->
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <router-link class="navbar-brand" to="/"><span style='font-size:100px;'>&#128049;</span></router-link>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div class="navbar-nav">
            <router-link class="nav-item nav-link" to="/">Home</router-link>
            <router-link class="nav-item nav-link" to="/images">Images</router-link>
            <router-link class="nav-item nav-link" to="/facts">Facts</router-link>
            <router-link class="nav-item nav-link active" to="/social">Social<span class="sr-only">(current)</span></router-link>
          </div>
      </div>
    </nav>

  <!-- Page heading -->
    <h1 class="font-weight-light text-center text-lg-left mt-4 mb-0" style="margin-left: 1rem;">Social</h1>

    <!-- Bootstrap grid declaration -->
    <div class="row">
      <!-- Bootstrap grid item for page image -->
      <div class="col-xl-8 col-lg-7 col-sm-6 col-12 p-5">
        <img src="https://p46.f4.n0.cdn.getcloudapp.com/items/o0uxGLvW/moonandmiumiu.jpeg?v=cd58ce8822e2316f57d9e648a389acef" alt="..." class="img-fluid">
      </div>
      <!-- Bootstrap grid item for page copy -->
      <div class="col-xl-4 col-lg-5 col-sm-6 col-12 p-5">
        <p class="lead text-left">Meet Moon and Miu Miu</p>
        <p class="text-left">They're a long-haired tuxedo cat and Scottish Fold that grew up in New York City and currently reside in sunny Los Angeles, CA. </p>
        <a href="https://www.instagram.com/moonandmiumiu/" class="btn btn-ins" style="background: #125688; color: white;"><i class="fab fa-instagram pr-1"></i> Follow on Instagram</a>
      </div>
    </div>
  </div>
</template>
