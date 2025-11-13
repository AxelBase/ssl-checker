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
    <title>The Hidden Cost of Expired SSL Certificates • AxelBase</title>
    <meta name="description" content="An expired SSL certificate can cost you traffic, revenue, and trust. See real data on the damage — and how to prevent it." />
    <meta property="og:title" content="The Hidden Cost of Expired SSL Certificates" />
    <meta property="og:description" content="One expired cert = lost visitors, broken APIs, and SEO damage that lasts months." />
    <meta property="og:url" content="{base}/blog/posts/post3" />
    <meta property="og:type" content="article" />
    <meta name="twitter:card" content="summary_large_image" />
</svelte:head>

<div class="post-page-wrapper" use:fadeInOnScroll>
    <div class="breadcrumbs">
        <a href="{base}/blog">Blog</a> <span>/</span>
        <p>The Hidden Cost</p>
    </div>

    <article class="prose glass-panel">
        <h1>The Hidden Cost of Expired SSL Certificates</h1>
        <p class="post-meta">Published: November 20, 2025</p>

        <p>
            You forgot to renew one certificate. It expired. No big deal, right?<br>
            <strong>Wrong.</strong> Here’s what actually happens.
        </p>

        <h2>Immediate Traffic Loss</h2>
        <p>
            Chrome shows “Not Secure”. Brave blocks the site. Safari refuses to load.
            Average bounce rate jumps from 40% to over 90% within minutes.
        </p>

        <h2>SEO Takes a Hit</h2>
        <p>
            Google confirmed: HTTPS is a ranking signal.
            An expired cert = broken HTTPS = lower rankings.
            Recovery can take weeks to months.
        </p>

        <h2>Real Outages That Made Headlines</h2>
        <ul>
            <li>GitHub (2018): 15-minute outage from expired cert</li>
            <li>UK Government sites: Multiple downtime incidents</li>
            <li>E-commerce stores losing $10k+ per hour</li>
        </ul>

        <h2>API & Third-Party Breakage</h2>
        <p>
            Webhooks fail. Mobile apps can’t connect. Payment gateways reject requests.
            One expired cert can break your entire stack.
        </p>

        <h2>Prevention Is Cheaper Than Cure</h2>
        <p>
            Use our free SSL Checker. Set reminders. Automate with Certbot.
            The cost of prevention: $0.<br>
            The cost of recovery: priceless.
        </p>

        <h2>FAQ</h2>
        <details class="fancy-details">
            <summary>Do visitors really leave that fast?</summary>
            <div class="details-content">
                <p>Yes — 85% of users will not proceed past a certificate warning (Google study).</p>
            </div>
        </details>

        <p class="italic-note">
            An expired certificate isn’t a minor glitch — it’s a trust emergency.
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