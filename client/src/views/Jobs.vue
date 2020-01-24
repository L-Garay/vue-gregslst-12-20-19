<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-12">
        <h3>Jobs go here, you go there</h3>
      </div>
      <div class="col-12">
        <div class="row">
          <div class="col-3" v-for="job in jobs" :key="job.id">
            <job-component :jobData="job" />
          </div>
          {{jobs}}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import JobComponent from "@/components/Job";
export default {
  name: "Jobs",
  mounted() {
    this.$store.dispatch("getJobs");
  },
  data() {
    return {
      newJob: {
        title: "",
        company: "",
        salary: 0,
        type: "",
        description: ""
      }
    };
  },
  computed: {
    jobs() {
      return this.$store.state.jobs;
    }
  },
  components: {
    JobComponent
  }
};
</script>

<style></style>
