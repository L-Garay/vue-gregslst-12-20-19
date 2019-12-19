<template>
  <div class="home container-fluid">
    <h2>THis is the home page</h2>
  </div>
</template>

<script>
import CarComponent from "@/components/Car";
export default {
  name: "home",
  mounted() {
    //runs when the component is first put (mounted) on the dom
    this.$store.dispatch("getCars");
  },
  data() {
    return {
      newCar: {
        make: "",
        model: "",
        price: 0,
        year: 0,
        imgUrl: "",
        description: ""
      }
    };
  },
  methods: {
    createCar() {
      let car = { ...this.newCar }; //NOTE makes a copy of the car data object
      this.$store.dispatch("createCar", car);
      this.newCar = {
        make: "",
        model: "",
        price: 0,
        year: 0,
        imgUrl: "",
        description: ""
      };
    }
  },
  computed: {
    cars() {
      return this.$store.state.cars;
    },
    unsoldCars() {
      this.cars.filter(c => !car.sold);
    }
  },
  components: {
    CarComponent
  }
};
</script>
<style>
h1 img {
  transform: rotate(180deg);
  height: 1em;
}
</style>
