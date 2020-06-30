<template>
  <div class="contact">
     <div class="container">
     <h1>{{ pageName }}</h1>
    <p class="disc">{{ pageDescribtion }}</p>
     </div>
     <!-- Start Section Contact & Map -->
      <section class="contact-us">
        <div class="container">
          <h3 class="text-center">Send Us Message</h3>
           
          <div class="row">
                
                 
            <div class="col-md-6 col-xs-12">

              <form class="role" method="post">


                <div class="field form-group">      
                        <input type="text" class="form-control input-lg" placeholder="Username">
                        </div>

                        <div class="field form-group">
                        <input type="text" class="form-control input-lg" placeholder="Email">
                        </div>

                        <div class="field form-group">
                        <input type="text" class="form-control input-lg" placeholder="Cell Phone">
                        </div>


                        <div class="field form-group">
                        <textarea class="form-control input-lg" placeholder="Message"></textarea>
                        </div>
                        
                       <button type="submit" class="btn  btn-lg btn-block">
                       Send Message</button>

                        </form>
                    </div>

              <div class="col-md-6 col-xs-12">
              <div class="location">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3647.3030413476204!2d100.5641230193719!3d13.757206847615207!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xf51ce6427b7918fc!2sG+Tower!5e0!3m2!1sen!2sth!4v1510722015945" style="border:0; height:100%; width:100%" allowfullscreen=""></iframe>




              </div>
              
            </div>
</div>
     </div>
     </section>
                               <!-- End Section Contact & Map -->
  </div>
</template>
<script>

export default {
  data: function(){
    return {
      pageName: "Contact Us",
      pageDescribtion: ""

    };
  },
  name: "Contact"
   
};
</script>
<style>
.disc {
  line-height: 35px;
  margin-top: 40px;
  margin-bottom : 40px;
  font-size: 18px;
}
.contact-us { margin-bottom: 40px; }
.contact-us h2 { font-family: 'Lobster', cursive; /*main font-family for h2 & h3 */ }
.contact-us .row h2 { margin-left: 15px; margin-bottom: 20px; }
.contact-us .field  input , .contact-us .field textarea { border-color:   #DD3333; }
.contact-us .field textarea { height: 150px; resize: none; }
.contact-us h3 { margin-bottom: 40px;}
.contact-us .btn {
  background-color: #DD3333;
  margin-bottom: 30px;
  font-family: 'Lobster', cursive;
  font-size:20px;
}
.contact-us .location {
    width: 100%;
    height: 380px;
    border: 5px solid #fff;
    border-radius: 8px;
}
</style>
