<template>
  <v-app id="inspire">
    <v-navigation-drawer
      v-model="drawer"
      app
      dark
      class="secondary"
    >
    {{ /* dark regelt den dark mode, und stellt automatisch die Textfarbe auf hell */ }}
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="text-h6">
            Navgiation
          </v-list-item-title>
          <v-list-item-subtitle>
            Navigationsleiste
          </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

      <v-list
        dense
        nav
      >
        <v-list-item
          v-for="item in items"
          :key="item.title"
          :to="item.to"
          link
        >
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar 
    app
    dark
    class="primary">
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

      <v-toolbar-title>Softwareseminar IoT Front-End</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn text to='/login'>Login</v-btn>
    </v-app-bar>

    <v-main>
      <router-view></router-view>
    </v-main>

    <v-footer
    color="primary"
    dark
    padless
    app
  >
    <v-row
      justify="center"
      no-gutters
    >
      <v-btn
          v-for="icon in icons"
          :key="icon"
          class="mx-4 white--text"
          icon
      >
          <v-icon size="24px">
            {{ icon }}
          </v-icon>
        </v-btn>

      <v-col
        class="primary py-1 text-center white--text"
        cols="12"
      >
        {{ new Date().getFullYear() }} — <strong>Vuetify</strong>
      </v-col>
    </v-row>
  </v-footer>

  </v-app>
  
</template>

<script>
  export default {
    data: () => ({
      drawer: null,
      items: [
          { title: 'Startseite', icon: 'mdi-home', to: '/'},
          { title: 'Konfigurator', icon: 'mdi-view-dashboard', to: '/config'},
          { title: 'Über', icon: 'mdi-help-box', to: '/about'},
        ],
      icons: [
        'mdi-facebook',
        'mdi-twitter',
        'mdi-linkedin',
        'mdi-instagram',
      ],
      }),
  }
</script>
