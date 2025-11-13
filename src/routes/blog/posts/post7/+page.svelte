<script>
    import { base } from '$app/paths';

    function fadeInOnScroll(node) {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        node.classList.add('is-visible');
                        observer.unobserve(node);
                    }
                });
            },
            { threshold: 0.1 }
        );
        observer.observe(node);
        return { destroy() { observer.unobserve(node); } };
    }
</script>

<svelte:head>
    <title>Deploy Your Own SSL Checker in 5 Minutes • AxelBase</title>
    <meta name="description" content="Fork this open-source SSL checker, host it free on GitHub Pages, and make it yours — no server needed." />
    <meta property="og:title" content="Deploy Your Own SSL Checker in 5 Minutes" />
    <meta property="og:description" content="100% static, private, customizable — your own branded certificate monitor." />
    <meta property="og:url" content="{base}/blog/posts/post7" />
    <meta property="og:type" content="article" />
    <meta name="twitter:card" content="summary_large_image" />
</svelte:head>

<div class="post-page-wrapper" use:fadeInOnScroll>
    <div class="breadcrumbs">
        <a href="{base}/blog">Blog</a> <span>/</span>
        <p>Deploy Your Own</p>
    </div>

    <article class="prose glass-panel">
        <h1>Deploy Your Own SSL Checker in 5 Minutes</h1>
        <p class="post-meta">Published: December 1, 2025</p>

        <p>
            This tool is open-source. You can have your own branded version live in minutes.
        </p>

        <h2>Step-by-Step</h2>
        <ol>
            <li>Fork the GitHub repo</li>
            <li>Enable GitHub Pages (Settings → Pages → main branch)</li>
            <li>Wait 60 seconds</li>
            <li>Your checker is live at yourusername.github.io/ssl-checker</li>
        </ol>

        <h2>Customize It</h2>
        <p>
            Change colors, add your logo, modify the proxy, or add domain presets.
            All in client-side Svelte — no build tools required.
        </p>

        <h2>Host Anywhere</h2>
        <p>
            Netlify, Vercel, Cloudflare Pages — all free tiers work perfectly.
        </p>

        <h2>FAQ</h2>
        <details class="fancy-details">
            <summary>Can I add my company branding?</summary>
            <div class="details-content">
                <p>Yes — edit <code>src/routes/+page.svelte</code> and <code>app.html</code>.</p>
            </div>
        </details>

        <p class="italic-note">
            Own your tools. Own your security.
        </p>
    </article>
</div>

<style>
	/* ---------------------------------- */
	/* 1. Page-Specific Variables */
	/* ---------------------------------- */
	.post-page-wrapper {
		--clr-capri-blue: #00bfff;
		--clr-text-primary: #2c2c2c;
		--clr-text-secondary: #4a4a4a;
		--clr-glass-bg: rgba(255, 255, 255, 0.2);
		--clr-glass-border: rgba(255, 255, 255, 0.3);
		--clr-glass-shadow: rgba(0, 0, 0, 0.1);
		--radius-card: 16px;
		--transition-fast: 0.2s ease;
		--transition-medium: 0.4s ease;

		max-width: 800px;
		margin: 0 auto;

		/* Animation Start State */
		opacity: 0;
		transform: translateY(30px);
		transition: opacity 0.6s ease-out, transform 0.6s ease-out;
	}

	/* ---------------------------------- */
	/* 2. Glassmorphism Panel (Re-usable) */
	/* ---------------------------------- */
	.glass-panel {
		background: var(--clr-glass-bg);
		backdrop-filter: blur(12px) saturate(150%);
		-webkit-backdrop-filter: blur(12px) saturate(150%);
		border: 1px solid var(--clr-glass-border);
		border-radius: var(--radius-card);
		box-shadow: 0 8px 32px 0 var(--clr-glass-shadow);
		padding: 2.5rem;
	}

	/* ---------------------------------- */
	/* 3. Breadcrumbs */
	/* ---------------------------------- */
	.breadcrumbs {
		display: flex;
		align-items: center;
		gap: 0.5rem;
		margin-bottom: 1.5rem;
		font-size: 0.9rem;
		color: var(--clr-text-secondary);
		padding: 0 1rem;
	}
	.breadcrumbs a {
		color: var(--clr-capri-blue);
		font-weight: 600;
		text-decoration: none;
	}
	.breadcrumbs a:hover {
		text-decoration: underline;
	}
	.breadcrumbs p {
		margin: 0;
		font-weight: 500;
		color: var(--clr-text-primary);
	}

	/* ---------------------------------- */
	/* 4. Prose / Article Styling */
	/* ---------------------------------- */
	.prose {
		line-height: 1.8;
	}

	.prose .post-meta {
		color: var(--clr-text-secondary);
		font-size: 0.9rem;
		margin-bottom: 2rem;
		border-bottom: 1px solid var(--clr-glass-border);
		padding-bottom: 1rem;
	}

	.prose h1,
	.prose h2{
		color: var(--clr-text-primary);
		line-height: 1.3;
	}

	.prose h1 {
		font-size: 2.5rem;
		margin-bottom: 0.5rem;
	}

	.prose h2 {
		font-size: 1.8rem;
		margin-top: 2.5rem;
		margin-bottom: 1rem;
		border-bottom: 1px solid var(--clr-glass-border);
		padding-bottom: 0.5rem;
	}


	.prose p {
		color: var(--clr-text-secondary);
		margin-bottom: 1.25rem;
	}

	.prose .italic-note {
		font-style: italic;
		color: var(--clr-text-secondary);
		text-align: center;
		margin-top: 3rem;
		opacity: 0.8;
	}

	/* ---------------------------------- */
	/* 5. Fancy Details/Accordion */
	/* ---------------------------------- */
	.prose .fancy-details {
		background: rgba(255, 255, 255, 0.2);
		border: 1px solid var(--clr-glass-border);
		border-radius: 10px;
		margin-bottom: 1rem;
		transition: all var(--transition-fast);
		overflow: hidden;
	}

	.prose .fancy-details:hover {
		border-color: var(--clr-capri-blue);
	}

	.prose .fancy-details[open] {
		background: rgba(255, 255, 255, 0.3);
	}

	.prose summary {
		cursor: pointer;
		font-weight: 600;
		color: var(--clr-text-primary);
		padding: 1.25rem;
		list-style: none; /* Remove default marker */
		position: relative;
		transition: background var(--transition-fast);
	}

	.prose summary:hover {
		background: rgba(0, 191, 255, 0.05);
	}

	.prose summary::-webkit-details-marker {
		display: none;
	}

	/* Microinteraction: Animated Plus/Minus icon */
	.prose summary::before {
		content: '+';
		position: absolute;
		right: 1.25rem;
		top: 50%;
		transform: translateY(-50%) rotate(0);
		color: var(--clr-capri-blue);
		font-weight: 700;
		font-size: 1.5rem;
		line-height: 1;
		transition: transform 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
	}

	.prose .fancy-details[open] summary::before {
		transform: translateY(-50%) rotate(45deg);
	}

	.prose .details-content {
		/* Smooth open/close animation */
		max-height: 0;
		opacity: 0;
		overflow: hidden;
		transition: max-height 0.4s ease-out, opacity 0.3s ease-in-out, padding 0.4s ease-out;
	}

	.prose .details-content p {
		margin: 0;
	}

	.prose .fancy-details[open] .details-content {
		padding: 0 1.25rem 1.25rem 1.25rem;
		max-height: 300px; /* Adjust as needed */
		opacity: 1;
		border-top: 1px solid var(--clr-glass-border);
		margin-top: -1px; /* Overlap border */
	}
</style>