import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

let _api = axios.create({
  baseURL: "//localhost:3000/api"
});

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    cars: [],
    activeCar: {},
    houses: [],
    activeHouse: {},
    jobs: [],
    activeJob: {}
  },
  mutations: {
    setAllCars(state, data) {
      state.cars = data;
    },
    addCar(state, car) {
      state.cars.push(car);
    },
    setActiveCar(state, car) {
      state.activeCar = car;
    },
    // Houses Functions
    setAllHouses(state, houseData) {
      state.houses = houseData;
    }
  },
  actions: {
    async getCars({ commit, dispatch }) {
      let res = await _api.get("cars");
      commit("setAllCars", res.data);
    },
    async getCarById({ commit, dispatch }, id) {
      let res = await _api.get("cars/" + id);
      commit("setActiveCar", res.data);
    },
    async createCar({ commit, dispatch }, car) {
      let res = await _api.post("cars", car);
      // dispatch("getAllCars"); //works but is a second call to the server
      commit("addCar", res.data);
    },

    async sold({ commit, dispatch }, id) {
      await _api.delete("cars/" + id);
      dispatch("getCars");
    },
    //House Functions
    async getHouses({ commit, dispatch }) {
      let res = await _api.get("houses");
      commit("setAllHouses", res.data);
    }

    // async createHouse({commit, dispatch}, house) {
    //   let res = await _api.post("houses", house);
    //   commit("")
    // }
  }
});
