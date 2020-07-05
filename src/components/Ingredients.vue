<template>
  <b-card
    :title="ingredient.name"
    :img-src="ingredient.image"
    img-alt="Image"
    img-top
    tag="article"
    
  >
    <b-card-text>
      {{ingredient.amount.metric.value}}
      {{ingredient.amount.metric.unit}}
    </b-card-text>
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
.card{
  width: 190px;
  height: 250px;
   border-style:none;
  background-color: #fee6c2;
  margin-top: 40px;
}
.img {
  width: 100%;
}
.card-title{
  font-size: 20px;
}
.card-img-top {
  width: 100%;
  height: 60%;
  object-fit: cover;
}

</style>
