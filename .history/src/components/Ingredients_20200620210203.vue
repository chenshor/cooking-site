<template>
  <b-card
    :sub-title="ingredient.name"
    :img-src="ingredient.Image"
    img-alt="Image"
    img-top
    tag="article"
    style="max-width: 11rem; max-height: 12rem"
    align="center"
    class="mb-2"
  >
    <b-card-sub-title>
      {{ingredient.amount.metric.value}}
      {{ingredient.amount.metric.unit}}
    </b-card-sub-title>
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
.img {
  width: 100%;
}
.card-img-top {
  height: 10vw;
  object-fit: cover;
}
.tab-title-class {
  color: blueviolet;
}
</style>
