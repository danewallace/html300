<template>
 <div id='picture-data'>
   <a :href="link" target="_blank" class="d-block mb-4 h-100">
     <img :class="[catImage.isClicked ? catImage.applyBorder : '', catImage.imgFluid]" @click="imgClicked" :src="src" :alt="alt">
   </a>
 </div>
</template>

<script>
import { toggleBorder } from '@/mixins/toggleBorder.js'

export default {
mixins: [toggleBorder],
 props: {
   link: String,
   src: String,
   alt: String,
 }
}
</script>

<style scoped>

.border-on-click {
  border: 5px solid darkgray;
}

</style>
