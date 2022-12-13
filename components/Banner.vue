<template>
  <div class="banner flex items-center">
    <div
      class="banner__wrapper flex justify-center flex-col gap-[20px] px-[10px] md:px-[100px] lg:px-[165px]"
    >
      <div
        class="banner__title text-[32px] leading-[0.8em] text-primary font-bold md:text-[52px] lg:text-[72px]"
      >
        <h2>SADULUR</h2>
      </div>
      <div
        class="banner__sub-title text-[20px] text-white leading-[0.8em] font-medium md:text-[36px] lg:text-[64px]"
      >
        <h4>Futsal</h4>
      </div>
    </div>
  </div>
</template>

<script>
export default { name: 'BannerComponent' }
</script>

<style scoped>
.banner {
  background-image: url('/images/banner-bg-mobile.png');
  background-size: cover;
  min-height: 100vh;
  background-position: top center;
}

@media only screen and (min-width: 768px) {
  .banner {
    background-image: url('/images/banner-bg.png');
    background-position: bottom center;
  }
}
</style>
