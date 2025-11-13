<script lang="ts">
  import { base } from '$app/paths';
</script>

<svelte:head>
  <title>How AxelBase SSL Checker Works Under the Hood | AxelBase Blog</title>
  <meta name="description" content="A technical deep dive into the CORS proxy, API parsing, real-time validation, and privacy-first design of this SSL certificate checker." />
  <meta property="og:title" content="How AxelBase SSL Checker Works Under the Hood" />
  <meta property="og:description" content="No backend. No logs. 100% client-side. Here’s exactly how this tool checks any domain instantly." />
  <meta property="og:url" content="{base}/blog/posts/post5" />
  <meta property="og:type" content="article" />
  <meta name="twitter:card" content="summary_large_image" />
</svelte:head>

<div class="container fade-in post-layout">
  <div class="breadcrumbs">
    <a href="{base}/blog">Blog</a> <span>/</span> <p>How This Tool Works</p>
  </div>

  <article class="prose">
    <h1>How AxelBase SSL Checker Works Under the Hood</h1>
    <p class="post-meta">Published: November 13, 2025 • 5 min read</p>

    <p>You enter a domain. Two seconds later, you see the certificate details. No server. No tracking. Here’s how it actually works.</p>

    <h2>Step 1: Smart Domain Extraction</h2>
    <p>Whether you paste <code>github.com</code>, <code>https://github.com</code>, or <code>https://github.com/explore</code> — the JavaScript <code>URL</code> API cleanly extracts just the hostname.</p>

    <h2>Step 2: Bypassing CORS with a Public Proxy</h2>
    <p>Direct browser requests to most SSL APIs are blocked by CORS. We route through a trusted public proxy (<code>api.codetabs.com</code>) that adds the required headers.</p>

    <h2>Step 3: Calling the Real API</h2>
    <p>The actual data comes from <code>ssl-checker.io</code> — a fast, reliable public API that returns issuer, validity dates, and days remaining.</p>

    <h2>Step 4: Parsing & Color Logic</h2>
    <p>Once JSON arrives, we extract:</p>
    <ul>
      <li><code>issuer_cn</code> → human-readable issuer</li>
      <li><code>valid_from</code> / <code>valid_till</code> → dates</li>
      <li><code>days_left</code> → badge color</li>
    </ul>

    <h2>Privacy by Design</h2>
    <p>No cookies. No localStorage. No analytics. Your input never leaves your browser except via the proxy — and even that is anonymized.</p>

    <blockquote class="border-start border-warning border-4 ps-4 py-3 my-5">
      <strong>100% client-side. 0% data collection.</strong>
    </blockquote>

    <p>This tool proves you don’t need a backend to build powerful, privacy-respecting web apps.</p>

    <p class="italic-note">Open source • MIT licensed • Built with SvelteKit</p>
  </article>
</div>