<template>
  <div>
    <v-row>
      <v-col cols="10">
        <v-text-field>
          <v-icon icon="mdi-magnify"></v-icon>
        </v-text-field>
      </v-col>
      <v-col cols="2">
        <v-btn class="ma-2" color="green" icon="mdi-plus"></v-btn>
      </v-col>
    </v-row>
    <v-table>
      <thead>
        <tr>
          <th class="text-left">Nome</th>
          <th class="text-left">Email</th>
          <th class="text-left">CPF</th>
          <th class="text-left">RA</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Jose</td>
          <td>jose@teste.com</td>
          <td>23423423</td>
          <td>SDF34</td>
          <td>
            <div>
              <v-btn class="ma-2" color="blue" icon="mdi-pencil"></v-btn>
              <v-btn class="ma-2" color="red" icon="mdi-delete"></v-btn>
            </div>
          </td>
        </tr>
      </tbody>
    </v-table>
  </div>
</template>

<script>
export default {
  name: 'ViewStudent',
};
</script>
