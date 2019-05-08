<template>
  <v-app>
    <v-toolbar app dark color="#5e0909" class="headline">
      <v-toolbar-title>
        <span>Budo</span>
        <span class="font-weight-light">Academy</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn
        flat
        to="/"
      >
      <v-icon>home</v-icon>
        <span class="mr-2">Home</span>
      </v-btn>
      <v-btn to="/database" flat>
      <v-icon>face</v-icon>
        Data Siswa
      </v-btn>
      <v-btn flat to='/register'>
      <v-icon>check_circle_outline</v-icon> 
        Register
      </v-btn>
    </v-toolbar>

    <v-content>
      <router-view></router-view>
    </v-content>
      <Footer />
  </v-app>
</template>

<script>

import Footer from './components/Footer.vue'

export default {
  name: 'App',
  components: {
    Footer
    
  },
  data () {
    return {
      //
    }
  }
}
</script>
