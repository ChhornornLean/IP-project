<template>
  <div class="">
    <div class="">
      <router-view/>
    </div>
  </div>
</template>

<script>
export default {
  methods:{
    logout(){
      this.$store.commit('setToken');
      this.$router.push('/login')
    }
  }
}
</script>