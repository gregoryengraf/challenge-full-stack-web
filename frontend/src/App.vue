<template>
  <v-app>
    <v-toolbar app>
      <v-toolbar-title class="headline text-uppercase text-center">
        <span>+ A </span>
        <span class="font-weight-light">Educação</span>
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
