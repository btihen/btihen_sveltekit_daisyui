<!-- src/routes/blog/index.svelte -->
<script context="module">
  export const load = async ({ fetch }) => {
    const jsPosts = await fetch('/api/posts.json')
    const allPosts = await jsPosts.json()

    return {
      props: {
        posts: allPosts
      }
    }
  }
</script>

<script>
  export let posts
</script>

<h1>Javascript Posts</h1>

<ul>
  {#each posts as post}
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
