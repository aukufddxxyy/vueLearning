const BlogPostsEvents = Vue.createApp({
    data() {
        return {
            posts: [
                { id: 1, title: 'My journey with Vue' },
                { id: 2, title: 'Blogging with Vue' },
                { id: 3, title: 'Why Vue is so fun' }
            ],
            postFontSize: 1
        }
    }
})

BlogPostsEvents.component('blog-post-event', {
    props: ['title'],
    template: `
      <div class="blog-post">
        <h4>{{ title }}</h4>
        <button @click="$emit('enlarge-text')">
            Enlarge text
        </button>
        <button  @click="$emit('small-text')">
            small text
        </button>
        <button @click="$emit('enlargeTextFixed', 0.5)">
            Enlarge text by fixed step
        </button>
      </div>
    `
})

BlogPostsEvents.mount('#blog-posts-events-demo')