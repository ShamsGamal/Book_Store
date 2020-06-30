<template>
  <div class="home">
  <div class="container">
  <!--Start Slider -->
  <div id="carouselExampleFade" class="carousel slide carousel-fade" data-ride="carousel">

  <div class="carousel-inner">

    <div class="carousel-item active">
    	<div class="container">
    		<div class="row">
    			<div class="col-md-6 col-xs-12">
    				<img src="../assets/img-04.jpg" class="d-block w-100" alt="PIC-01">
    				
    			</div>

    			<div class="slider-info col-md-6 col-xs-12">

    				<span>Now</span>
    				<h1>MORE STORIES</h1>
    				<p class="lead">Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.</p>
    				<button type="button" class="btn btn-warning">Order Now</button>
    				<button type="button" class="btn btn-outline-warning">View More</button>
    				
    			</div>
       
       
            </div>
        </div>

    </div>

    <div class="carousel-item">
      <div class="container">
    		<div class="row">
    			



    			<div class="col-md-6 col-xs-12">
    				<img src="../assets/img-03.png" class="d-block w-100" alt="PIC-02">
    				
    			</div>
    			<div class="slider-info col-md-6 col-xs-12">
    				<span>Now</span>
    				<h1>MORE ARTICLES</h1>
    				<p class="lead">voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni.</p>
    				<button type="button" class="btn btn-warning">Order Now</button>
    				<button type="button" class="btn btn-outline-warning">View More</button>
    				
    			</div>
       
       
            </div>
        </div>
    </div>
  </div>
</div>
    
                                          <!--End Slider -->

    
  </div>
  </div>
</template>
<script>
 
export default {
  data: function(){
    return {
      pageName: "Home Page",
      pageDescribtion: "This Is Page Home"

    };
  },
  name: "Home",
   
};
</script>
<style>
.carousel .carousel-inner .carousel-item img { margin-top: 120px; margin-bottom: 100px; }
.carousel .carousel-inner .carousel-item .slider-info {
	margin-top: 150px;
	margin-bottom: 50px;
	padding-left: 30px;
}
.carousel .carousel-inner .carousel-item .slider-info span {
	 font-family: 'Josefin Slab', serif;
	 font-style: italic;
	 font-size: 35px;
	 font-weight: bold;
	 color: #FAC564;
}
.carousel .carousel-inner .carousel-item .slider-info h1 {
	 font-weight: bold;
	 margin-top: 5px;
	 margin-bottom: 10px;
}
.carousel .carousel-inner .carousel-item .slider-info p {
	font-size: 20px;
	font-weight: 400;
	margin-top: 10px;
	margin-bottom: 45px;
}
.carousel .carousel-inner .carousel-item .slider-info button {
	padding: 10px 15px;
	margin-right: 13px;
	border-radius: 0;
}


</style>

 