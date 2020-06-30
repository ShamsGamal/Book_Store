<template>
  <div class="about">
    <div class="container"> 
    <h1>{{ pageName }}</h1>
    <p class="disc">{{ pageDescribtion }}</p>
    </div>


    <div class="our-team">
    <div class="container">
     <!--Start Section Meet Our Team -->
     
  
   <div class="text-center info-team">
  </div>
    <div class="container">
    <div class="row">
      <div class="team-info col-md-4 text-center">
        <img class="rounded-circle"
             src="../assets/img1.jpg" alt="Pic-1" style="width:200px; height:200px;">
        <h3>Marium Tom</h3> 
        <span>Book Specialist</span>
        <p class="lead">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
         

      </div>

      <div class="team-info col-md-4 text-center">
        <img class="rounded-circle"
             src="../assets/img2.jpg" alt="Pic-2" style="width:200px; height:200px;">
         <h3>Wilson Harri</h3> 
        <span>Article Specialist</span>
        <p class="lead">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
      </div>
      
      <div class="team-info col-md-4 text-center">
        <img class="rounded-circle"
             src="../assets/img3.jpg" alt="Pic-3" style="width:200px; height:200px;">
         <h3>Dorchsner Maui</h3> 
        <span>Story Specialist</span>
        <p class="lead">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
      </div>

</div>
</div>
</div>

                                       <!--End Section Meet Our Team -->


    </div>
     
  </div>
   
</template>
<script>
 
export default {
  data: function(){
    return {
      pageName: "About Our Startup",
      pageDescribtion: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit , Nemo enim ipsam voluptatem quia voluptas sit aspernatur quia voluptas sit aspernatur aut odit aut fugit , Nemo enim ipsam voluptatem quia voluptas sit ipsam voluptatem quia ipsam voluptatem quia ipsam voluptatem ."

    };
  },
  name: "About",
   
};
</script>
<style>
.disc {
  line-height: 35px;
  margin-top: 40px;
  margin-bottom : 40px;
  font-size: 18px;
}
.our-team {
  padding: 20px 50px;;
  
  background-color: #ddd;
}
.info-team {
  margin-top: 100px;
  margin-bottom: 100px;

}
.team-info h3 {
   margin-top: 20px;
   margin-bottom: 20px;
}
.team-info span {
  color: #a5a2a2;
}
.team-info p {
  margin-top: 30px;
  margin-bottom: 40px;
}
 
 
</style>
