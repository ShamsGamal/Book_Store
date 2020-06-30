<template>
 <div class="app-header">
    <div class="container">
       <div class="logo">

         <img src="../../assets/BS-logo.png" alt="logo-img" class="logo-img">
         <span class="logo-acro">BS</span>
         <div class="logo-name">BOOK<span style="color:#333;font-weight:bold">STORE</span></div>
         </div>
    <ul>
      <router-link to="/" tag="li" exact>
        <a>HOME</a>
        </router-link> 
        <router-link to="/blog" tag="li">
        <a>BLOGS</a>
        </router-link> 
       <router-link to="/startup" tag="li">
        <a>STARTUP</a>
        </router-link> 
       <router-link to="/tips" tag="li">
        <a>TIPS</a>
        </router-link> 
      <router-link to="/about" tag="li">
       <a>ABOUT</a>
       </router-link> 
      <router-link to="/contact" tag="li">
       <a>CONTACT</a>
       </router-link>
     
    </ul>
  </div>
 </div>
</template>

<script>
export default {
  name: "AppHeader"
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
* {
	margin: 0;
	padding: 0;
	box-sizing: border-box;
}
.app-header {
	background-color: #DD3333;
	color:#fff;
	overflow:hidden;
}
.logo {
	float:left;
}
.logo-img {
margin: -5px;
margin-top: -27px; 
	 
}
.logo-acro {
 font-size:50px;
 color:#333;
}
.logo-name {
 letter-spacing: .8px;
 margin-top: -15px;
 margin-left: 2px;
}
ul {
	list-style: none;
	margin:0;
   //float:left;
}
li {
	display: inline-block;
	padding: 30px;
}
a {
	text-decoration : none;
	color:#fff;
	font-size: 18px;
}

a:hover {
  text-decoration : none;
  color: #333;
}

</style>