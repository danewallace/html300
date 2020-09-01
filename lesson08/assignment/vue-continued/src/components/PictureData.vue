<template>
 <div id='picture-data'>
   <a v-bind:href="link" target="_blank" class="d-block mb-4 h-100">
     <img class="img-fluid img-thumbnail" v-bind:src="source" alt="alt">
   </a>
 </div>
</template>

<script>
export default {
 props: {
   link: String,
   src: String,
   alt: String,
 }
}
</script>
