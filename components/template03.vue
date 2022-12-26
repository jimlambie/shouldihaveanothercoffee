<template>
  <div
    class="flex flex-col items-center justify-center w-full h-full overflow-hidden bg-black"
    style="font-family: 'Helvetica', cursive;"
  >
    <div class="text-[70px] lg:text-[100px] transform rotate-3 scale-125 leading-none w-full overflow-hidden font-extrabold text-white">
      <div v-for="index in 20" :key="index">
        <marquee-text :repeat="10" :duration="1" :reverse="index % 2==0">
          <span class="px-3 text-transparent text-stroke text-stroke-2 text-stroke-[#FF10F0] blur-[2px]">
            YES
          </span>
        </marquee-text>
      </div>
    </div>
  </div>
</template>

<script>
  import MarqueeText from 'vue-marquee-text-component'

  export default {
    name: 'Marquee',
    components: {
      MarqueeText
    }
  }
</script>