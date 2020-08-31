<template>
<article class="post">
  <h3 class="post__title"> {{ post.title }}</h3>
  <h6 class="post__author">{{ post.author }}</h6>
  <p class="post__excerpt">{{ post.excerpt }}</p>
  <button @click="post.likes++" class="post__likes">+1 | {{ post.likes }}</button>
</article>
</template>

<script>
export default {
  name: 'post',
  props: ['post']
}
</script>

<style lang="scss">
.post {
    padding: 2rem;
    margin-left: 1.5rem auto;
    max-width: 900px;
    border: 1px solid #2c3e50;
}
</style>
