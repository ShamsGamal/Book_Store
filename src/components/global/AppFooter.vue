<template>
  <div class="app-footer">
  <!-- Start Section Footer -->
  <div class="footer">
    <div class="container">
      <div class="row">
        
         <div class="col-lg-4 col-md-6">
           <h4>About Us</h4>
           <p>Nemo enim ipsam voluptatem quia voluptas sit
                        aspernatur aut odit aut fugit.</p>
           <p>Nemo enim ipsam voluptatem quia voluptas sit
                        aspernatur aut odit aut fugit, sed quia.</p>

         </div>

         <div class="col-lg-4 col-md-6">
          <h4>Services</h4>
          <ul class="list-unstyled foot-link">
            <li><a href="#">Blog</a></li>
            <li><a href="#">Menu</a></li>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Contact Us</a></li>
            <li><a href="#">FAQ</a></li>
            <li><a href="#">Services</a></li>
            <li><a href="#">Abou Start</a></li>
            <li><a href="#">Cooked</a></li>
             
            
          </ul>
        </div>



          <div class="col-lg-4 col-md-6 social-link ">
            <h4>Get Social</h4>
            <p>Nemo enim ipsam voluptatem quia voluptas sit
                        aspernatur aut odit aut fugit.</p>
            <ul class="list-unstyled list-inline wow slideInUp">
              <li>
                <a href="#"><i class="fa fa-facebook"></i></a>
              </li>
              <li>
                <a href="#"><i class="fa fa-twitter"></i></a>
              </li>
              <li>
                <a href="#"><i class="fa fa-linkedin"></i></a>
              </li>
              <li>
                <a href="#"><i class="fa fa-youtube"></i></a>
              </li>
              <li>
                <a href="#"><i class="fa fa-instagram"></i></a>
              </li>
              </ul>


</div>
</div>
  </div>

     <div class="copyright text-center">
          Copyright &copy;2020 All rights reserved | 
           
          <span>BOOKSTORE</span>
            
          
     </div>

  </div>


                      <!-- End Section Footer -->
  
      
   
  </div>
</template>
<script>
export default {
  name: "AppFooter"
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.footer {
  background-color: #333;
  padding-top: 10px;
  padding-bottom: 0px;
}
.footer h4 {
  font-size: 25px;
  color:#fff;
  margin-bottom: 18px;
  margin-top: 25px;
}
.footer p {
  color: #B5B5B5;
  line-height: 22px;
   margin-left: 3px;
   -webkit-transition:all 0.5s ease-in-out;
  -moz-transition:all 0.5s ease-in-out;
  -o-transition:all 0.5s ease-in-out;
  transition:all 0.5s ease-in-out;
}
.footer p:hover       { color:#DD3333; }
.footer .foot-link    { column-count:2; }
.footer .foot-link li { margin-bottom: 5px; }
.footer .foot-link a {
  text-decoration: none;
  color: #B5B5B5;
  margin-left: 3px;
  font-size: 15px;
  font-weight: bold;
  -webkit-transition:all 0.5s ease-in-out;
  -moz-transition:all 0.5s ease-in-out;
  -o-transition:all 0.5s ease-in-out;
  transition:all 0.5s ease-in-out;
}
.footer .foot-link a:hover { color:#DD3333; }
.footer .social-link ul li { display: inline-block; }
.footer .social-link ul li i {
  color: #B5B5B5;
  font-size: 25px;
  font-weight: bold;
  margin-top: 10px;
  margin-right: 15px;
  -webkit-transition:all 0.5s ease-in-out;
  -moz-transition:all 0.5s ease-in-out;
  -o-transition:all 0.5s ease-in-out;
  transition:all 0.5s ease-in-out;
}
.footer .social-link ul li i:hover { color:#FFF; }
.footer .copyright {
  background: #121618;
  color: #B5B5B5;
  padding: 15px 0px;
  margin-top: 15px;
  font-size: 18px;
}
.footer .copyright span {
  color:#DD3333;
  font-style: italic;
  letter-spacing: 3;
}
</style>