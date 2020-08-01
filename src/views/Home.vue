<template>
  <div class="home">
    <v-container>
      <v-row align="center" justify="center">
        <v-text-field @click:append="search()" append-icon="mdi-magnify" v-model="searchName" label="Search" solo >
        </v-text-field>
      </v-row>
      <v-row wrap align="center" justify="center">
        <v-col class="mr-2" v-for="rec in recipes" :key="rec.id ">
          <v-card v-on:click="show(rec.id)" class="mx-auto" max-width="400">
            <v-img class="white--text align-end" height="200px" :src="rec.image" lazy-src="https://picsum.photos/id/11/100/60">
              <template v-slot:placeholder>
                <v-row class="fill-height ma-0" align="center" justify="center">
                  <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
                </v-row>
              </template>
            </v-img>
            <v-card-title>
              {{ rec.name }}
            </v-card-title>
            <v-card-text class="text--primary">
              <div>$ {{rec.price}}</div>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>

</template>

<script>
  import { mapActions, mapGetters } from 'vuex';
  // import Modal from '../components/modal.vue'
  import axios from 'axios';
  export default {
    name: 'Home',
    // components: {'ModalComp': Modal},
    data: () => {
      return {
        recipes: [],
        dialog: false,
        modal_id: 0,
        searchName: "",
        modal: {recipe: {}}
      }
    },
    computed: {
      ...mapGetters(['getRecipes', 'getRecipeById'])
    },
    created() {
      this.getData();
    },
    methods: {
      ...mapActions([
        'setRecipe']),
      show(id) {
        this.$router.push(`${id}`);
      },
      async getData() {
        try {
          const resp = await axios.get(`http://starlord.hackerearth.com/recipe`);
          // console.log(resp.data);
          this.recipes = resp.data;
          this.setRecipe(resp.data);
        } catch (e) {
          console.error(e);
        }
      },

      search() {
        console.log(this)
        this.recipes =
          this.getRecipes.filter(rec => rec.name.toLowerCase().includes(this.searchName.toLowerCase()));
      }
    }
  }

</script>