<template>
  <div id="app" class="container-fluid">
    <div class="row header">
      <div class="col-6 d-flex align-items-center">
        <router-link class="color" :to="{ name: 'home' }">
          <h3>Home</h3>
        </router-link>
      </div>
      <div class="col-6 d-flex justify-content-end align-items-center">
        <div class="p-3">
          <router-link class="color" :to="{ name: 'cars' }">Cars</router-link>
        </div>
        <div class="p-3">
          <router-link class="color" :to="{ name: 'houses' }">Houses</router-link>
        </div>
        <div class="p-3">
          <router-link class="color" :to="{ name: 'Jobs' }">Jobs</router-link>
        </div>
      </div>
    </div>
    <router-view />
  </div>
</template>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.header {
  background-color: skyblue;
}
.color {
  color: white;
}
.color:hover {
  color: black;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
