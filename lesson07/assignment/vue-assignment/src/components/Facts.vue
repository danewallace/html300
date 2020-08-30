<template>
  <div role="tablist">

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
          <router-link class="nav-item nav-link active" to="/facts">Facts<span class="sr-only">(current)</span></router-link>
          <router-link class="nav-item nav-link" to="/social">Social</router-link>
        </div>
      </div>
    </nav>

    <!-- Page heading -->
    <h1 class="font-weight-light text-center text-lg-left mt-4 mb-0" style="margin-left: 1rem;"> {{ title }} </h1>

    <!-- Looped accordion card -->
    <b-card no-body class="mb-1" v-for="(fact, index) in facts" :key="fact.title">
      <b-card-header header-tag="header" class="p-1" role="tab" >
        <b-button block v-b-toggle="'accordion-' + index"  variant="info"> {{ fact.title }}</b-button>
        <!-- <b-button block v-b-toggle.accordion-1 variant="info"> {{ fact.title }}</b-button> -->
      </b-card-header>
      <b-collapse v-bind:id="'accordion-'+index" accordion="my-accordion" role="tabpanel">
        <b-card-body>
          <b-card-text>{{ fact.body }}</b-card-text>
        </b-card-body>
      </b-collapse>
    </b-card>

    <!-- Original static accordion cards -->
    <b-card no-body class="mb-1">
      <b-card-header header-tag="header" class="p-1" role="tab">
        <b-button block v-b-toggle.accordion-1 variant="info">Accordion 1</b-button>
      </b-card-header>
      <b-collapse id="accordion-1" accordion="my-accordion" role="tabpanel">
        <b-card-body>
          <b-card-text>{{ text }}</b-card-text>
        </b-card-body>
      </b-collapse>
    </b-card>

    <b-card no-body class="mb-1">
      <b-card-header header-tag="header" class="p-1" role="tab">
        <b-button block v-b-toggle.accordion-2 variant="info">Accordion 2</b-button>
      </b-card-header>
      <b-collapse id="accordion-2" accordion="my-accordion" role="tabpanel">
        <b-card-body>
          <b-card-text>{{ text }}</b-card-text>
        </b-card-body>
      </b-collapse>
    </b-card>

    <b-card no-body class="mb-1">
      <b-card-header header-tag="header" class="p-1" role="tab">
        <b-button block v-b-toggle.accordion-3 variant="info">Accordion 3</b-button>
      </b-card-header>
      <b-collapse id="accordion-3" accordion="my-accordion" role="tabpanel">
        <b-card-body>
          <b-card-text>{{ text }}</b-card-text>
        </b-card-body>
      </b-collapse>
    </b-card>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        title: 'Cat facts',
        facts:[
          {number: 1, title: 'Accordion 1', body: 'This is some text 1'},
          {number: 2, title: 'Accordion 2', body: 'This is some text 2'},
          {number: 3, title: 'Accordion 3', body: 'This is some text 3'}
        ],
        text: `
          Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry
          richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor
          brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon
          tempor, sunt aliqua put a bird on it squid single-origin coffee nulla
          assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore
          wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher
          vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic
          synth nesciunt you probably haven't heard of them accusamus labore VHS.
        `
      }
    }
  }
</script>
