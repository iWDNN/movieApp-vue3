<template>
  <div class="nav">
    <div
      v-for="nav in navigations"
      :key="nav.name"
      class="nav-item">
      <Router-link
        :to="nav.href"
        active-class="active"
        class="nav-link">
        {{ nav.name }}
      </Router-link>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      navigations:[
        {
          name:'Search',
          href:'/'
        },
        {
          name:'Movie',
          href:'/movie'
        },
        {
          name:'About',
          href:'/about'
        },
      ]
    }
  }
}
</script>