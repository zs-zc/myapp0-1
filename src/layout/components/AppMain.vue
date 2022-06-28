<template>
  <div>
    <transition> <router-view :key="key" /> </transition>
  </div>
</template>

<script>
export default {
    mounted:{
        key(){
            return this.$route.path
        }

    }
};
</script>

<style>
</style>