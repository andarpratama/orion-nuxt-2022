<template>
  <div class="empty flex flex-col justify-center items-center ga-[20px]">
    <img class="max-w-[200px]" src="/images/no-money.png" alt="Empty" />
    <div class="desc text-center">
      <p class="text-white text-[16px] md:text-[20px] lg:text-[24px]">
        Ups... Sepertinya kamu belum pernah membuat order.
      </p>
    </div>
  </div>
</template>

<script>
export default { name: 'EmptyMessage' }
</script>
