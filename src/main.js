import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "normalize.css";
import "./fillters";
import "./directives";

Vue.config.productionTip = false;
//Make Bold Custom Directive => Global
/*Vue.directive('bold' , {
	bind: function(el){
		el.style.fontWeight = "bold";
	}

});*/


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
