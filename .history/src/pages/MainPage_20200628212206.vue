<template>
  <div>
    <b-container class="container">
      <b-row>
        <b-col class="text-center">
          <h1 class="title">Main Page</h1>
        </b-col>
      </b-row>
      <b-row align-v="stretch" class="mainRow">
        <b-col>
          <RecipePreviewList title="Randome Recipes" class="RandomRecipes center" />
        </b-col>
        <b-col>
          <b-row>
            <b-col cols="8">
              <LastSeen
                title="Last Viewed Recipes"
                :class="{
            RandomRecipes: true,
            blur: !$root.store.username,
            center: true,
          }"
                disabled
              ></LastSeen>
            </b-col>
            <b-col>
              <b-button
                squared
                v-if="!$root.store.username"
                to="/login"
                variant="info"
              >You need to Login to vue this</b-button>
            </b-col>
          </b-row>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import RecipePreviewList from "../components/RecipePreviewList";
import LastSeen from "../components/LastSeen";
export default {
  components: {
    RecipePreviewList,
    LastSeen
  }
};
</script>

<style >
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

.mainRow {
  width: 100%;
  height: 100%;
}
/* // .grid {
//   display: grid;
//   grid-template-columns: auto;
//   grid-template-rows: auto;
//   grid-gap: 3%;
//   height: 100%;
//   width: 100%;
// }
// .random {
//   grid-row: 2/-1;
//   padding: 1%;
//   overflow: auto;
// }
// .lastview {
//   grid-row: 2/-1;
//   padding: 1%;
//   overflow: auto;
// }
// .buttonLogin {
//   grid-row: 2/-1;
//   padding-top: 1%;
//   overflow: auto;
//   margin-top: 5%;
// } */
.container {
  width: 100%;
  height: 100%;
}
</style>
