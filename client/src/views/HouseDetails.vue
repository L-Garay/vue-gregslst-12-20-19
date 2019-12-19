<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-12">
        <img class="house-img" :src="house.imgUrl" alt="house image" />
      </div>
    </div>
    <div class="row">
      <div class="col-12 house-info">
        <h3>Year Built: {{house.year}} | Asking Price: {{house.price}}</h3>
        <p>
          <b>It has {{house.bedrooms}} Bedrooms and {{house.bathrooms}} Bathrooms along with {{house.garages}} garage slots.</b>
        </p>
        <p class="special">It is a {{house.style}} style home.</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HouseDetails",
  mounted() {
    this.$store.dispatch("getHouseById", this.$route.params.id);
  },
  computed: {
    house() {
      return this.$store.state.activeHouse;
    }
  }
};
</script>

<style>
.special {
  font-size: smaller;
  color: grey;
}
.house-img {
  height: 65vh;
  width: 80vw;
}
.house-info {
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 30vh;
}
</style>