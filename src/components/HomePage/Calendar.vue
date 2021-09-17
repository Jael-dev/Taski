<template>
    <div class="mt-3">
        <v-date-picker
        width="360"
        v-model="date"
        :event-color="{
generator
        }"
        :events="functionEvents"
        color="#A544B9"
        scrollable
        class="rounded-xl"
      ></v-date-picker>
    </div>
</template>

<script>
  export default {
    data: () => ({
      projects : "",
      date: (new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10),
      mycolor: '#'+(Math.random()*0xFFFFFF<<0).toString(16)
    }),

     methods: {
      functionEvents (date) {
        const [,, day] = date.split('-')

        if ([12, 17, 28].includes(parseInt(day, 10))) return [this.generator(), this.generator()]
        if ([1, 19, 22].includes(parseInt(day, 10))) return [this.generator(), this.generator()]

        return false
      },
       get_data(){

      axios.get('http://localhost:8001/api/AdminProjects',
       {
          headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer '+this.$store.state.token
          }   
          }).then( (response) =>{

        console.log(response['data']['data'])

         this.projects = response['data']['data']

         return this.projects

      })
    },
    generator(){
        this.mycolor = '#'+(Math.random()*0xFFFFFF<<0).toString(16);
        return this.mycolor;
      
    },
     },
     mounted(){
    this.get_data()
    this.generator()
  },
  }
</script>