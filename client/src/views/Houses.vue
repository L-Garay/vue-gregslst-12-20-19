<template>
  <div class="home container-fluid">
    <header class="row">
      <div class="col">
        <h1>Find Your Forever House</h1>
      </div>
    </header>
    <main class="row search">
      <div class="col-12">
        <form @submit.prevent="createHouse">
          Year Built:
          <input required type="number" v-model="newHouse.year" placeholder="Year Built" />
          Style:
          <input required type="text" v-model="newHouse.style" placeholder="Style" />
          Price:
          <input
            required
            type="number"
            v-model="newHouse.price"
            placeholder="price"
          />
          Bedrooms:
          <input
            required
            type="number"
            v-model="newHouse.bedrooms"
            placeholder="Bedrooms"
          />
          Image of House (url):
          <input
            required
            type="text"
            v-model="newHouse.imgUrl"
            placeholder="imgUrl"
          />
          Number of Bathrooms:
          <input
            required
            type="number"
            v-model="newHouse.bathrooms"
            placeholder="bathrooms"
          />
          Number of Garage spots:
          <input
            required
            type="number"
            v-model="newHouse.garages"
            placeholder="garges"
          />
          <button class="btn btn-success" type="submit">Add House</button>
        </form>
      </div>
      <div class="col-12">
        <div class="row houses pt-3">
          <div class="col-4" v-for="house in getHouses" :key="house.id">
            <!-- Props are data passed from parent to child with :propName="DATA" -->
            <house-component :houseData="house" />
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import HouseComponent from "@/components/House";
export default {
  name: "houses",
  mounted() {
    //runs when the component is first put (mounted) on the dom
    this.$store.dispatch("getHouses");
  },
  data() {
    return {
      newHouse: {
        year: 0,
        style: "",
        price: 0,
        bedrooms: 0,
        imgUrl: "",
        bathrooms: "",
        garages: 0
      }
    };
  },
  methods: {
    createHouse() {
      let house = { ...this.newHouse }; //NOTE makes a copy of the house data object
      this.$store.dispatch("createHouse", house);
      this.newHouse = {
        year: 0,
        style: "",
        price: 0,
        bedrooms: 0,
        imgUrl: "",
        bathrooms: "",
        garages: 0
      };
    }
  },
  computed: {
    getHouses() {
      return this.$store.state.houses;
    }
  },
  components: {
    HouseComponent
  }
};
</script>
<style>
</style>