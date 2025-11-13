<script lang="ts">
  import { base } from '$app/paths';
  import { onMount } from 'svelte';
  import '../app.css';
  import { fade } from 'svelte/transition';

  // CHANGE THIS TO YOUR PAYPAL USERNAME
  const paypalUsername = 'AxelLab427'; // e.g. 'yourpaypalname'

  const donationAmounts = [1, 3, 5, 10];
  let isDropdownOpen = false;

  function toggleDropdown(e: MouseEvent) {
    e.stopPropagation();
    isDropdownOpen = !isDropdownOpen;
  }

  function closeDropdown() {
    isDropdownOpen = false;
  }

  // Close on click outside
  function clickOutside(node: HTMLElement) {
    const handle = (e: MouseEvent) => {
      if (node && !node.contains(e.target as Node)) {
        closeDropdown();
      }
    };
    document.addEventListener('click', handle, true);
    return { destroy: () => document.removeEventListener('click', handle, true) };
  }

  onMount(() => {
    document.getElementById('current-year')!.textContent = new Date().getFullYear().toString();
  });
</script>

<svelte:window on:keydown={(e) => e.key === 'Escape' && closeDropdown()} />

<div class="d-flex flex-column min-vh-100">
  <header class="navbar-custom shadow-sm">
    <div class="container">
      <nav class="d-flex justify-content-between align-items-center py-3">
        <div class="d-flex align-items-center gap-3">
          <a href="{base}/" aria-label="Home">
            <img src="{base}/AxelLab-Logo.ico" alt="AxelBase" width="48" height="48" class="rounded" />
          </a>
          <a href="{base}/" class="navbar-brand-text text-decoration-none fw-bold">AxelBase</a>
        </div>

        <ul class="d-flex align-items-center gap-4 mb-0 list-unstyled flex-wrap">
          <li><a class="nav-link" href="{base}/">Home</a></li>
          <li><a class="nav-link" href="{base}/#about">About</a></li>
          <li><a class="nav-link" href="{base}/#how-to-use">How to Use</a></li>
          <li><a class="nav-link" href="{base}/#faq">FAQ</a></li>
          <li><a class="nav-link" href="{base}/blog">Blog</a></li>

          <li class="position-relative" use:clickOutside>
            <button
              class="bmac-button d-flex align-items-center gap-2"
              on:click={toggleDropdown}
              aria-label="Support via PayPal"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12.35,22.2L12,22A10,10,0,0,1,2,12V10A2,2,0,0,1,4,8H7.2A5.13,5.13,0,0,1,12,3A5.13,5.13,0,0,1,16.8,8H20A2,2,0,0,1,22,10V12A10,10,0,0,1,12.35,22.2M4,10V12A8,8,0,0,0,12,20A8,8,0,0,0,20,12V10H16.8A5.11,5.11,0,0,1,12.5,5.12A5.15,5.15,0,0,1,7.2,10H4Z"/>
              </svg>
              Buy me a coffee
            </button>

            {#if isDropdownOpen && paypalUsername}
              <div class="bmac-dropdown shadow-lg" transition:fade={{ duration: 180 }}>
                {#each donationAmounts as amount}
                  <a
                    href="https://paypal.me/{paypalUsername}/{amount}"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="d-block text-center py-2"
                    on:click|preventDefault
                    on:mousedown|preventDefault={(e) => {
                      e.preventDefault();
                      window.open(`https://paypal.me/${paypalUsername}/${amount}`, '_blank');
                      closeDropdown();
                    }}
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

  <main class="flex-grow-1">
    <slot />
  </main>

  <footer class="footer py-4 mt-auto">
    <div class="container text-center">
      <p class="mb-0 text-secondary">
        © <span id="current-year">2025</span> AxelBase SSL Checker – All rights reserved.<br>
        <a href="{base}/privacy" class="text-warning">Privacy Policy</a> • 
        <a href="{base}/terms" class="text-warning">Terms of Service</a>
      </p>
    </div>
  </footer>
</div>

<style>
  .bmac-button {
    background: #ff813f;
    color: white;
    border: none;
    padding: 0.5rem 1rem;
    border-radius: 0.5rem;
    font-weight: 600;
    cursor: pointer;
    transition: background 0.2s;
  }
  .bmac-button:hover { background: #e66f30; }

  .bmac-dropdown {
    position: absolute;
    top: 100%;
    right: 0;
    background: #222;
    border: 1px solid #444;
    border-radius: 0.5rem;
    min-width: 120px;
    z-index: 1000;
    margin-top: 0.5rem;
  }
  .bmac-dropdown a {
    color: #ff813f;
    text-decoration: none;
    font-weight: bold;
  }
  .bmac-dropdown a:hover {
    background: #333;
    color: white;
  }
</style>