<template>
  <section class="container">
      <BookFilter @filtered="setFilter"/>
    <BookList :books="BooksToShow" />
  </section>
</template>



<script>
import BookService from "../../services/BookService";
import BookList from "../components/BookList";
import BookFilter from "../components/BookFilter"

export default {
  data() {
    return {
      books: [],
      filterBy: { title:"",
        fromPrice:0,
        toPrice:Infinity}
    };
  },
  methods: {
    setFilter(filterBy) {
      this.filterBy = filterBy;
    }
  },
  computed: {
    BooksToShow() {
      return this.books.filter(book =>
        book.title.toLowerCase().includes(this.filterBy.title) && book.listPrice.amount>this.filterBy.fromPrice && book.listPrice.amount<this.filterBy.toPrice
      );
    }
  },

  async created() {
    this.books = await BookService.get();
  },

  components: {
    BookList,
    BookFilter  
  }
};
</script>

<style>
</style>