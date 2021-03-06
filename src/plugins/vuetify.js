import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';
import '@fortawesome/fontawesome-free/css/all.css'
import 'material-design-icons-iconfont/dist/material-design-icons.css'
Vue.use(Vuetify);

export default new Vuetify({
    icons: {
        iconfont: 'fa' || 'md',  // 'mdi' || 'mdiSvg' || 'md' || 'fa' || 'fa4' || 'faSvg'
    },

    theme: {
        themes: {
            light: {
                admin: "#304156",
                admin2: "#1f2d3d"
            }
        }
    }
});
