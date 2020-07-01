<template>
  <div class="container">
    <h1 class="title">Family Recipes</h1>
    <FamilyList title="Family Recipes" />
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
.container {
  width: 100%;
  height: 100%;
}
.title {
  color: #e43d3d;
}
</style>
