<template>
 <div>
   <picture-info :username="user.username" />
 </div>
</template>

<script>
import PictureInfo from "@/components/PictureInfo.vue";

export default {
 components: {
   PictureInfo
 },
 data() {
   return {
     user: {
       username: 'Dane'
     }
   }
 }
}
</script>
