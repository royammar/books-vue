<template >
   <section >
    <ul v-if="books" class="books-container">
      <router-link v-for="book in books" :key="book.id" :to="`/book/${book.id}`">
       <BookPreview :book="book" />
      </router-link>
    </ul>
  </section>
</template>

<script>
import BookPreview from './BookPreview'
export default {
props:["books"],
components:{
    BookPreview
}
}
</script>

<style>

.books-container{
    display: grid;
    gap: 10px;
    grid-template-columns: repeat(auto-fill,minmax(300px,1fr));
    grid-auto-rows: 500px;
    align-items: center;
    justify-content: center;
}
</style>