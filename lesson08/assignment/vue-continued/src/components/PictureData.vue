<template>
 <div id='picture-data'>
   {{link}}
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
