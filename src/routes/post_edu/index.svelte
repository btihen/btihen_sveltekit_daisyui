<!-- src/routes/blog/index.svelte -->
<script context="module">
  export const load = async ({ fetch }) => {
    const eduPosts = await fetch('/api/post_edu.json')
    const allEduPosts = await eduPosts.json()

    return {
      props: {
        edu_posts: allEduPosts
      }
    }
  }
</script>

<script>
  export let edu_posts
</script>

<h1>Javascript Posts</h1>

<ul>
  {#each edu_posts as post}
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
