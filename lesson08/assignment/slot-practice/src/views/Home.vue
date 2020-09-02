<template>
  <div id="hello">
    <hello>
      <h2 slot="line1">Parent Line 1</h2>
      <h3 slot="line2">Parent Line 2</h3>
    </hello>
  </div>
</template>

<script>
// @ is an alias to /src
import Hello from "@/components/Hello.vue";

export default {
  name: "Home",
  components: {
    Hello
  }
};
</script>
