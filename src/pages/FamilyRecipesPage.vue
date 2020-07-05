<template>
  <div class="containerFamily">
    <h1 class="title">Family Recipes</h1>
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
.containerFamily {
  width: 100%;
  height: 100%;
}

.title{
  color: whitesmoke;
  text-align: center;
  margin-top: 20px;
  margin-bottom: 50px;
}
</style>
