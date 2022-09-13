<template>
  <div>
    <v-alert v-if="isSuccess" dense text type="success" class="mb-2">
      Estudante cadastrado com sucesso!
    </v-alert>
    <v-row>
      <v-col cols="12">
        <v-btn to="/" color="orange darken-2" dark>
          <v-icon dark left>mdi-arrow-left</v-icon> Voltar
        </v-btn>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12">
        <student-form v-on:studentData="addStudent"></student-form>
      </v-col>
    </v-row>
  </div>
</template>
<script>
  import StudentForm from "../components/student/Form.vue"
  import StudentDataService from "../services/StudentDataService";
  export default {
    name: 'CreateStudent',
    data() {
      return {
        isSuccess: false
      }
    },
    components: {
      StudentForm
    },
    methods: {
      async addStudent(data) {
        await StudentDataService.create(data)
          .then(responde => {
            this.isSuccess = true;
            setTimeout(() => {
              this.isSuccess = false;
              this.$route.to("/");
            }, 2000);
          }).catch(e => {
            console.log(e);
          });
      }
    }
  }
</script>
