<template>
  <div>
    <v-content>
      <v-card 
        width="500" 
        class="pa-3 mx-auto"
        elevation="7">
        <v-card-title class="justify-center">Anmeldung</v-card-title>
      
        <v-card-text>

          <v-form v-model="valid">
            <v-text-field
              v-model="name" 
              label="Benutzername" 
              prepend-icon="mdi-account"
              type="text"
              :rules="nameRules"
              required
              />
            <v-text-field 
              v-model="password"
              label="Passwort" 
              prepend-icon="mdi-lock" 
              :type="showPassword ? 'text' : 'password'"
              :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
              @click:append="showPassword=!showPassword"
              :rules="passwordRules"
              required
              />
          </v-form>
        
        </v-card-text>
        <v-spacer></v-spacer>
        <v-card-actions  class="justify-center">
         <v-btn color="primary" :disabled="!valid" to='/config'>Login</v-btn>
         <v-btn color="primary" to='/register'>Registrieren</v-btn>
        </v-card-actions>
      </v-card>
    </v-content>
  </div>

</template>

<script>
  export default {
    data: () =>
    ({
        valid: false,
        name: '',
        nameRules: [
          v => !!v || 'Es muss ein Benutzername eingetragen werden!'
        ],
        password: '',
        passwordRules: [
          v => !!v || 'Es muss ein Passwort eingetragen werden!'
        ],
        showPassword:false
            
      
    })
  }
</script>