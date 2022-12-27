<template>
  <div
    class="flex flex-col cursor-pointer items-center justify-center w-full h-full overflow-hidden bg-[#FF10F0]"
    v-on:mousedown="interact"
  >
    <div
      v-show="!interacted"
      class="absolute z-10 text-white opacity-50"
      style="font-family: 'Courier New', Courier, monospace"
    >
      Scratch to find out...
    </div>
    <vue-scratchable
      :brushOptions="{size:40, shape:'brush'}"
      :hideOptions="{type:'color',value:'#101010'}"
      class="flex items-center justify-center w-full h-full"
    >
      <h1
        class="text-[100px] lg:text-[150px] text-[#000]"
        style="font-family: 'Luckiest Guy', cursive;"
      >
        YES.
      </h1>
    </vue-scratchable>
  </div>
</template>

<script>
  import VueScratchable from 'vue-scratchable'

  export default {
    components: {
      VueScratchable
    },
    data() {
      return {
        interacted: false
      }
    },
    methods: {
      interact: function (event) {
        this.interacted = true
      }
    }
  }
</script>