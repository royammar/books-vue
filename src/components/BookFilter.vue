<template>
 <div class="search">
<span>Search:</span>
<input type="txt" v-model="filterBy.title" placeholder="Book title">
<input type="number" v-model="filterBy.fromPrice" placeholder="From Price">
<input type="number" v-model="filterBy.toPrice" placeholder="To Price">
<button v-on:click="onFilter">Search</button>
  </div>
</template>

<script>
export default {
data(){
    return{
        filterBy:{title:"",
        fromPrice:0,
        toPrice:Infinity
        }
    }
},
 methods: {
    onFilter() {
      this.$emit("filtered", {... this.filterBy});
    }}
}
</script>

<style>

</style>