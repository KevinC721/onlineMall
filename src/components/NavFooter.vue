<template>
  <div id="footer">
    <div class="footer-logo">
      <img src="/imgs/logo-footer.png" alt />
      <p>小米商城</p>
    </div>
    <div class="footer-link">
      <a href="https://home.miui.com/" target="_blank">MIUI</a>
      <span>|</span>
      <a href="https://home.mi.com/index.html" target="_blank">米家</a>
      <span>|</span>
      <a href="https://xiaomi.tmall.com/" target="_blank">小米天猫店</a>
      <span>|</span>
      <a href="https://game.xiaomi.com/" target="_blank">游戏</a>
      <span>|</span>
      <a href="http://www.miliao.com/" target="_blank">米聊</a>
    </div>
    <div
      class="copyright"
    >© <span class="domain">mi.com</span> 京ICP证110507号 京ICP备10046444号 京公网安备11010802020134号 京网文[2020]0276-042号</div>
  </div>
</template>

<script>
export default {};
</script>
<style lang="scss">
@import "../assets/scss/base.scss";
@import "../assets/scss/config.scss";
@import "../assets/scss/mixin.scss";
#footer {
  height: 234px;
  border-top: 4px solid $colorA;
  background-color: $colorB;
  color: $colorD;
  font-size: $fontI;
  text-align: center;
  .footer-logo {
    margin-top: 46px;
    margin-bottom: 31px;
    img {
      width: 53px;
      height: 36px;
      margin-bottom: 13px;
    }
  }
  .footer-link {
    margin-bottom: 13px;
    a {
      display: inline-block;
      color: $colorD;
    }
    span {
      margin: 0 5px;
    }
  }
  .copyright {
    .domain {
      color: $colorA;
    }
  }
}
</style>