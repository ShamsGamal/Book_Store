<template>
  <div class="start-up">
   <div class="container">
    <h1>{{ pageName }}</h1>
    <p class="disc">{{ pageDescribtion }}</p>
    </div>
    <div class="container">
      <div class="row">
         <div class="col-md-8">
            <div class="posts-area">
               <BlogPosts v-for="start in starts" 
                          v-bind:key="start.id"
                                :views="start.views"
                                :title="start.title"
                                :date="start.date"
                                :content="start.content"
                                :author="start.author"
                                :category="start.category"/>
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
import StartsJsonPosts from "@/json/Startup-Posts.json";

export default {
  data: function(){
    return {
       pageName: "This Featured plugins and Start Up Articles",
      pageDescribtion: "This week’s best code snippets and scripts have arrived, all carefully hand-picked by our Quality team! Find out what items have been making our heads turn. Find out what items .",
      starts:StartsJsonPosts

    };
  },
  directives: {
     bold: {
        bind: function(el){
          el.style.fontWeight = "bold";
        }
     }
},
  name: "Startup",
  components: {
      BlogPosts ,
      BlogSidebar
  }
   
};
</script>