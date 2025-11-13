<script lang="ts">
  import { base } from '$app/paths';
</script>

<svelte:head>
  <title>Terms & Conditions | AxelBase SSL Checker</title>
  <meta name="description" content="Terms of use for AxelBase SSL Checker — a free, open-source, client-side SSL certificate monitoring tool." />
  <meta property="og:title" content="Terms & Conditions | AxelBase SSL Checker" />
  <meta property="og:description" content="By using this free tool, you agree to our simple, fair terms." />
  <meta property="og:url" content="{base}/terms" />
  <meta property="og:type" content="website" />
  <meta name="twitter:card" content="summary_large_image" />
</svelte:head>

<div class="container fade-in post-layout">
  <div class="breadcrumbs">
    <a href="{base}/">Home</a> <span>/</span> <p>Terms & Conditions</p>
  </div>

  <article class="prose">
    <h1>Terms & Conditions</h1>
    <p class="post-meta">Last Updated: November 13, 2025</p>

    <p>Welcome to <strong>AxelBase SSL Checker</strong>, a free, open-source, client-side web tool. By using this service, you agree to the following terms.</p>

    <h2>1. Nature of Service</h2>
    <p>AxelBase SSL Checker is a <strong>public utility</strong> that allows anyone to check the SSL/TLS certificate status of any public domain. It operates <strong>entirely in your browser</strong> and uses third-party public APIs via CORS proxies.</p>

    <h2>2. No Warranty</h2>
    <p>This tool is provided <strong>“as is”</strong> and <strong>without any warranty</strong> — express or implied. We do not guarantee:</p>
    <ul>
      <li>100% uptime or availability</li>
      <li>Accuracy of third-party certificate data</li>
      <li>That the tool will work in all browsers or network conditions</li>
    </ul>
    <p>We are not responsible for any consequences resulting from reliance on this tool.</p>

    <h2>3. Acceptable Use</h2>
    <p>You agree not to:</p>
    <ul>
      <li>Use automated scripts to overload the third-party APIs</li>
      <li>Attempt to reverse-engineer or interfere with the tool</li>
      <li>Use the tool for illegal or malicious purposes</li>
    </ul>
    <p>Abuse may result in temporary or permanent blocking via browser fingerprinting.</p>

    <h2>4. Limitation of Liability</h2>
    <p>In no event shall AxelBase or its developers be liable for any damages — including lost profits, business interruption, or data loss — arising from the use or inability to use this tool.</p>

    <h2>5. Third-Party Services</h2>
    <p>This tool relies on public APIs and CORS proxies. Their availability and terms are outside our control. We may change proxies at any time to maintain functionality.</p>

    <h2>6. Intellectual Property</h2>
    <p>The source code is licensed under the <strong>MIT License</strong>. You are free to fork, modify, and redistribute it. The name “AxelBase” and logo are reserved.</p>

    <h2>7. Modifications</h2>
    <p>We reserve the right to modify or discontinue the service at any time without notice.</p>

    <h2>8. Governing Law</h2>
    <p>These terms are governed by the laws of the Republic of Cyprus, without regard to conflict of law principles.</p>

    <p class="italic-note">
      <strong>Thank you for using AxelBase SSL Checker.</strong><br>
      Built with care — for the web community.
    </p>
  </article>
</div>

<style>
  .post-layout { max-width: 800px; padding: 3rem 1rem; }
  .breadcrumbs a { color: #F3A505; }
  .prose h1, .prose h2 { color: #F3A505; }
  .prose ul { list-style-type: '→ '; }
  .prose ul li::marker { color: #F3A505; }
  .italic-note { font-style: italic; text-align: center; color: #aaa; margin-top: 4rem; font-size: 1.1rem; }
</style>