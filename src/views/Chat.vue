<template>
<div id="chat">
</div>
    
</template>
<script>

export default ({

  data(){
    return{
      chatContainer:"",
    }
  },
    methods:{
    async chat() {
    await axios.get("http://localhost:8000/api/chatify",
         {
          headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer '+this.$store.state.token,
            // 'Access-Control-Expose-Headers': 'Access-Token, Uid',
          }   
          }
          ).then( (response) =>{
            console.log(response)
            this.chatContainer=response.data
            console.log(document.querySelector("#chat"));
            let boxContainer = document.querySelector("#chat")
            boxContainer.innerHTML =response.data
            console.log("chatify")
      }).catch(error =>{
          console.log(error)
      }).finally(()=>{
          console.log("done")
      })
    },

    },

    mounted() {
      //    axios.get("http://localhost:8000/chatify",
      //    {
      //     headers: {
      //       'Content-Type': 'text/html',
      //       'Authorization': 'Bearer '+this.$store.state.token,
      //       'Access-Control-Expose-Headers': 'Access-Token, Uid',
      //     }   
      //     }
      //     ).then( (response) =>{
      //       console.log(response)
      // }).catch(error =>{
      //     console.log(error)
      // }).finally(()=>{
      //     console.log("done")
      // })

this.chat()
       
    },
})
</script>
