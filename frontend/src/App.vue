<template>
  <v-app>
    <v-toolbar app>
      <v-toolbar-title class="headline text-uppercase text-center">
        <img class="ma-2" src="https://maisaedu.com.br/hubfs/site-grupo-a/logo-mais-a-educacao.svg" alt="">
      </v-toolbar-title>
    </v-toolbar>
    <v-main>
      <v-container>
        <v-row>
          <v-col cols="12">
            <router-view></router-view>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: 'App'
}
</script>
