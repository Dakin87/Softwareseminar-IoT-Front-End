import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';
import colors from 'vuetify/lib/util/colors'

Vue.use(Vuetify);

export default new Vuetify({
    theme: {
        themes: {
          light: {
            primary: colors.lightBlue.darken4, 
            secondary: colors.lightBlue.darken3,
            accent: colors.lightBlue.base,
            background: colors.grey.lighten3
          },
          dark: {
            primary: colors.blue.lighten3,
          },
        },
      },
});

