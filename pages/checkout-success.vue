<template>
  <div class="wrapper flex flex-col justify-center">
    <Navigation />
    <div
      class="card w-full bg-secondary h-screen flex flex-col justify-center items-center"
    >
      <div
        class="card__wrapper bg-slate-300 p-[20px] flex justify-center items-center flex-col rounded-lg"
      >
        <div class="card__thumbnail">
          <picture>
            <img
              class="w-[200px]"
              src="/images/logo.png"
              alt="sadulur futsal"
            />
          </picture>
        </div>
        <div class="card__title">
          <h2 class="text-[24px] font-bold">Terima Kasih...</h2>
        </div>
        <div class="card__subtitle">
          <p class="text-[16px] font-bold">Order Kamu berhasil di proses...</p>
        </div>
        <div class="card__button">
          <NuxtLink to="/order">
            <button
              class="text-[16px] font-bold text-secondary px-[20px] py-[5px] bg-primary rounded-lg"
            >
              Lihat Detail
            </button>
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'IndexPage',
}
</script>

<style scoped></style>
