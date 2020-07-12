<template>
  <b-container class="container">
    <div class="title">
      <img
        width="1140"
        height="641"
        src="https://res.cloudinary.com/di0zdzniy/image/upload/v1594462456/mainFood_fp7mst.jpg"
        alt="Image"
      />
    </div>
    <div align-h="between" class="row">
      <div class="column">
        <RecipePreviewList title="Randome Recipes" class="RandomRecipes" />
      </div>
      <div class="column">
        <div v-if="this.$root.store.username">
          <LastSeen
            title="Last Viewed Recipes"
            :class="{
            RandomRecipes: true,
            center: true,}"
            disabled
          ></LastSeen>
        </div>
        <div v-if="!this.$root.store.username">
          <div class="titlenotSeen">
            <div>Last Viewed Recipes:</div>
          </div>
          <div class="alerts">
            <b-alert class="seenAlert" show variant="danger">
              <h5>You need to login to view your last recipes</h5>
              <hr />
              <b-button id="btnLastSeen" squared to="/login">LogIn</b-button>
            </b-alert>
          </div>
        </div>
      </div>
    </div>
  </b-container>
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
.blur {
  -webkit-filter: blur(5px); /* Safari 6.0 - 9.0 */
  filter: blur(2px);
}
::v-deep .blur .recipe-preview {
  pointer-events: none;
  cursor: pointer;
  text-decoration: none;
}
.title {
  color: whitesmoke;

  max-width: 100%;
}
.title img {
  height: 100%;
  max-width: none;
  object-fit: cover;
  border: 0;
  padding-top: 20px;
}

.container1 {
  height: 100%;
  width: 100%;
  margin: 0;
}
#btnLastSeen {
  background-color: brown;
  padding: 10px;
  width: 100px;
  margin-top: 20px;
}
.titlenotSeen {
  color: antiquewhite;
  text-align: center;
  font-size: 40px;
  font-family: "BlinkMacSystemFont";
  letter-spacing: 1px;
  margin: 20px;
  margin-top: 7%;
  margin-bottom: 20%;
}
.seenAlert {
  width: 300px;
  text-align: center;
  font-family: "Barlev";
  letter-spacing: 1px;
  margin: 0 auto;
}
.row {
  display: flex;
}

/* Create two equal columns that sits next to each other */
.column {
  flex: 50%;
  padding: 10%;
}
</style>
