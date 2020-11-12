import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import axios from 'axios'
import VueAxios from 'vue-axios'
import { Message,Loading,Upload ,Dialog,Form,FormItem,Input,Checkbox,Button} from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import filter from './filter/filter'

import './assets/icons'

// global css
import './assets/styles/index.scss'

Vue.config.productionTip = false

//将axios挂载到vue
Vue.use(VueAxios,axios);
Vue.use(Upload);
Vue.use(Dialog);
Vue.use(Form);
Vue.use(FormItem);
Vue.use(Input);
Vue.use(Checkbox);
Vue.use(Button);

Vue.prototype.$message = Message;
Vue.prototype.$loading = Loading;

// 全局过滤器
Object.keys(filter).forEach(key => {
  Vue.filter(key, filter[key])
});
new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
