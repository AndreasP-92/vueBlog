<template>
  <v-flex sm8 offset-sm2>
    <v-card>
      <v-toolbar dark>
        <v-toolbar-title>New Message</v-toolbar-title>
      </v-toolbar>
        <v-form>
          <v-container>
            <v-layout>
              <v-flex xs12 md4>
                <v-text-field v-model="Headline" label="Overskrift" required></v-text-field>
                <v-textarea v-model="Text" label="Tekst" required></v-textarea>
                <!-- <textarea v-model="Text" name="text" rows="10" class="form-control" id="article_description" aria-describedby="descriptionHelp" placeholder=""></textarea> -->
              </v-flex>
            </v-layout>
          </v-container>
            <v-btn @click="submit">Opret</v-btn>
        </v-form>
    </v-card>
  </v-flex>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      Headline: "",
      Text: ""
    };
  },
  beforeCreate: function () {
  // this.$options.components.TreeFolderContents = require('../plugins/test').default
  },
  methods: {
// CREATE ARTICLE ===============
      async submit() {
        try {
          var payload = { 'headline': this.Headline, 'text': this.Text }
          this.$store.dispatch('newArticle', payload);
          
        } catch (error) {
          console.error(error);
        }
      },
  },
};
</script>