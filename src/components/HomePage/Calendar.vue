<template>
    <div class="mt-3">
        <v-date-picker
        width="360"
        v-model="date"
        :event-color="date => date[9] % 2 ? 'red' : 'yellow'"
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
    }),

     methods: {
      functionEvents (date) {
        const [,, day] = date.split('-')
        if ([12, 17, 28].includes(parseInt(day, 10))) return true
        if ([1, 19, 22].includes(parseInt(day, 10))) return ['red', '#00f']
        return false
      },
       get_data(){

      axios.get('http://localhost:8001/api/AdminProjects').then( (response) =>{

        console.log(response['data']['data'])

         this.projects = response['data']['data']

         return this.projects

      })

    }
    },
     mounted(){
    this.get_data()
  },
  }
</script>