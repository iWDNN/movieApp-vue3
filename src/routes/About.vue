<template>
  <div class="about">
    <div class="photo">
      <img
        :src="image"
        alt="cat" />
      <Loader
        v-if="imageLoading"
        :size="1.5"
        absolute />
    </div>
    <div class="name">
      {{ name }}
    </div>
    <div> {{ email }}</div>
    <div> {{ blog }}</div>
    <div> {{ phone }}</div>
  </div>
</template>

<script>
import {mapState} from 'vuex'
import Loader from '~/components/Loader'

export default {
  data(){
    return{
      imageLoading:true
    }
  },
  components:{
    Loader
  },
  computed:{
    ...mapState('about',[
      'image',
      'name',
      'email',
      'phone',
      'blog'
    ])
  },
  mounted(){
    this.init()
  },
  methods:{
    async init(){
      await this.$loadImage(this.image)
      this.imageLoading=false
    }
  }
}
</script>

<style lang="scss" scoped>
.about{
  text-align: center;
  .photo{
    width:250px;
    height:250px;
    margin:40px auto 20px;
    padding:30px;
    border:1px solid $gray-200;
    border-radius: 50%;
    position:relative;
    img{
      border-radius: 50%;
      width:100%;
      height:100%;
    }
  }
  .name{
    font-family: 'Oswald',sans-serif;
    font-size:50px;
    margin-bottom:10px;
  }
}
</style>