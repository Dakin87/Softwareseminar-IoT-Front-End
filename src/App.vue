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
              Navigation
            </v-list-item-title>
            <v-list-item-subtitle>
              MySmartHome
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
      src="SmartHome.jpg"
      height="100"
      >
        <template v-slot:img="{ props }">
          <v-img
            v-bind="props"
            gradient="to top right, rgba(19,84,122,.5), rgba(128,208,199,.8)"
          ></v-img>
        </template>

        <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
        <v-toolbar-title>MySmartHome</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-btn text to='/login'>Login</v-btn>
      </v-app-bar>

      <v-main>
        <router-view></router-view>
      </v-main>
      <v-footer
       color="rgb(1, 87, 155, 0.9)"
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
            text to="/about"
         >
            <v-icon size="24px">
              {{ icon }}
            </v-icon>
          </v-btn>
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
          { title: 'Impressum', icon: 'mdi-help-box', to: '/about'},
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
