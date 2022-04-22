<template>
  <footer class="footer root__footer">
    <div class="container">
      <div class="row">
        <div class="col-3 footerBlock__col">
          <div class="title title_md title_uppercase">Покупателям</div>
          <ul class="footerBlock__nav">
            <li><a href="#" class="footerBlock__link">Каталоги</a></li>
            <li><a href="#" class="footerBlock__link">Акции</a></li>
            <li><a href="#" class="footerBlock__link">Бренды</a></li>
          </ul>
        </div>
        <div class="col-3 footerBlock__col">
          <div class="title title_md title_uppercase">О нас</div>
          <ul class="footerBlock__nav">
            <li><a href="#" class="footerBlock__link">О компании</a></li>
            <li><a href="#" class="footerBlock__link">Новости</a></li>
            <li><a href="#" class="footerBlock__link">Команда</a></li>
          </ul>
        </div>
        <div class="col-6">
          <div class="footerBlock__form">
            <div class="title title_md title_uppercase">
              Узнайте первыми о новинках и акциях
            </div>
            <input type="text" class="footerBlock__input" />
            <button class="button">Подписаться</button>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "footerBlock",
};
</script>

<style src="./footerBlock.scss" lang="scss"></style>
