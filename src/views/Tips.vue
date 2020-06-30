<template>
  <div class="tips">
   <div class="container">
    <h1>{{ pageName }}</h1>
    <p class="disc">{{ pageDescribtion }}</p>
    </div>
    <div class="container">
      <div class="row">
         <div class="col-md-8">
            <div class="posts-area">
               <BlogPosts v-for="tip in tips" 
                          v-bind:key="tip.id"
                                :views="tip.views"
                                :title="tip.title"
                                :date="tip.date"
                                :content="tip.content"
                                :author="tip.author"
                                :category="tip.category"/>
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
import TipsJsonPosts from "@/json/Tips-Posts.json";

export default {
  data: function(){
    return {
      pageName: "Discover this week’s Tips",
      pageDescribtion: "This week’s best code snippets and scripts have arrived, all carefully hand-picked by our Quality team! Find out what items have been making our heads turn. Find out what items .",
      tips:TipsJsonPosts

    };
  },
  name: "Tips",
  components: {
      BlogPosts ,
      BlogSidebar
  }
   
};
</script>