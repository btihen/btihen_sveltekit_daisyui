<script>
  import ukraine from '$lib/images/undraw_ukraine.png';
  import explore from '$lib/images/undraw_explore.png';
  import destinations from '$lib/images/undraw_destinations.png';
  import running from '$lib/images/undraw_running_wild.png';
  import fun from '$lib/images/undraw_nature_fun.png';
  import mind from '$lib/images/undraw_wandering_mind.png';
</script>

<div class="card md:card-side bg-base-100 shadow-lg">
  <figure class="md:w-2/6"><img src={fun} alt="Album" ></figure>
  <div class="card-body">
    <h2 class="card-title">Crazy Currious</h2>
    <p>Explore ideas and technologies</p>
    <div class="card-actions justify-end">
      <button class="btn btn-primary">Contact</button>
    </div>
  </div>
</div>

<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>

<div class="badge">neutral</div>
<div class="badge badge-primary">primary</div>
<div class="badge badge-secondary">secondary</div>
<div class="badge badge-accent">accent</div>
<div class="badge badge-ghost">ghost</div>

<div class="alert shadow-lg">
  <div>
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="stroke-info flex-shrink-0 w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
    <span>Shadow Notice</span>
  </div>
</div>

<div class="alert alert-info shadow-lg">
  <div>
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="stroke-current flex-shrink-0 w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
    <span>Info notice.</span>
  </div>
</div>

<div class="alert alert-success shadow-lg">
  <div>
    <svg xmlns="http://www.w3.org/2000/svg" class="stroke-current flex-shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
    <span>Suceess Notice</span>
  </div>
</div>

<div class="alert alert-warning shadow-lg">
  <div>
    <svg xmlns="http://www.w3.org/2000/svg" class="stroke-current flex-shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>
    <span>Warning: Invalid email address!</span>
  </div>
</div>

<div class="alert alert-error shadow-lg">
  <div>
    <svg xmlns="http://www.w3.org/2000/svg" class="stroke-current flex-shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
    <span>Error! Task failed successfully.</span>
  </div>
</div>
