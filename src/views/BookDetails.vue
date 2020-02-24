<template>
  <section v-if="book">
    <span>Title</span>
    <div>{{publishedDate}}</div>
    <div>Pages: {{book.pageCount}} - {{pageCount}}</div>
    <div class="book-title">{{book.title}}</div>
    <img class="book-img" :src="book.thumbnail" />
    <div class="book-title">{{book.description}}</div>
    <div v-bind:class="getPriceColor()">Price {{book.listPrice.amount}}</div>
  </section>
</template>

<script>
import BookService from "../../services/BookService";
export default {
  data() {
    return {
      book: null,
    };
  },

  methods: {
    async getBook() {
      const bookId = this.$route.params.id;
      this.book = await BookService.getById(bookId);
    },
      getPriceColor() {
      if (this.book.listPrice.amount > 150) return "red";
      else if (this.book.listPrice.amount < 20) return "green";
    }
  },

  async created() {
    await this.getBook();
  },
  computed: {
    pageCount() {
      switch (true) {
        case this.book.pageCount > 500:
          return "Long reading";
          break;
        case this.book.pageCount > 200:
          return "Decent Reading";
          break;
        case this.book.pageCount < 100:
          return "Light Reading";
          break;
        default:
          break;
      }
    },
    publishedDate() {
      if (2020 - this.book.publishedDate > 10) return "Veteran Book";
      else if (2020 - this.book.publishedDate < 1) return "New!";
    },
  
  }
};
</script>

<style>
.red {
  color: red;
}
.green {
  color: green;
}
</style>