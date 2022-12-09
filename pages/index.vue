<template>
  <div>
    <h1>{{ data.recipe.recipeTitle }}</h1>
    <p>{{ data.recipe.RecipeCreator }}</p>
    <a :href="data.recipe.link" rel="noreferer">{{ data.recipe.recipeTitle }}</a>
  </div>
</template>

<script>
  export default {
    data: () => ({
      data: {
        recipe: {}
      }
    }),
    async fetch() {
      this.data = await this.$http.$get('https://api.aeroprecipe.com/recipes/random')
    }
  }
</script>