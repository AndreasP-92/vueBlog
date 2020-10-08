<template>
<!-- ============ NAVIGATION ======== -->
  <v-app>
    <v-toolbar app>
      <v-btn flat to="/">Alle Artikler</v-btn>
      <v-btn flat to="/NewArticle">Ny Artikkel</v-btn>
      <v-spacer />
      <v-btn flat to="/Register">Registrer</v-btn>
      <v-btn flat>Login</v-btn>
    </v-toolbar>

    <v-content>
      <br>
      <router-view />
    </v-content>
  </v-app>
  
</template>
<script>
alert("test")
</script>
<script>
import Articles from './components/Articles'
import NewMessage from './components/NewArticle'


export default {
  name: 'App',
  components: {

  },
  data () {
    return {
  
    }
  }
}
</script>
