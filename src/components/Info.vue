<template>
<div class="pt-4 ml-5 mb-5">
    <div class="mb-5">
        <span title="GitHub Project URL">
          <v-icon class="mr-1 mt-n1" color="purple">mdi-github</v-icon>
          <a href="http://github.com/nteclabs" target="_blank">http://github.com/nteclabs</a>
        </span>
        <span class="ml-5" title="Project Preview URL">
          <v-icon class="mr-1 mt-n1" title="Project URL" color="purple">mdi-link</v-icon>
          <a href="https://nteclabs.com/" target="_blank">https://nteclabs.com/</a>
        </span>
        <span class="ml-5" title="fotiecodes, dilanlongla, joeltanto, bennethtefo">
          <v-icon class="mr-1 mt-n1" color="purple">mdi-account-multiple-outline</v-icon>
          <a href="#">Stakeholders(3)</a>
        </span>
        <span class="ml-5" title="Projects you've been assigned to">
          <v-icon class="mr-1 mt-n1" color="purple">mdi-account-multiple-plus</v-icon>
          <a href="#">Projects({{projects.length}})</a>
        </span>
      </div>
      </div>
</template>

<style scoped>

</style>

<script>
export default ({
  data() {
    return {
      projects:{}
    };
  },
 methods: {
    async get_data() {
      try {
        const response = await axios.get(
          "http://localhost:8000/api/AdminProjects",
          {
          headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer '+this.$store.state.token
          }   
          }
        );

        this.projects = response["data"]["data"];
      } catch (e) {
        console.log((e));
      }
    },
  },
  computed : {
      isLoggedIn : function(){ return this.$store.getters.isLoggedIn}
    },

  mounted() {
    setInterval(() => {
      this.get_data();
    }, 5000);
  }
})
</script>



