<template>
  <v-flex sm8 offset-sm2>
    <v-card>
      <v-toolbar dark>
        <v-toolbar-title>Artkler</v-toolbar-title>
      </v-toolbar>
      <v-list>
        <v-list-tile v-for="(message, index) in $store.state.articles" :to="'message/' + index">
          <v-list-tile-content>
            <v-list-tile-title v-text="message"></v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-card>
  </v-flex>
</template>
<script>

export default {
// GET ARTICLES =========
  async created() {
    this.$store.dispatch('getArticles');
  }
};
</script>