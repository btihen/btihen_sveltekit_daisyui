<!-- src/routes/blog/index.svelte -->
<script context="module">
  export const load = async ({ fetch }) => {
    const jsPosts = await fetch('/api/post_javascript.json')
    const allJsPosts = await jsPosts.json()
    const eduPosts = await fetch('/api/post_edu.json')
    const allEduPosts = await eduPosts.json()

    return {
      props: {
        edu_posts: allEduPosts,
        js_posts: allJsPosts
      }
    }
  }
</script>

<script>
  export let edu_posts
  export let js_posts
</script>

<div class="divider"></div>

<div class="flex flex-col w-full">

  <div class="card card-side shadow-lg">
    <div class="width-3  mx-5 my-5 mt-5 mb-5">
      <img class="mask mask-squircle" src="https://api.lorem.space/image/movie?w=200&h=280" alt="Movie">
    </div>
    <div class="basis-2/3">
      <h2 class="text-2xl font-bold">
        <a href="/post_javascript/">Javascript Posts</a>
      </h2>
      <ul>
        {#each js_posts.slice(0, 3) as post}
          <li>
            <h3>
              <a href={post.path}>
                {post.meta.title}
              </a>
            </h3>
            Published {post.meta.date}
          </li>
        {/each}
      </ul>
    </div>
  </div>

  <div class="divider"></div>

  <div class="card card-side shadow-lg">
    <div class="width-3 mx-5 my-5 mt-5 mb-5">
      <img class="mask mask-squircle" src="https://api.lorem.space/image/movie?w=200&h=280" alt="Movie">
    </div>
    <div class="basis-2/3 align-left">
      <h2 class="text-2xl font-bold">
        <a href="/post_javascript/">EDU Posts</a>
      </h2>
      <ul>
        {#each edu_posts.slice(0, 3) as post}
          <li>
            <h3>
              <a href={post.path}>
                {post.meta.title}
              </a>
            </h3>
            summary: {post.meta.summary}
            Published {post.meta.date}
          </li>
        {/each}
      </ul>
    </div>
  </div>

</div>
