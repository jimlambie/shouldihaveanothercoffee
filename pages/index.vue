<template>
  <div class="w-full h-full bg-black">
    <LazyTemplate01 v-if="randomTemplate === 'template01'" />
    <LazyTemplate02 v-if="randomTemplate === 'template02'" />
    <LazyTemplate03 v-if="randomTemplate === 'template03'" />
    <LazyTemplate04 v-if="randomTemplate === 'template04'" />
    <LazyTemplate05 v-if="randomTemplate === 'template05'" />
    <LazyTemplate06 v-if="randomTemplate === 'template06'" />
    <LazyTemplate07 v-if="randomTemplate === 'template07'" />
    <LazyTemplate08 v-if="randomTemplate === 'template08'" />
    <LazyTemplate09 v-if="randomTemplate === 'template09'" />
    <div :v-show="data.recipe" class="fixed bottom-0 z-20 flex items-center justify-center w-full py-4 text-sm text-center text-white bg-black md:text-base bg-opacity-90 backdrop-blur-md">
      <p>Try <a class="underline" :href="data.recipe.link" rel="noreferer">{{ data.recipe.recipeTitle }}</a> by {{ data.recipe.RecipeCreator }} on <a href="https://aeroprecipe.com">AeroPrecipe.com</a></p>
    </div>
</div>
</template>

<script>
  export default {
    data() {
      const templates = [
        'template01',
        'template02',
        'template03',
        'template04',
        'template05',
        'template06',
        'template07',
        'template08',
        'template09'
      ]
      return {
        data: {
          recipe: {}
        },
        randomTemplate: templates[Math.floor(Math.random() * templates.length)]
      }
    },
    async fetch() {
      this.data = await this.$http.$get('https://api.aeroprecipe.com/recipes/random')
    }
  }
</script>