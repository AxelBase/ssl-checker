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
    <title>Why SSL Certificates Expire (And Why It Matters) • AxelBase</title>
    <meta name="description" content="Discover why SSL certificates have expiration dates, the security risks of letting them lapse, and how modern browsers react to expired certs." />
    <meta property="og:title" content="Why SSL Certificates Expire (And Why It Matters)" />
    <meta property="og:description" content="SSL certificates expire by design. Learn the security reasons behind limited validity periods and what happens when they lapse." />
    <meta property="og:url" content="{base}/blog/posts/post1" />
    <meta property="og:type" content="article" />
    <meta name="twitter:card" content="summary_large_image" />
</svelte:head>

<div class="post-page-wrapper" use:fadeInOnScroll>
    <div class="breadcrumbs">
        <a href="{base}/blog">Blog</a> <span>/</span>
        <p>Why SSL Certificates Expire</p>
    </div>

    <article class="prose glass-panel">
        <h1>Why SSL Certificates Expire (And Why It Matters)</h1>
        <p class="post-meta">Published: November 15, 2025</p>

        <p>
            SSL/TLS certificates don’t last forever — and that’s not a bug, it’s a <strong>security feature</strong>.
            Most certificates are valid for 90 days to a maximum of 398 days. But why?
        </p>

        <h2>The Security Reason: Limiting Damage</h2>
        <p>
            If a private key is ever compromised (hacked, leaked, or stolen), an expired certificate becomes worthless to attackers.
            Short-lived certificates reduce the "attack window" — even if someone steals your key today, it’s useless in 90 days.
        </p>

        <h2>Certificate Authority Policy Changes</h2>
        <p>
            In 2020, Apple, Google, and Mozilla forced all CAs to reduce maximum validity from 825 days to 398 days.
            This was a direct response to multiple high-profile breaches where long-lived certificates were abused for months.
        </p>

        <h2>Let’s Encrypt Changed Everything</h2>
        <p>
            Since 2016, Let’s Encrypt has issued free 90-day certificates with automation in mind.
            Their philosophy: <em>“If renewal is automated, expiration is safe.”</em>
            Today, over 300 million websites use 90-day certs — proving short lifecycles work at scale.
        </p>

        <h2>What Happens When a Certificate Expires?</h2>
        <p>
            Browsers show scary warnings: “Your connection is not private”, “NET::ERR_CERT_DATE_INVALID”.
            Users leave. Google downgrades rankings. APIs break. Trust evaporates.
        </p>

        <h3>Real-World Impact</h3>
        <ul>
            <li>GitHub went down in 2018 due to an expired cert</li>
            <li>Thousands of sites break daily from forgotten renewals</li>
            <li>SEO takes months to recover after trust signals drop</li>
        </ul>

        <h2>FAQ</h2>
        <details class="fancy-details">
            <summary>Can I get a 10-year SSL certificate?</summary>
            <div class="details-content">
                <p>No. The maximum is 398 days (about 13 months) as of 2025 — enforced by all major browsers.</p>
            </div>
        </details>
        <details class="fancy-details">
            <summary>Is a longer certificate more secure?</summary>
            <div class="details-content">
                <p>No — it’s the opposite. Shorter validity = stronger security.</p>
            </div>
        </details>

        <p class="italic-note">
            Expiration is not a flaw — it’s your website’s built-in security reset button.
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
	.prose h2,
	.prose h3 {
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

	.prose h3 {
		font-size: 1.4rem;
		margin-top: 2rem;
		margin-bottom: 0.5rem;
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