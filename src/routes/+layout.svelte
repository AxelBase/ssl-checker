<script lang="ts">
  import { base } from '$app/paths';
  import { onMount } from 'svelte';
  import '../app.css';
  import { fly } from 'svelte/transition';

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
              class="bmac-button d-flex align-items-center gap-2 text-white border-0 px-4 py-2 rounded-pill shadow-sm"
              on:click={toggleDropdown}
              aria-label="Support options"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M2,21V19H20V21H2M20,8V5H4V8H20M20,10H4V13C4,14.38 4.5,15.63 5.31,16.58L11.64,19H12.36L18.69,16.58C19.5,15.63 20,14.38 20,13V10M16,2H8V4H16V2Z" />
              </svg>
              <span class="d-none d-sm-inline fw-semibold">Buy me a Coffee</span>
            </button>

            {#if isDropdownOpen}
              <div class="bmac-dropdown mt-2" transition:fly={{ y: -10, duration: 250 }}>
                <a href="https://buymeacoffee.com/axelbase" target="_blank" rel="noopener" on:click={closeDropdown}>
                  <span class="amount">$3</span> One Coffee
                </a>
                <a href="https://buymeacoffee.com/axelbase" target="_blank" rel="noopener" on:click={closeDropdown}>
                  <span class="amount">$5</span> Two Coffees
                </a>
                <a href="https://buymeacoffee.com/axelbase" target="_blank" rel="noopener" on:click={closeDropdown}>
                  <span class="amount">$10</span> Three Coffees
                </a>

                <a href="https://buymeacoffee.com/axelbase" target="_blank" rel="noopener" on:click={closeDropdown} class="custom-amount">
                  Custom Amount
                </a>

                <a
                  href="bitcoin:bc1q3p0e6vt492m4w4fpz5m2cl4zcfuqqkgaj6myc9?label=AxelBase&message=Buy%20me%20a%20coffee"
                  on:click={closeDropdown}
                  class="custom-amount"
                >
                  Buy via Crypto (Bitcoin)
                </a>
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
  /* Button styles kept from File 1, adapted to File 2's orange/yellow theme */
  .bmac-button {
    background: var(--primary);
    font-size: 0.95rem;
    transition: all 0.3s ease;
    box-shadow: 0 4px 15px rgba(243, 165, 5, 0.4);
  }
  .bmac-button:hover {
    background: #fff;
    color: black;
    transform: translateY(-3px);
    box-shadow: 0 8px 25px rgba(243, 165, 5, 0.6);
  }

  /* Dropdown styles from File 1, adapted to dark theme with primary color accents */
  .bmac-dropdown {
    position: absolute;
    top: 100%;
    left: 50%;
    transform: translateX(-50%);
    width: 240px;
    background: var(--dark);
    border-radius: 16px;
    box-shadow: 0 12px 32px rgba(243, 165, 5, 0.15);
    overflow: hidden;
    border: 1px solid rgba(243, 165, 5, 0.2);
    z-index: 1000;
  }

  .bmac-dropdown a {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 12px 20px;
    color: #e0e0e0;
    text-decoration: none;
    font-size: 0.98rem;
    transition: all 0.2s ease;
  }

  .bmac-dropdown a:hover {
    background: var(--primary);
    color: black;
    padding-left: 28px;
  }

  .bmac-dropdown .amount {
    font-weight: 700;
    color: var(--primary);
    font-size: 1.1rem;
  }

  .bmac-dropdown .custom-amount {
    font-weight: 600;
    color: var(--primary);
    border-top: 1px solid #444;
    justify-content: center !important;
  }

  .bmac-dropdown .custom-amount:hover {
    color: black;
  }
</style>