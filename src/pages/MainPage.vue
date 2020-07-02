<template>
    <b-container class="container">
      <b-row>
        <b-col class="text-center">
          <h1 class="title">Let's Cook.. </h1>
        </b-col>
      </b-row>
      <b-row align-self="stretch">
        <b-col cols="5">
          <RecipePreviewList title="Randome Recipes" class="RandomRecipes " />
        </b-col>
        <b-col cols="5">
        <LastSeen
            title="Last Viewed Recipes"
            :class="{
            RandomRecipes: true,
            blur: !$root.store.username,
            center: true,}"
            disabled
            ></LastSeen>
         
        </b-col>
        <b-col>
           <b-button id="btnLastSeen"
                squared
                v-if="!$root.store.username"
                to="/login"
              >Login to view</b-button>
        </b-col>
       
      </b-row>
       
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
h1{
  color: blanchedalmond;
}
.container{
 height: 100%;
 margin-left: 30%;
 margin-right: 30%;
}
#btnLastSeen{
   background-color: brown;
 padding: 30px;
}


</style>
