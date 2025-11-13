<script lang="ts">
	import { base } from '$app/paths';
	import { page } from '$app/stores';
	import { fly } from 'svelte/transition';
	import '../app.css'; // Import global fancy styles

	// --- "Buy Me a Coffee" Logic ---
	const paypalUsername = 'YOUR_USERNAME'; // <-- IMPORTANT: Set your PayPal username
	const donationAmounts = [1, 3, 5, 10];
	let isDropdownOpen = false;

	function toggleDropdown() {
		isDropdownOpen = !isDropdownOpen;
	}
	function closeDropdown() {
		isDropdownOpen = false;
	}

	// Click outside directive
	function clickOutside(node: HTMLElement) {
		const handleClick = (event: MouseEvent) => {
			if (node && !node.contains(event.target as Node)) {
				// Dispatch custom event
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

	// --- Footer Logic ---
	const currentYear = new Date().getFullYear();
</script>

<header class="navbar">
	<div class="navbar-left-group">
		<a href="{base}/" class="navbar-brand" aria-label="AxelBase Home">
			<img src="{base}/AxelLab-Logo.ico" alt="AxelBase Logo" class="navbar-logo" />
			<span class="navbar-brand-text">AxelBase</span>
		</a>

		<div class="bmac-container" use:clickOutside on:click_outside={closeDropdown}>
			<button class="bmac-button" on:click={toggleDropdown} aria-haspopup="true" aria-expanded={isDropdownOpen}>
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
					<path d="M12.35,22.2L12,22A10,10,0,0,1,2,12V10A2,2,0,0,1,4,8H7.2A5.13,5.13,0,0,1,12,3A5.13,5.13,0,0,1,16.8,8H20A2,2,0,0,1,22,10V12A10,10,0,0,1,12.35,22.2M4,10V12A8,8,0,0,0,12,20A8,8,0,0,0,20,12V10H16.8A5.11,5.11,0,0,1,12.5,5.12A5.15,5.15,0,0,1,7.2,10H4Z" />
				</svg>
				<span>Buy me a coffee</span>
			</button>

			{#if isDropdownOpen}
				<div class="bmac-dropdown" transition:fly={{ y: -10, duration: 200 }}>
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
		</div>
	</div>

	<nav>
		<ul class="navbar-links">
			<li><a class="nav-link" href="{base}/">Home</a></li>
			<li><a class="nav-link" href="{base}/#about">About</a></li>
			<li><a class="nav-link" href="{base}/#how-to-use">How to use</a></li>
			<li><a class="nav-link" href="{base}/#faq">FAQ</a></li>
			<li><a class="nav-link" href="{base}/blog">Blog</a></li>
		</ul>
	</nav>
</header>

<div class="main-content">
	{#key $page.route.id}
		<div in:fly={{ y: 30, duration: 400, delay: 400 }} out:fly={{ y: -30, duration: 300 }}>
			<slot />
		</div>
	{/key}
</div>

<footer class="footer">
	<span>© AxelBase SSL Certificate Expiry Checker – {currentYear}</span>
	<div class="footer-links">
		<a href="{base}/privacy">Privacy</a>
		<a href="{base}/terms">Terms</a>
	</div>
</footer>