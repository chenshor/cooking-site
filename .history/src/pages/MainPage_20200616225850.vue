<template>
  <div class="container">
    <h1 class="title">Main Page</h1>
    <div class="grid">
      <div class="random">
        <RecipePreviewList
          title="Randome Recipes"
          class="RandomRecipes center"
        />
      </div>
      <div class="lastview">
        <RecipePreviewList
          title="Last Viewed Recipes"
          :class="{
            RandomRecipes: true,
            blur: !$root.store.username,
            center: true,
          }"
          disabled
        >
        </RecipePreviewList>
      </div>
      <div class="buttonLogin">
        <router-link v-if="!$root.store.username" to="/login" tag="button"
          >You need to Login to vue this</router-link
        >
      </div>
    </div>
    <!-- <div
      style="position: absolute;top: 70%;left: 50%;transform: translate(-50%, -50%);"
    >
      Centeredasdasdad
    </div> -->
  </div>
</template>

<script>
import RecipePreviewList from "../components/RecipePreviewList";
export default {
  components: {
    RecipePreviewList,
  },
};
</script>

<style lang="scss" scoped>
.RandomRecipes {
  margin: 10px 0 10px;
}
.blur {
  -webkit-filter: blur(5px); /* Safari 6.0 - 9.0 */
  filter: blur(2px);
}
::v-deep .blur .recipe-preview {
  pointer-events: none;
  cursor: default;
}
.grid {
  display: grid;
  grid-template-columns: repeat(2);
  grid-template-rows: repeat(4);
  grid-gap: 3%;
  height: 100%;
}
.random {
  grid-row: 2/-1;
  padding: 1%;
  overflow: auto;
}
.lastview {
  grid-row: 2/-1;
  padding: 1%;
  overflow: auto;
}
.buttonLogin {
  display: inline-block;
}
</style>
