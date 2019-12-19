<template>
  <div class="car-details container-fluid">
    <header class="row">
      <div class="col">
        <h1>Welcome to the Detailed Car Page</h1>
      </div>
    </header>
    <main class="row">
      <div class="col-8">
        <img class="car-img" :src="car.imgUrl" alt="car img" />
      </div>
      <div class="col-4 car-info">
        <h3>{{car.make}} {{car.model}}</h3>
        <p>{{car.year}}</p>
        <p>Price: ${{car.price}}</p>
        <p>{{car.description}}</p>
      </div>
    </main>
  </div>
</template>

<script>
export default {
  name: "CarDetails",
  mounted() {
    this.$store.dispatch("getCarById", this.$route.params.id);
  },
  computed: {
    car() {
      return this.$store.state.activeCar;
    }
  }
};
</script>

<style>
.car-img {
  height: 60vh;
  width: 65vw;
}
.car-info {
  display: flex;
  flex-direction: column;
  justify-content: center;
}
</style>
