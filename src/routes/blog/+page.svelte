<script>
    import { base } from '$app/paths';

    const posts = [
        {
            href: '/blog/posts/post1',
            title: 'Why SSL Certificates Expire (And Why It Matters)',
            description: 'Understanding certificate lifecycles, renewal risks, and how expiration impacts trust and SEO.'
        },
        {
            href: '/blog/posts/post2',
            title: 'How to Never Miss an SSL Renewal Again',
            description: 'Proven strategies used by DevOps teams to automate monitoring and avoid downtime.'
        },
        {
            href: '/blog/posts/post3',
            title: 'The Hidden Cost of Expired Certificates',
            description: 'Browser warnings, lost traffic, SEO penalties — real-world impact with case studies.'
        },
        {
            href: '/blog/posts/post4',
            title: 'Let’s Encrypt vs Paid CAs: Which Should You Use?',
            description: 'A balanced comparison of automation, support, features, and when to pay for a cert.'
        },
        {
            href: '/blog/posts/post5',
            title: 'How This SSL Checker Works Under the Hood',
            description: 'Deep dive into CORS proxies, certificate transparency, and client-side validation.'
        },
        {
            href: '/blog/posts/post6',
            title: 'Monitoring Multiple Domains? Here’s How',
            description: 'From personal sites to enterprise fleets — scalable ways to track certificate health.'
        },
        {
            href: '/blog/posts/post7',
            title: 'Deploy Your Own SSL Checker in 5 Minutes',
            description: 'Fork this open-source tool, host on GitHub Pages, and make it yours — no server needed.'
        }
    ];

    // Premium: Fade-in on scroll
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
    <title>Blog • AxelBase SSL Checker</title>
    <meta name="description" content="Learn about SSL/TLS certificates, renewal best practices, and how to keep your sites secure." />
</svelte:head>

<div class="blog-index-wrapper" use:fadeInOnScroll>
    <header class="blog-header">
        <h1>AxelBase Insights</h1>
        <p class="subtitle">
            Deep dives, tutorials, and best practices for SSL certificate management and web security.
        </p>
    </header>

    <div class="posts-grid-container">
        <div class="posts-grid">
            {#each posts as post, i}
                <a
                    href="{base}{post.href}"
                    class="post-card glass-panel"
                    style="--delay: {i * 80}ms"
                    use:fadeInOnScroll
                >
                    <div class="post-card-inner">
                        <h2 class="post-title">{post.title}</h2>
                        <p class="post-description">{post.description}</p>
                        <span class="read-more">
                            Read Article <span class="arrow">→</span>
                        </span>
                    </div>
                </a>
            {/each}
        </div>
    </div>
</div>

<style>
    :global(body) { background: linear-gradient(135deg, #0f1620 0%, #1a2a44 100%); color: #e0e0e0; }

    .blog-index-wrapper {
        --clr-capri: #00d4ff;
        --clr-capri-glow: rgba(0, 212, 255, 0.3);
        --clr-text: #e6f1ff;
        --clr-text-muted: #94b0c9;
        --clr-glass: rgba(255, 255, 255, 0.08);
        --clr-border: rgba(255, 255, 255, 0.15);
        --radius: 18px;

        opacity: 0;
        transform: translateY(40px);
        transition: opacity 0.8s ease-out, transform 0.8s ease-out;
    }

    .blog-header {
        text-align: center;
        margin-bottom: 4rem;
        padding-bottom: 2rem;
        border-bottom: 1px solid var(--clr-border);
    }
    .blog-header h1 {
        font-size: 3.2rem;
        background: linear-gradient(90deg, var(--clr-capri), #ffffff);
        -webkit-text-fill-color: transparent;
        margin-bottom: 1rem;
    }
    .subtitle {
        font-size: 1.25rem;
        color: var(--clr-text-muted);
        max-width: 720px;
        margin: 0 auto;
        line-height: 1.7;
    }

    .posts-grid-container { perspective: 1600px; }
    .posts-grid {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(340px, 1fr));
        gap: 2rem;
        padding: 1rem;
    }

    .glass-panel {
        background: var(--clr-glass);
        backdrop-filter: blur(14px);
        -webkit-backdrop-filter: blur(14px);
        border: 1px solid var(--clr-border);
        border-radius: var(--radius);
        box-shadow: 0 10px 40px rgba(0, 0, 0, 0.3);
        transition: all 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    }

    .post-card {
        text-decoration: none;
        display: block;
        padding: 2rem;
        opacity: 0;
        transform: translateY(30px);
        animation: fadeIn 0.7s ease-out forwards;
        animation-delay: var(--delay);
    }
    @keyframes fadeIn {
        to { opacity: 1; transform: translateY(0); }
    }

    .post-card:hover {
        transform: translateY(-12px) rotateX(4deg);
        border-color: var(--clr-capri);
        box-shadow: 0 20px 50px rgba(0, 212, 255, 0.2);
    }

    .post-title {
        font-size: 1.4rem;
        font-weight: 700;
        color: var(--clr-text);
        margin-bottom: 1rem;
    }
    .post-description {
        color: var(--clr-text-muted);
        line-height: 1.65;
        margin-bottom: 1.5rem;
    }
    .read-more {
        color: var(--clr-capri);
        font-weight: 600;
        font-size: 1.05rem;
    }
    .read-more .arrow {
        display: inline-block;
        transition: transform 0.25s ease;
    }
    .post-card:hover .arrow { transform: translateX(8px); }
</style>