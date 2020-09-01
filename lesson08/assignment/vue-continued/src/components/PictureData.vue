<template>
 <div id='picture-data'>
   <p>{{link}}</p>
   <p>{{src}}</p>
   <p>{{alt}}</p>
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
