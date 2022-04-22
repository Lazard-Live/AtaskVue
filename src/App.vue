<template>
  <header-block />
  <content-block />
  <footer-block />
</template>

<script>
import headerBlock from "./components/headerBlock/headerBlock.vue";
import contentBlock from "./components/contentBlock/contentBlock.vue";
import footerBlock from "@/components/footerBlock/footerBlock.vue";

export default {
  name: "App",
  components: {
    headerBlock,
    contentBlock,
    footerBlock,
  },
};
</script>

<style>
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}
</style>
