<template>
  <div>
    <v-content>
      <v-card 
        width="500" 
        class="pa-3 mx-auto"
        elevation="7">
        <v-card-title class="justify-center">Registrierung</v-card-title>
      
        <v-card-text>

          <v-form v-model="valid">
            <v-text-field
              v-model="Vorname" 
              label="Vorname" 
              prepend-icon="mdi-account"
              type="text"
              :rules="VornameRules"
              required
              />
            <v-text-field
              v-model="Nachname" 
              label="Nachname" 
              prepend-icon="mdi-account"
              type="text"
              :rules="NachnameRules"
              required
              /> 
            <v-text-field
              v-model="Mail" 
              label="E-Mail" 
              prepend-icon="mdi-at"
              type="text"
              :rules="MailRules"
              required
              />
            <v-text-field
              v-model="Benutzername" 
              label="Benutzername" 
              prepend-icon="mdi-account"
              type="text"
              :rules="BenutzernameRules"
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
            <v-text-field 
              v-model="password2"
              label="Passwort wiederholen" 
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
         <v-btn color="primary" to='/login'>Login</v-btn>
         <v-btn color="primary" :disabled="!valid" to='/config'>Registrieren</v-btn>
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
        Vorname: '',
        VornameRules: [
          v => !!v || 'Es muss ein Vorname eingetragen werden!'
        ],
        Nachname: '',
        NachnameRules: [
          v => !!v || 'Es muss ein Nachname eingetragen werden!'
        ],
        Mail: '',
        MailRules: [
          v => !!v || 'Es muss eine E-Mail Adresse eingetragen werden!'
        ],
        Benutzername: '',
        BenutzernameRules: [
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