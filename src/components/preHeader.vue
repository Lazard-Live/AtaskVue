<template>
  <header class="header container">
      <a href="#" class="header__logo">logo</a>
      <nav>
        <ul>
          <li><a href="#" class="header__link">1</a></li>
          <li><a href="#" class="header__link">2</a></li>
          <li><a href="#" class="header__link">3</a></li>
        </ul>
      </nav>
  </header>
</template>

<script>
export default {
  name: "preHeader",
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.header {
  height: 44px;
  display: flex;
  justify-content: space-between;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.header__logo,ul a {
  display: block;
  text-decoration: none;
  color: #000;
}

.header__logo {
  text-transform: uppercase;
  font-weight: bold;
  margin: 12px 24px;
}

ul {
  display: inline-flex;

  list-style-type: none;
}

ul a {
  height: 24px;
  width: 24px;
  margin-right: 24px;
}
</style>
