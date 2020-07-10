<template>
    <b-container class="container">
      <div class="title">
        <h1 >Let's Cook.. </h1>
        </div>
      <b-row align-h="around" >
        <b-col cols="4" >
          <RecipePreviewList title="Randome Recipes" class="RandomRecipes " />  
        </b-col>
        <b-col cols="4"  v-if="this.$root.store.username" >
          <div >
        <LastSeen
            title="Last Viewed Recipes"
            :class="{
            RandomRecipes: true,
            center: true,}"
            disabled
            ></LastSeen>
          </div>
        </b-col>
          <b-col cols="4"  v-if="!this.$root.store.username">
            <div class="titlenotSeen">
              <h3>
                Last Viewed Recipes:
              </h3>
              </div>
            <b-alert class="seenAlert" show variant="danger">
            <h5> You need to login to view your last recipes</h5>
            <b-button id="btnLastSeen"
                squared
                to="/login"
              >LogIn</b-button>
          </b-alert>

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
  },

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
.title{
  color: whitesmoke;
  
}
.container{
 height: 100%;
 margin-left: 30%;
 margin-right: 30%;
}
#btnLastSeen{
background-color: brown;
 padding: 10px;
 width: 100px;
 margin-top: 20px;
 
}
.titlenotSeen{
   color: antiquewhite;
  text-align: center;
  margin: 20px;
  margin-bottom: 20%;
  
}
.seenAlert{
  width: 300px;
   text-align: center;
  
}
</style>
