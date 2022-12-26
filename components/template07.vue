<template>
  <div
    class="flex flex-col items-center justify-center w-full h-full text-white bg-black"
    style="font-family: Inter, sans-serif;"
  >
    <h1 class="z-10 text-[150px] text-stroke text-stroke-2 text-stroke-white text-transparent">YES.</h1>
    <video class="absolute z-0 object-cover w-screen h-screen opacity-40" muted loop autoplay>
      <source src="@/assets/video/cup.mp4" type="video/mp4">
      <source src="@/assets/video/cup.webm" type="video/webm">
    </video>
  </div>
</template>