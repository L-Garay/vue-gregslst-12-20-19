<template>
  <div class="home container-fluid">
    <div class="row">
      <div class="col-12">
        <h1>Welcome to the Home Page, enjoy the gifs...</h1>
      </div>
    </div>
    <div class="row gifs">
      <div class="card-columns">
        <div class="card">
          <img
            src="https://media.giphy.com/media/11EjiLDatd0syA/giphy.gif"
            class="card-img-top"
            alt="..."
          />
        </div>
        <div class="card">
          <img
            src="https://media.giphy.com/media/l3nSWRgDAparB8ad2/giphy.gif"
            class="card-img-top"
            alt="..."
          />
        </div>
        <div class="card">
          <img
            src="https://media.giphy.com/media/UVMyrH35t5qsmm0Isx/giphy.gif"
            class="card-img-top"
            alt="..."
          />
        </div>
        <div class="card">
          <img
            src="https://media.giphy.com/media/G2nSsMBCWGYpO/giphy.gif"
            class="card-img-top"
            alt="..."
          />
        </div>
        <div class="card">
          <img
            src="https://media.giphy.com/media/U2nN0ridM4lXy/giphy.gif"
            class="card-img-top"
            alt="..."
          />
        </div>
        <div class="card">
          <img
            src="https://media.giphy.com/media/8RuJ23GPbruW4/giphy.gif"
            class="card-img-top"
            alt="..."
          />
        </div>
        <div class="card">
          <img
            src="https://media.giphy.com/media/13UZisxBxkjPwI/giphy.gif"
            class="card-img-top"
            alt="..."
          />
        </div>
        <div class="card">
          <img
            src="https://media.giphy.com/media/4MwP0n2iPbkcM/giphy.gif"
            class="card-img-top"
            alt="https://media.giphy.com/media/aDS8SjVtS3Mwo/giphy.gif"
          />
        </div>
        <div class="card">
          <img
            src="https://media.giphy.com/media/ahZZZZFGLGhvq/giphy.gif"
            class="card-img-top"
            alt="..."
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "home",
  mounted() {
    //runs when the component is first put (mounted) on the dom
  },
  data() {},
  methods: {},
  computed: {},
  components: {}
};
</script>
<style>
h1 img {
  transform: rotate(180deg);
  height: 1em;
}
</style>

