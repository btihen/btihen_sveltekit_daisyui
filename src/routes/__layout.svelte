<script>
  import "../app.css";
  import Navbar from '$lib/components/Navbar.svelte'
  import Footer from '$lib/components/Footer.svelte'
</script>

<Navbar />

<main class="flex items-center justify-center bg-base-100">
  <div class="w-4/5 max-w-screen-2xl m-4 px-4 py-4 sm:px-0">
    <slot />
  </div>
</main>

<Footer />
