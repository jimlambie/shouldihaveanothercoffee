<template>
  <div
    class="flex flex-col items-center justify-center w-full h-full text-white bg-black"
    style="font-family: 'Playfair Display', serif;"
  >
    <h1 class="z-10 text-[100px] lg:text-[150px] text-[#faf0e6] italic">yes.</h1>
    <video class="absolute z-0 object-cover w-screen h-screen opacity-40" muted playsinline loop autoplay>
      <source src="@/assets/video/hike.mp4" type="video/mp4">
      <source src="@/assets/video/hike.webm" type="video/webm">
    </video>
  </div>
</template>