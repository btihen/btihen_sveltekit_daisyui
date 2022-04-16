<script>
  import { onMount } from 'svelte'
  import { themeChange } from 'theme-change'

  // NOTE: the element that is using one of the theme attributes must be in the DOM on mount
  onMount(() => {
    themeChange(false)
    // 👆 false parameter is required for svelte
  })
</script>

<navbar>
  <div class="bg-black h-1.5"></div>
  <div class="flex items-center justify-center sticky top-0 z-50 bg-primary">

    <div class="navbar w-4/5">

      <div class="navbar-start">
        <div class="dropdown">
          <div tabindex="0" class="btn btn-ghost btn-circle">
            <!-- menu-alt1 - hero-icon -->
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 22 22" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M2 6h16M2 12h8m-8 6h16" />
            </svg>
          </div>
          <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-62">
            <li><a href="/">Item 1</a></li>
            <li tabindex="0">
              <a class="justify-between" href="/">
                Parent
                <svg class="fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                  <path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z"/>
                </svg>
              </a>
              <ul class="p-2 shadow bg-base-100">
                <li><a href="/">Submenu 1</a></li>
                <li><a href="/">Submenu 2</a></li>
              </ul>
            </li>
            <li><a href="/">Item 3</a></li>
            <li>
              <div class="form-control">
                <input type="text" placeholder="Search" class="input input-bordered">
              </div>
            </li>
          </ul>
        </div>
      </div>

      <div class="navbar-center">
        <a href="/" class="btn btn-ghost normal-case text-xl">btihen.dev</a>
      </div>

      <div class="navbar-end space-x-2">
        <!--
        <div class="form-control hidden md:form-control">
          <input type="text" placeholder="Search" class="input input-bordered">
        </div>
        -->
        <!-- <select data-choose-theme>
          <option value="">Default</option>
          <option value="btihenl">Light</option>
          <option value="btihend">Dark</option>
        </select> -->
        <!-- sun - heroicon.dev -->
        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"></path>
        </svg>
        <!-- https://github.com/saadeghi/theme-change -->
        <input type="checkbox" class="toggle" id="theme-toggle" data-toggle-theme="btihenl,btihend" data-act-class="ACTIVECLASS">
        <!-- moon - heroicon.dev -->
        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"></path>
        </svg>
      </div>
    </div>

  </div>
</navbar>
