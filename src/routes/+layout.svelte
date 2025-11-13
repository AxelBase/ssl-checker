<script>
  import { base } from '$app/paths';
  import { onMount } from 'svelte';
    import '../app.css'; // Import global CSS

  const paypalUsername = 'YOUR_PAYPAL_USERNAME'; // ← Change this
  const donationAmounts = [1, 3, 5, 10];
  let isDropdownOpen = false;

  function toggleDropdown() {
    isDropdownOpen = !isDropdownOpen;
  }

  function closeDropdown() {
    isDropdownOpen = false;
  }

  function clickOutside(node) {
    const handleClick = (event) => {
      if (node && !node.contains(event.target)) {
        node.dispatchEvent(new CustomEvent('click_outside'));
      }
    };
    document.addEventListener('click', handleClick, true);
    return {
      destroy() {
        document.removeEventListener('click', handleClick, true);
      }
    };
  }

  onMount(() => {
    const year = new Date().getFullYear();
    document.getElementById('current-year').textContent = year;
  });
</script>

<div class="d-flex flex-column min-vh-100">
  <!-- Sticky Navbar -->
  <header class="navbar-custom">
    <div class="container">
      <nav class="d-flex justify-content-between align-items-center">
        <!-- Logo + Brand -->
        <div class="d-flex align-items-center gap-3">
          <a href="{base}/" aria-label="Home">
            <img src="{base}/AxelLab-Logo.ico" alt="AxelLab Logo" width="48" height="48" />
          </a>
          <a href="{base}/" class="navbar-brand-text">AxelBase</a>
        </div>

        <!-- Nav Links + Buy Me a Coffee -->
        <ul class="d-flex align-items-center gap-4 mb-0 list-unstyled">
          <li><a class="nav-link" href="{base}/">Home</a></li>
          <li><a class="nav-link" href="{base}/#about">About</a></li>
          <li><a class="nav-link" href="{base}/#how-to-use">How to Use</a></li>
          <li><a class="nav-link" href="{base}/#faq">FAQ</a></li>
          <li><a class="nav-link" href="{base}/blog">Blog</a></li>

          <li class="position-relative" use:clickOutside on:click_outside={closeDropdown}>
            <button class="bmac-button" on:click={toggleDropdown}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12.35,22.2L12,22A10,10,0,0,1,2,12V10A2,2,0,0,1,4,8H7.2A5.13,5.13,0,0,1,12,3A5.13,5.13,0,0,1,16.8,8H20A2,2,0,0,1,22,10V12A10,10,0,0,1,12.35,22.2M4,10V12A8,8,0,0,0,12,20A8,8,0,0,0,20,12V10H16.8A5.11,5.11,0,0,1,12.5,5.12A5.15,5.15,0,0,1,7.2,10H4Z" />
              </svg>
              Buy me a coffee
            </button>

            {#if isDropdownOpen}
              <div class="bmac-dropdown" transition:fade={{ duration: 200 }}>
                {#each donationAmounts as amount}
                  <a
                    href="https://paypal.me/{paypalUsername}/{amount}"
                    target="_blank"
                    rel="noopener noreferrer"
                    on:click={closeDropdown}
                  >
                    ${amount}
                  </a>
                {/each}
              </div>
            {/if}
          </li>
        </ul>
      </nav>
    </div>
  </header>

  <!-- Main Content -->
  <main class="flex-grow-1">
    <slot />
  </main>

  <!-- Fixed Footer -->
  <footer class="footer">
    <div class="container">
      <p>
        © <span id="current-year">2025</span> AxelBase SSL Checker – All rights reserved.<br>
        <a href="{base}/privacy">Privacy Policy</a> • <a href="{base}/terms">Terms of Service</a>
      </p>
    </div>
  </footer>
</div>