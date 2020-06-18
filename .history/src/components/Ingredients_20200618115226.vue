<template>
  <b-card
    :title="ingredient.name"
    :img-src="ingredient.image"
    img-alt="Image"
    img-top
    tag="article"
    style="max-width: 20rem;max-height:auto;"
    class="mb-2"
  >
    <b-card-text>{{ingredient.amount.value}}</b-card-text>
  </b-card>
</template>

<script>
export default {
  data() {
    return {
      image_load: false
    };
  },
  props: {
    ingredient: {
      type: Object,
      required: true
    }
  }
};
</script>

<style scoped>
</style>
