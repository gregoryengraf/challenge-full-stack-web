<template>
  <div>
    <v-row>
      <v-col cols="12" class="text-right">
        <v-btn to="/create-student" color="blue light" outlined dark>
          <v-icon dark left>mdi-plus</v-icon> estudante
        </v-btn>
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
        <tr v-for="student in students" :key="student.id">
          <td>{{ student.name }}</td>
          <td>{{ student.email }}</td>
          <td>{{ student.cpf }}</td>
          <td>{{ student.ra }}</td>
          <td class="text-right">
            <v-btn class="ma-2" color="blue" icon="mdi-pencil"></v-btn>
            <v-btn class="ma-2" color="red" icon="mdi-delete"></v-btn>
          </td>
        </tr>
      </tbody>
    </v-table>
  </div>
</template>

<script>
  import StudentDataService from "../services/StudentDataService";

  export default {
    name: 'ViewStudent',
    data() {
      return {
        students: []
      }
    },
    methods: {
      async getStudents() {
        await StudentDataService.getAll()
          .then(response => {
            this.students = response.data
          })
          .catch(e => {
            console.log(e);
          });
      }
    },
    mounted() {
      this.getStudents()
    },
  };
</script>
