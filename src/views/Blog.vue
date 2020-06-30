<template>
  <div class="blog">
    <div class="container">
    <h1>{{ pageName }}</h1>
    <p class="disc">{{ pageDescribtion }}</p>
    </div>
    <div class="container">
      <div class="row">
         <div class="col-md-8">
            <div class="posts-area">
               <BlogPosts v-for="blog in blogs" 
                          v-bind:key="blog.id"
                                :views="blog.views"
                                :title="blog.title"
                                :date="blog.date"
                                :content="blog.content"
                                :author="blog.author"
                                :category="blog.category"/>
            </div>
         </div>
         <div class="col-md-4">
            <div class="sidebar">
               
              <BlogSidebar />
            </div>
         </div>
      </div>
    </div>
   
     
  </div>
</template>
<script>
import BlogPosts from "@/components/Blog/BlogPosts.vue";
import BlogSidebar from "@/components/Blog/BlogSidebar.vue";
import BlogJsonPosts from "@/json/Blog-Posts.json";

export default {
  data: function(){
    return {
      pageName: "Discover this week’s Featured plugins and code Blog 2015",
      pageDescribtion: "This week’s best code snippets and scripts have arrived, all carefully hand-picked by our Quality team! Find out what items have been making our heads turn. Find out what items .",
      blogs: BlogJsonPosts

    };
  },
  name: "blog",
  components: {
      BlogPosts ,
      BlogSidebar
  }
   
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.disc {
  line-height: 35px;
  margin-top: 40px;
  margin-bottom : 40px;
  font-size: 18px;
}
</style>