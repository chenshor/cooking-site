
<template>
  <div class="containerFamily">
    <div class="title">Family Recipes</div>
   <FamilyList> </FamilyList>
  </div>
</template>

<script>
import FamilyList from "../components/FamilyList";

export default {
  components: {
    FamilyList
  }
};
</script>

<style lang="scss" scoped >
@import url("https://fonts.googleapis.com/css2?family=Acme&family=Dancing+Script&family=Fondamento&family=Shadows+Into+Light&display=swap");

.containerFamily {
  width: 100%;
  height: 100%;
}

.title{
  color: whitesmoke;
  text-align: center;
  margin-top: 40px;
  margin-bottom: 50px;
  font-family: 'Shadows Into Light', cursive;
  font-size: 70px;
 letter-spacing: 1px;

}
</style>
