<template>
  <b-card
    :title="ingredient.name"
    :img-src="url"
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
      image_load: false,
      url:""
    };
  },
  props: {
    ingredient: {
      type: Object,
      required: true
    }
  },
  mounted(){
    this.updateImage()
  },
  methods:{
    updateImage(){
      let name =this.ingredient.image
      this.url = "https://spoonacular.com/cdn/ingredients_100x100/"+ this.ingredient.image;
      console.log(this.url);

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

.card-title{
  font-size: 20px;
}
.card-img-top {
  width: 100%;
  height: 60%;
  object-fit: cover;
}

</style>
