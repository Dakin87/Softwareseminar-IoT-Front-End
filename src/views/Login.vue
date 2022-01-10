<template>
  <div>

    <v-content>
      <v-card class="elevation-6">
        <v-toolbar dark color="primary">
         <v-toolbar-title>Anmeldung</v-toolbar-title>
        </v-toolbar>
       <v-card-text>
         <form ref="form" @submit.prevent="login()">
            <v-text-field
             v-model="username"
             name="username"
             label="Benutzername"
             type="text"
             placeholder="Benutzername"
             required
           ></v-text-field>
                             
           <v-text-field
             v-model="password"
             name="password"
             label="Passwort"
             type="password"
             placeholder="Passwort"
             required
           ></v-text-field>
           <v-btn type="submit" class="mt-4" color="primary" value="log in">Login</v-btn>
           <v-btn type="submit" class="mt-4" color="primary" value="register" text to= "/register" >Registrierung</v-btn>
         </form>
        </v-card-text>
     </v-card>
    </v-content>

 </div>
  
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      username: "",
      password: "",
    };
  },
  methods: {
    login() {
      const { username } = this;
      console.log(username + "logged in")
    },
  },
};
</script>