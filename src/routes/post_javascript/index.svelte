<!-- src/routes/blog/index.svelte -->
<script context="module">
  export const load = async ({ fetch }) => {
    const jsPosts = await fetch('/api/post_javascript.json')
    const allJsPosts = await jsPosts.json()

    return {
      props: {
        js_posts: allJsPosts
      }
    }
  }
</script>

<script>
  export let js_posts
</script>

<h1>Javascript Posts</h1>

<ul>
  {#each js_posts as post}
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
