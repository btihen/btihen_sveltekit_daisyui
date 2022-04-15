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
          <label tabindex="0" class="btn btn-ghost btn-circle">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </label>
          <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-62">
            <li><a>Item 1</a></li>
            <li tabindex="0">
              <a class="justify-between">
                Parent
                <svg class="fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z"/></svg>
              </a>
              <ul class="p-2 shadow bg-base-100">
                <li><a>Submenu 1</a></li>
                <li><a>Submenu 2</a></li>
              </ul>
            </li>
            <li><a>Item 3</a></li>
            <li>
              <div class="form-control">
                <input type="text" placeholder="Search" class="input input-bordered">
              </div>
            </li>
          </ul>
        </div>
      </div>

      <div class="navbar-center">
        <a class="btn btn-ghost normal-case text-xl">btihen.dev</a>
      </div>

      <div class="navbar-end space-x-2">
        <!--
        <div class="form-control hidden md:form-control">
          <input type="text" placeholder="Search" class="input input-bordered">
        </div>
        -->
      <input type="checkbox" class="toggle" id="theme-toggle" data-toggle-theme="marpori,btihen" data-act-class="ACTIVECLASS">
    </div>

  </div>
</navbar>
