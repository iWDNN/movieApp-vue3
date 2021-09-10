<template>
  <Router-link
    to="/"
    class="logo">
    <span>OMDbAPI</span>.COM
  </Router-link>
</template>

<style lang="scss" scoped>
  .logo{
    font-family: "Oswald",sans-serif;
    font-size:20px;
    color:$black;
    text-decoration: none;
    &:hover{
      color:$black;
    }
    span{
      color:$primary;
    }
  }
</style>