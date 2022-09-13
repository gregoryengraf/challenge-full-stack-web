<template>
  <v-form ref="form" v-model="valid" lazy-validation>
    <v-row>
      <v-col cols="12" md="6">
        <v-text-field
          v-model="name"
          :rules="nameRules"
          label="Nome"
          required
        ></v-text-field>
      </v-col>
      <v-col cols="12" md="6">
        <v-text-field
          v-model="email"
          :rules="emailRules"
          label="Email"
          required
        ></v-text-field>
      </v-col>
      <v-col cols="12" md="6">
        <v-text-field
          v-model="cpf"
          :rules="cpfRules"
          :counter="11"
          label="CPF"
          required
        ></v-text-field>
      </v-col>
      <v-col cols="12" md="6">
        <v-text-field
          v-model="ra"
          :rules="raRules"
          label="RA"
          required
        ></v-text-field>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12" class="text-right">
        <v-btn color="red darken-2 mr-2" dark to="/">Cancelar</v-btn>
        <v-btn color="blue darken-2" dark @click="sendForm">Salvar</v-btn>
      </v-col>
    </v-row>
  </v-form>
</template>
<script>
  export default {
    name: 'StudentForm',
    data() {
      return {
        load: false,
        valid: true,
        name: '',
        email: '',
        cpf: '',
        ra: '',
        nameRules: [
          v => !!v || 'Nome é obrigatório'
        ],
        raRules: [
          v => !!v || 'RA é obrigatório'
        ],
        cpfRules: [
          v => !!v || 'CPF é obrigatório',
          v => v.length === 11 || 'Deve conter 11 caractéres',
        ],
        emailRules: [
          v => !!v || 'E-mail é obrigatório',
          v => /.+@.+/.test(v) || 'E-mail deve ser válido',
        ],
      }
    },
    methods: {
      sendForm(){
        this.$refs.form.validate()
        if (this.valid) {
          this.$emit('student-data', {
            name: this.name,
            email: this.email,
            cpf: this.cpf,
            ra: this.ra
          })
        }
      }
    }
  }
</script>
