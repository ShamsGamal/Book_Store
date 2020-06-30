import Vue from "vue";
////////////////////////////////////////////////////
//Make upperCase
Vue.filter('uppercase' , function(v) {
    return v.toUpperCase();
});
///////////////////////////////////////////////////
//Shorten Text
Vue.filter('shorten' , function(value , textLenght) {
    return value.substring(0,textLenght) + "         " + "...";
});
///////////////////////////////////////////////////