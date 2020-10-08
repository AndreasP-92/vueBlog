<template>
  <v-flex sm8 offset-sm2>

    <v-card>
      <v-form>
      <v-container>
        <v-toolbar dark>
          <v-spacer></v-spacer>
          <v-toolbar-title class="justify-center">Opdater Artikel</v-toolbar-title>
          <v-spacer></v-spacer>
        </v-toolbar>
          <v-text-field v-model="headline" required></v-text-field>
          <v-textarea v-model="text" required></v-textarea>
          <v-btn @click="edit">Opdater</v-btn>
          <v-btn @click="deleteArticle">Slet Artikel</v-btn>
      </v-container>
      </v-form>
    </v-card>
  </v-flex>
  
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      headline  : "",
      text      : ""
    };
  },
  async created() {
    fetch = (await this.$store.dispatch("getArticle",this.$route.params.id)).data;

    this.headline = fetch.headline
    this.text     = fetch.text
  },
  methods: {
// EDIT ARTICLE ================
      async edit() {
      try {
        let id        = this.$route.params.id;
        
        let payload   = { 
          'id'        : id,
          'text'      : this.text,
          'headline'  : this.headline
          }
        
        this.$store.dispatch('updateArticle', payload);
        
      } catch (error) {
        console.error(error);
      }
      // location.reload();
    },
// DELETE ARTICLE ================
    async deleteArticle() {
      try {
        let id        = this.$route.params.id;
        
        let payload   = { 
          'id'        : id,
          }
        
        this.$store.dispatch('deleteArticle', payload);
        
      } catch (error) {
        console.error(error);
      }
      window.location.replace("/");
    },
  }
};
</script>