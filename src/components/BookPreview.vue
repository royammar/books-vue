<template>
<section v-if="book">
<div class="book-title">{{book.title}}</div>
<img class="book-img" :src="book.thumbnail">
<!-- <div class="book-title">{{book.title}}</div>
<div class="book-title">{{book.title}}</div> -->

</section>
  </template>

<script>
export default {
props:["book"],
}
</script>

<style>
.book-img{
    height: 400px;
}
</style>