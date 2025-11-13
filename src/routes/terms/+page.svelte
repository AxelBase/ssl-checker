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
    <title>Terms & Conditions | AxelBase SSL Checker</title>
    <meta name="description" content="Legal terms for using the free, open-source AxelBase SSL Certificate Checker." />
    <meta property="og:title" content="Terms & Conditions | AxelBase SSL Checker" />
    <meta property="og:description" content="Use of this tool is subject to these terms. Free forever. Open source. No warranty." />
    <meta property="og:url" content="{base}/terms" />
    <meta property="og:type" content="website" />
    <meta name="twitter:card" content="summary_large_image" />
</svelte:head>

<div class="post-page-wrapper" use:fadeInOnScroll>
    <div class="breadcrumbs">
        <a href="{base}/">Home</a> <span>/</span>
        <p>Terms & Conditions</p>
    </div>

    <article class="prose glass-panel">
        <h1>Terms & Conditions</h1>
        <p class="post-meta">Effective Date: November 13, 2025</p>

        <h2>1. Acceptance</h2>
        <p>
            By using the <strong>AxelBase SSL Certificate Checker</strong> ("the Tool"), you agree to these Terms.
            If you do not agree, please do not use the Tool.
        </p>

        <h2>2. Nature of Service</h2>
        <p>
            The Tool is a <strong>free, open-source</strong>, client-side web application for checking SSL certificate status.
            It is provided <em>"as is"</em> with no uptime or accuracy guarantees.
        </p>

        <h2>3. Permitted Use</h2>
        <p>You may use the Tool to:</p>
        <ul>
            <li>Check SSL certificates for any public domain</li>
            <li>Fork and modify the source code (MIT License)</li>
            <li>Deploy your own instance</li>
        </ul>

        <h2>4. Prohibited Use</h2>
        <p>You must <strong>not</strong>:</p>
        <ul>
            <li>Use the Tool for illegal or malicious purposes</li>
            <li>Perform automated scraping or DDoS-like requests</li>
            <li>Remove attribution or pretend it’s your original work</li>
            <li>Hold us liable for incorrect certificate data</li>
        </ul>

        <h2>5. No Warranty</h2>
        <p>
            The Tool relies on third-party APIs. We do <strong>not guarantee</strong> accuracy, availability, or timeliness of results.
            Use at your own risk.
        </p>

        <h2>6. Limitation of Liability</h2>
        <p>
            To the fullest extent allowed by law, <strong>AxelBase and its contributors</strong> shall not be liable
            for any damages arising from your use or inability to use the Tool.
        </p>

        <h2>7. Changes & Termination</h2>
        <p>
            We may modify or discontinue the Tool at any time without notice.
            These Terms may be updated — continued use means acceptance.
        </p>

        <h2>8. Governing Law</h2>
        <p>
            These Terms are governed by the laws of open-source goodwill and common sense.
        </p>

        <p class="italic-note">
            This tool exists to make the web safer — for free, forever.
            Thank you for using it responsibly.
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