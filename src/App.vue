<template>
  <div id="app" >
    <v-toolbar color="teal darken-4">
      <v-container>
        <v-row align="center" justify="center">
          <v-col align="center" justify="center" class="text-center">
            <v-toolbar-title @click="takeHome">Coda Hacked Recipe</v-toolbar-title>
            <!-- <v-spacer></v-spacer> -->
          </v-col>
        </v-row>
      </v-container>
    </v-toolbar>
    <v-app>
    <router-view/>
    </v-app>
  </div>
</template>

<script>
  import { mapActions } from 'vuex';
  export default {
    created() {
      this.setRecipe();
    },
    methods: {
          ...mapActions([
            'setRecipe']),
            takeHome() {
                this.$router.push('/')
              }
        },
        
  }
</script>

<style>
</style>