<script lang="ts">
  import { base } from '$app/paths';
</script>

<svelte:head>
  <title>Privacy Policy | AxelBase SSL Checker</title>
  <meta name="description" content="AxelBase SSL Checker collects zero personal data. 100% client-side, no logs, no tracking, no cookies — your privacy is absolute." />
  <meta property="og:title" content="Privacy Policy | AxelBase SSL Checker" />
  <meta property="og:description" content="We don’t collect, store, or transmit any data. Your domain checks stay on your device — always." />
  <meta property="og:url" content="{base}/privacy" />
  <meta property="og:type" content="website" />
  <meta name="twitter:card" content="summary_large_image" />
</svelte:head>

<div class="container fade-in post-layout">
  <div class="breadcrumbs">
    <a href="{base}/">Home</a> <span>/</span> <p>Privacy Policy</p>
  </div>

  <article class="prose">
    <h1>Privacy Policy</h1>
    <p class="post-meta">Effective Date: November 13, 2025</p>

    <p>At <strong>AxelBase SSL Checker</strong>, your privacy is not just respected — it is <em>guaranteed by design</em>. This tool was built from the ground up as a <strong>100% client-side web application</strong>, meaning <strong>nothing you enter ever leaves your browser</strong>.</p>

    <h2>We Collect Absolutely Nothing</h2>
    <p>We do <strong>not</strong> collect, store, log, or transmit:</p>
    <ul>
      <li>Domain names you check</li>
      <li>Your IP address</li>
      <li>Browser or device information</li>
      <li>Timestamps or usage patterns</li>
      <li>Cookies, localStorage, or any tracking pixels</li>
    </ul>
    <p>All SSL certificate lookups are performed directly in your browser using a public CORS proxy and API. Even the proxy sees only anonymized requests — we have no access to them.</p>

    <h2>How Your Data Stays Private</h2>
    <p>When you use AxelBase SSL Checker:</p>
    <ul>
      <li><strong>All processing happens locally</strong> using JavaScript</li>
      <li><strong>No backend servers</strong> are involved in data handling</li>
      <li><strong>No analytics</strong> (Google Analytics, Plausible, etc.)</li>
      <li><strong>No session persistence</strong> — refresh = clean slate</li>
    </ul>
    <p>This architecture ensures <strong>zero data retention</strong> and <strong>maximum privacy</strong> — even in the unlikely event of a breach, there is nothing to steal.</p>

    <h2>Third-Party Services</h2>
    <p>The only external request is to a <strong>public CORS proxy</strong> and the <strong>ssl-checker.io</strong> API — both are used solely to fetch certificate data. These services may log requests for abuse prevention, but <strong>we do not control or receive this data</strong>.</p>

    <h2>Your Rights & Compliance</h2>
    <p>Because no personal data is collected, we are compliant by default with:</p>
    <ul>
      <li><strong>GDPR</strong> (EU)</li>
      <li><strong>CCPA/CPRA</strong> (California)</li>
      <li><strong>LGPD</strong> (Brazil)</li>
      <li><strong>PIPEDA</strong> (Canada)</li>
    </ul>
    <p>No consent banners. No cookie notices. No data subject requests needed.</p>

    <h2>Children’s Privacy</h2>
    <p>This tool is safe and appropriate for all ages. No personal information is ever requested or stored.</p>

    <h2>Changes to This Policy</h2>
    <p>We may update this policy if new features are added. Any changes will be clearly announced on the site.</p>

    <p class="italic-note">
      <strong>Your trust is everything.</strong><br>
      That’s why we built a tool that proves privacy isn’t just a promise — it’s code.
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