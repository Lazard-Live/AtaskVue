<template>
  <header class="headerBlock section section_first root__header">
    <div class="container headerBlock__contaner">
      <a
        href="#"
        class="headerBlock__logo"
        v-on:mouseover="onHover"
        v-on:mouseleave="backColor"
        v-on:click="onClick"
        >logo</a
      >
      <ul class="headerBlock__nav">
        <li><a href="#" class="headerBlock__link">Person.svg</a></li>
        <li><a href="#" class="headerBlock__link">favorite.svg</a></li>
        <li><a href="#" class="headerBlock__link">bag.svg</a></li>
      </ul>
    </div>
  </header>
</template>

<script>
export default {
  name: "headerBlock",
};
</script>

<style src="./headerBlock.scss" lang="scss"></style>
