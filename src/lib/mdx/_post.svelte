<script>
  export let title
  export let date
</script>

<h1 class="text-3xl font-bold mb-8">{title}</h1>

<p class="text-md text-center">Published: {date}</p>

<slot />
