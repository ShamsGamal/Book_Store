import Vue from "vue";
///////////////////////////////////////
//Make Dynamic Size
Vue.directive('font' , {
	bind: function(el , binding){
		el.style.fontSize = binding.value + 'px';
	}

});