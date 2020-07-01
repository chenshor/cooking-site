<template>
  <div class="container">
    <h1>Family Recipes</h1>
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

<style>
.container {
  width: 100%;
  height: 100%;
}
</style>
