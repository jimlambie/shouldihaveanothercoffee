<template>
  <div>
    <h1>{{ recipe.recipeTitle }}</h1>
    <p>{{ recipe.RecipeCreator }}</p>
    <a :href="recipe.link" rel="noreferer">{{ recipe.recipeTitle }}</a>
  </div>
</template>

<script>
  export default {
    async asyncData({ params, $http }) {
      const baseUrl = 'https://api.aeroprecipe.com'
      const tokenData = await $http.$post(`${baseUrl}/token`, {
        "clientId": "shouldihaveanothercoffee",
        "secret": process.env.CLIENT_SECRET
      }, { 'Content-Type': 'application/json'})

      const url = '/aeroprecipe/recipes?fields=%7B%22recipe_slug%22%3A1,%22recipeTitle%22%3A1,%22RecipeCreator%22%3A1%7D&filter=%7B%22published%22%3Atrue%7D'
      const recipes = await $http.$get(`${baseUrl}${url}`, {
        headers: {
          Authorization: `Bearer ${tokenData.accessToken}`
        }
      })

      const recipe = recipes.results[Math.floor(Math.random() * recipes.results.length + 1 )]
      recipe.link = `https://aeroprecipe.com/recipes/${recipe.recipe_slug}`

      return { recipe }
    }
  }
</script>