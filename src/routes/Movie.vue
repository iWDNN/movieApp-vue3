<template>
  <h1>Movie!</h1>
</template>
<script>
export default {
  cretaed(){
    this.$store.dispatch('movie/searchMovieWithId',{
      id:this.$route.params.id
    })
  }
}
</script>