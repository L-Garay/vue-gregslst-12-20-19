<template>
  <div class="Job">
    <h5>{{jobData.Title}} at {{jobData.Company}}</h5>
    <p>{{jobData.Description}}</p>
  </div>
</template>

<script>
export default {
  name: "Job",
  props: ["jobData"]
};
</script>

<style>
.job {
}
</style>