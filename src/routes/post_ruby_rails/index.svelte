<!-- src/routes/blog/index.svelte -->
<script context="module">
  export const load = async ({ fetch }) => {
    const rubyPosts = await fetch('/api/post_ruby_rails.json')
    const allRubyPosts = await rubyPosts.json()

    return {
      props: {
        ruby_posts: allRubyPosts
      }
    }
  }
</script>

<script>
  export let ruby_posts
</script>

<h1>Javascript Posts</h1>

<ul>
  {#each ruby_posts as post}
    <li>
      <h2>
        <a href={post.path}>
          {post.meta.title}
        </a>
      </h2>
      Published {post.meta.date}
    </li>
  {/each}
</ul>
