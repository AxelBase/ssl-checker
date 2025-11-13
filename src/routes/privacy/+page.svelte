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
    <title>Privacy Policy | AxelBase SSL Checker</title>
    <meta name="description" content="We collect zero personal data. Your domain checks stay private — always." />
    <meta property="og:title" content="Privacy Policy | AxelBase SSL Checker" />
    <meta property="og:description" content="100% client-side. No tracking. No logs. No cookies." />
    <meta property="og:url" content="{base}/privacy" />
    <meta property="og:type" content="website" />
    <meta name="twitter:card" content="summary_large_image" />
</svelte:head>

<div class="post-page-wrapper" use:fadeInOnScroll>
    <div class="breadcrumbs">
        <a href="{base}/">Home</a> <span>/</span>
        <p>Privacy Policy</p>
    </div>

    <article class="prose glass-panel">
        <h1>Privacy Policy</h1>
        <p class="post-meta">Effective Date: November 13, 2025</p>

        <h2>1. We Collect Nothing</h2>
        <p>
            The <strong>AxelBase SSL Certificate Checker</strong> is a <em>fully client-side</em> tool.
            When you check a domain, <strong>no data leaves your browser to us</strong>.
            We do not collect, store, log, or process any information about you or your queries.
        </p>

        <h2>2. What Happens When You Use the Tool</h2>
        <p>
            You enter a domain → JavaScript runs in your browser → a public proxy forwards the request
            to the SSL API → results appear instantly.
            <strong>Your IP never reaches the SSL API</strong> — only the proxy sees it.
        </p>

        <h2>3. Zero Tracking Technologies</h2>
        <p>We do <strong>not</strong> use:</p>
        <ul>
            <li>Cookies or localStorage</li>
            <li>Google Analytics, Meta Pixel, or any trackers</li>
            <li>Session recording or heatmaps</li>
            <li>Server logs (because there is no server)</li>
        </ul>

        <h2>4. Third-Party Services (Anonymous Only)</h2>
        <p>
            We rely on two public services for functionality:
        </p>
        <ul>
            <li><strong>api.codetabs.com</strong> — CORS proxy (sees proxy IP only)</li>
            <li><strong>ssl-checker.io</strong> — certificate data provider</li>
        </ul>
        <p>
            Neither service receives identifiable information about you.
            We have no control over their logging policies.
        </p>

        <h2>5. Your Data Rights</h2>
        <p>
            Since we collect nothing, there is:
			</p>
            <ul>
                <li>No data to delete</li>
                <li>No account to close</li>
                <li>No privacy request needed</li>
            </ul>
            Just close the tab — and you're gone.
			<p>
        </p>

        <h2>6. Changes to This Policy</h2>
        <p>
            We may update this policy. Changes will be posted here with a new effective date.
        </p>

        <h2>7. Contact</h2>
        <p>
            Questions? Reach out via GitHub Issues on the repository.
        </p>

        <p class="italic-note">
            <strong>Privacy isn’t a feature — it’s the foundation.</strong>
            That’s why AxelBase SSL Checker will always remain 100% private by design.
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
	.prose h2 {
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

	.prose strong {
		color: var(--clr-text-primary);
		font-weight: 600;
	}

	.prose ul {
		list-style-type: none;
		padding-left: 1.5rem;
		color: var(--clr-text-secondary);
	}
	.prose ul li {
		position: relative;
		padding-left: 1.5rem;
		margin-bottom: 0.5rem;
	}
	/* Microinteraction: Custom list bullet */
	.prose ul li::before {
		content: '→';
		position: absolute;
		left: 0;
		color: var(--clr-capri-blue);
		font-weight: 700;
	}

	.prose .italic-note {
		font-style: italic;
		color: var(--clr-text-secondary);
		text-align: center;
		margin-top: 3rem;
		opacity: 0.8;
	}
</style>