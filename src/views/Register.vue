<template>
    <v-content>
      <v-card width="500" class="mx-auto mt-9">
        <v-card-title>Registrierung</v-card-title>
        <v-card-text>
          <v-text-field label="Vorname" prepend-icon="mdi-account-circle"/>
          <v-text-field label="Nachname" prepend-icon="mdi-account-circle"/>
          <v-text-field label="E-Mail" prepend-icon="mdi-at"/>
          <v-text-field label="Benutzername" prepend-icon="mdi-account-circle"/>
          <v-text-field 
          label="Passwort" 
          :type="showPassword ? 'text' : 'password'"
          prepend-icon="mdi-lock"
          :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
          @click:append="showPassword = !showPassword"/>
        </v-card-text>

        <v-divider></v-divider>
        <v-card-actions>     
          <v-btn  color="success">Registrieren</v-btn>
          <v-btn color="info" text t0 = '/login' >Login</v-btn>     
        </v-card-actions>
      </v-card>
    </v-content>

</template>

<script>
export default {
  data()
  {
    return{
      showPassword:false
    }
  }
}
</script>