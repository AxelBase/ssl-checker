<script>
  import { base } from '$app/paths';
  
  const posts = [
    { href: '/blog/posts/post1', title: 'Why SSL Certificates Matter in 2025', description: 'Understanding the importance of valid TLS certificates for security, SEO, and user trust.' },
    { href: '/blog/posts/post2', title: 'How to Prevent SSL Certificate Expiry Downtime', description: 'Real-world strategies used by top companies to avoid embarrassing certificate outages.' },
    { href: '/blog/posts/post3', title: 'The Hidden Cost of Expired SSL Certificates', description: 'From lost sales to damaged reputation — what happens when your cert expires.' },
    { href: '/blog/posts/post4', title: 'Let’s Encrypt vs Paid Certificates: Which Should You Use?', description: 'A balanced comparison of free vs commercial SSL providers in 2025.' },
    { href: '/blog/posts/post5', title: 'How This Tool Works Under the Hood', description: 'Deep dive into the CORS proxy, API parsing, and real-time validation logic.' },
    { href: '/blog/posts/post6', title: 'Monitoring Multiple Domains at Scale', description: 'Tips for sysadmins and DevOps teams managing hundreds of certificates.' },
    { href: '/blog/posts/post7', title: 'The Future of SSL Automation', description: 'ACME v2, zero-downtime renewals, and what’s coming next in certificate management.' }
  ];
</script>

<svelte:head>
  <title>Blog | AxelBase SSL Checker</title>
  <meta name="description" content="Insights, tutorials, and best practices for SSL certificate monitoring and management." />
</svelte:head>

<div class="container py-5 fade-in blog-index">
  <header class="blog-header text-center mb-5">
    <h1 class="display-5 fw-bold mb-3">
      Blog: AxelBase Insights
    </h1>
    <p class="lead text-muted col-lg-8 mx-auto">
      Stay updated with SSL best practices, security tips, and in-depth guides on certificate management. 
      Built for developers, sysadmins, and security-conscious teams.
    </p>
  </header>

  <div class="posts-grid">
    {#each posts as post}
      <a href="{base}{post.href}" class="post-card card h-100 border-0 shadow-sm bg-dark text-decoration-none">
        <div class="card-body d-flex flex-column">
          <h3 class="post-title mb-3">{post.title}</h3>
          <p class="post-description text-secondary flex-grow-1">{post.description}</p>
          <div class="mt-auto">
            <span class="read-more fw-bold">Read Article →</span>
          </div>
        </div>
      </a>
    {/each}
  </div>
</div>

<style>
  .blog-index {
    padding-top: 3rem;
    padding-bottom: 6rem;
  }

  .blog-header h1 {
    color: #F3A505;
    text-shadow: 0 0 15px rgba(243, 165, 5, 0.3);
  }

  .posts-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(340px, 1fr));
    gap: 2rem;
  }

  .post-card {
    transition: all 0.4s ease;
    background: #1e1e1e !important;
    border: 1px solid #333 !important;
  }

  .post-card:hover {
    transform: translateY(-10px);
    box-shadow: 0 15px 35px rgba(243, 165, 5, 0.15) !important;
    border-color: #F3A505 !important;
  }

  .post-title {
    color: #F3A505;
    font-size: 1.35rem;
    font-weight: 600;
  }

  .post-description {
    font-size: 0.95rem;
    line-height: 1.6;
  }

  .read-more {
    color: #F3A505;
    font-weight: 700;
    transition: all 0.3s ease;
  }

  .post-card:hover .read-more {
    color: #fff;
    transform: translateX(8px);
  }
</style>