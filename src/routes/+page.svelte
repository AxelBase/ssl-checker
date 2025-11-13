<script>
  import { getSslInfo } from '$lib/api';
  import { extractAndValidateDomain } from '$lib/validation';
  import { getStatusColor } from '$lib/utils';

  let input = '';
  let extracted = { valid: false, domain: null, message: null };
  let loading = false;
  let error = '';
  let result = null;

  // Real-time extraction & validation
  $: extracted = extractAndValidateDomain(input);
  $: validInput = extracted.valid;

  async function checkSsl() {
    error = '';
    result = null;
    loading = true;
    console.log(`Initiating SSL check for input: ${input}`);

    try {
      const data = await getSslInfo(extracted.domain);
      console.log('API data received:', data);

      result = {
        domain: data.host,
        issuer: data.issuer_cn,
        validFrom: data.valid_from,
        expiry: data.valid_till,
        daysRemaining: data.days_left,
        statusColor: getStatusColor(data.days_left)
      };
      console.log('Processed result:', result);
    } catch (e) {
      console.error('Check failed:', e.message);
      error = e.message || 'An error occurred while checking the certificate.';
    } finally {
      loading = false;
    }
  }

  // Fade-in on scroll action
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

<div class="form-container" use:fadeInOnScroll>
  <div class="form-panel glass-panel">
    <h1 class="page-title">SSL Certificate Expiry Checker</h1>

    <div class="form-group mb-3">
      <label for="domain" class="form-label">Enter Domain Name or URL</label>
      <input
        type="text"
        id="domain"
        class="form-input"
        bind:value={input}
        placeholder="e.g., https://example.com"
        aria-describedby="domainHelp"
        disabled={loading}
      />
      {#if input && !validInput}
        <small id="domainHelp" class="form-feedback">
          {extracted.message}. Please enter a valid domain or URL.
        </small>
      {/if}
    </div>

    <button class="submit-button" disabled={!validInput || loading} on:click={checkSsl}>
      {#if loading}
        Checking...
      {:else}
        Check SSL Certificate
      {/if}
    </button>
  </div>
</div>

{#if loading}
  <div class="loader-container" use:fadeInOnScroll>
    <div class="loader" role="status">
      <span class="visually-hidden">Loading...</span>
    </div>
    <p>Checking certificate...</p>
  </div>
{/if}

{#if error}
  <div class="error-panel" role="alert" use:fadeInOnScroll>
    <strong>Error:</strong> {error}
  </div>
{/if}

{#if result}
  <div class="result-card" use:fadeInOnScroll>
    <div class="result-card-inner glass-panel">
      <div class="result-header">
        <h5 class="result-header-title">Results for {result.domain}</h5>
      </div>
      <div class="result-body">
        <p><strong>Issuer:</strong> {result.issuer}</p>
        <p><strong>Valid From:</strong> {result.validFrom}</p>
        <p><strong>Expiry Date:</strong> {result.expiry}</p>
        <p><strong>Days Remaining:</strong> {result.daysRemaining}</p>
        <span class="status-badge {result.statusColor}">
          {result.daysRemaining > 0 ? 'Valid' : 'Expired'}
        </span>
      </div>
    </div>
  </div>
{/if}

<!-- ========== ABOUT SECTION ========== -->
<section id="about" class="info-section" use:fadeInOnScroll>
  <h2>About AxelBase SSL Certificate Checker</h2>
  <p class="post-meta">Built for security-conscious developers, sysadmins, and website owners</p>

  <p>
    <strong>AxelBase</strong> was born from a simple but critical realization: <em>expired SSL certificates cause real damage</em> — broken trust, lost traffic, SEO penalties, and even full outages. Yet most monitoring tools are either overpriced, bloated, or require accounts.
  </p>

  <p>
    We decided to fix that.
  </p>

  <p>
    The <strong>AxelBase SSL Certificate Checker</strong> is a <strong>100% client-side</strong>, open-source, privacy-first web tool that runs entirely in your browser. No backend. No tracking. No data collection. When you check a domain, <strong>nothing leaves your device except through an anonymous public proxy</strong> — and even then, your IP is hidden.
  </p>

  <p>
    Unlike traditional services, we don’t ask for your email, don’t store your queries, and don’t sell your data. This tool exists for one reason: <strong>to help you keep the web secure — instantly and for free.</strong>
  </p>

  <p>
    Whether you manage one personal site or hundreds of enterprise domains, AxelBase gives you real-time visibility into:
  </p>
  <ul class="feature-list">
    <li>Certificate issuer and validation status</li>
    <li>Exact validity dates (not just "expires soon")</li>
    <li>Days remaining with color-coded urgency</li>
    <li>Support for full URLs (including subdomains and paths)</li>
  </ul>

  <p>
    Built with modern SvelteKit and deployable anywhere — GitHub Pages, Netlify, Vercel, Cloudflare Pages — this tool is designed to be <strong>forked, branded, and used by anyone</strong>. Want your own version with your logo? Just fork the repo and deploy in under 5 minutes.
  </p>

  <p>
    We believe security tools should be <strong>simple, transparent, and free</strong>. That’s why AxelBase will <em>never</em> have ads, paywalls, or tracking scripts.
  </p>

  <p class="italic-note">
    <strong>Your security matters.</strong> Check with confidence — no strings attached.
  </p>
</section>

<!-- ========== HOW TO USE SECTION ========== -->
<section id="how-to-use" class="info-section" use:fadeInOnScroll>
  <h2>How to Use the SSL Checker</h2>
  <p class="post-meta">Three steps to full certificate transparency</p>

  <p>
    Using AxelBase is intentionally simple — because checking SSL health <em>shouldn’t</em> require a manual.
  </p>

  <h3>Step 1: Enter Your Domain or URL</h3>
  <p>
    Type any of the following into the input field:
  </p>
  <ul>
    <li><code>github.com</code></li>
    <li><code>https://github.com</code></li>
    <li><code>https://www.github.com/login</code></li>
    <li><code>chatllm.abacus.ai</code></li>
  </ul>
  <p>
    Our smart parser automatically extracts the correct hostname — even from complex URLs with paths, query strings, or ports.
  </p>

  <h3>Step 2: Click “Check SSL Certificate”</h3>
  <p>
    Once a valid domain is detected, the button turns blue and becomes clickable. The check runs instantly using a secure, anonymous proxy to bypass browser restrictions.
  </p>

  <h3>Step 3: View Instant Results</h3>
  <p>
    Within 1–2 seconds, you’ll see a clean, color-coded report showing:
  </p>
  <ul class="feature-list">
    <li><strong>Domain</strong> — Confirmed hostname checked</li>
    <li><strong>Issuer</strong> — CA that issued the certificate (e.g., Let’s Encrypt, Sectigo)</li>
    <li><strong>Valid From / Expiry Date</strong> — Exact dates in your local format</li>
    <li><strong>Days Remaining</strong> — With visual urgency:</li>
    <ul style="margin-top: 0.5rem;">
      <li><span class="status-badge success">Green</span> More than 30 days (safe)</li>
      <li><span class="status-badge warning">Yellow</span> 15–30 days (plan renewal)</li>
      <li><span class="status-badge danger">Red</span> Less than 15 days or expired (urgent)</li>
    </ul>
  </ul>

  <h3>Pro Tips</h3>
  <p>
    <strong>Bookmark this page</strong> — check your entire portfolio weekly.<br>
    <strong>Share with your team</strong> — no login required.<br>
    <strong>Deploy your own version</strong> — perfect for internal tools or client portals.
  </p>

  <p class="italic-note">
    Security shouldn’t be complicated. With AxelBase, it takes <strong>three seconds</strong> to know your site is safe.
  </p>
</section>

<!-- ========== FAQ SECTION ========== -->
<section id="faq" class="info-section" use:fadeInOnScroll>
  <h2>Frequently Asked Questions</h2>

  <h3>Is this tool really free?</h3>
  <p>
    <strong>Yes — forever.</strong> No ads, no paywall, no premium tier. AxelBase is open-source (MIT licensed) and built to stay free.
  </p>

  <h3>Do you store or log the domains I check?</h3>
  <p>
    <strong>No.</strong> All processing happens in your browser. We don’t have servers, databases, or logs. Even the third-party proxy we use sees only anonymized requests.
  </p>

  <h3>How accurate is the certificate data?</h3>
  <p>
    We query live certificate information directly from public sources in real time. The data is as accurate as tools like SSL Labs or crt.sh — often within seconds of issuance.
  </p>

  <h3>Why do I see “Invalid domain format”?</h3>
  <p>
    The tool only accepts valid hostnames. Examples of <strong>accepted</strong> inputs:
  </p>
  <ul>
    <li><code>example.com</code></li>
    <li><code>sub.domain.co.uk</code></li>
    <li><code>https://app.example.com/dashboard</code></li>
  </ul>
  <p>
    Invalid: <code>http://</code>, IP addresses, localhost, or malformed URLs.
  </p>

  <h3>Can I use this for internal or private domains?</h3>
  <p>
    Not currently — this tool only checks publicly accessible certificates. For internal domains, consider self-hosting with a custom backend or using <code>openssl s_client</code>.
  </p>

  <h3>Can I add this to my own website or dashboard?</h3>
  <p>
    <strong>Absolutely!</strong> The entire project is open-source. Fork it on GitHub, customize the branding, and deploy your own branded version in minutes.
  </p>

  <h3>Why use a proxy instead of a backend?</h3>
  <p>
    To keep it <strong>static, fast, and private</strong>. No server costs, no maintenance, no data exposure — and it works perfectly on GitHub Pages.
  </p>

  <h3>What if the proxy is down?</h3>
  <p>
    We use reliable public proxies, but you can easily swap in alternatives (corsproxy.io, thingproxy, etc.) by editing one line in <code>api.js</code>.
  </p>

  <p class="italic-note">
    Have a question we didn’t answer? Open an issue on GitHub — we’re here to help.
  </p>
</section>

<style>
  :global(body) { background: #0f172a; color: #e2e8f0; }
  .form-container { max-width: 600px; margin: 3rem auto; padding: 0 1rem; }
  .glass-panel {
    background: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(10px);
    border-radius: 16px;
    padding: 2rem;
    box-shadow: 0 8px 32px rgba(0,0,0,0.3);
    border: 1px solid rgba(255,255,255,0.1);
  }
  .page-title { font-size: 2.5rem; text-align: center; margin-bottom: 1.5rem; background: linear-gradient(90deg, #60a5fa, #a78bfa); -webkit-text-fill-color: transparent; }
  .form-input { background: rgba(255,255,255,0.1); border: 1px solid rgba(255,255,255,0.2); color: white; }
  .form-input::placeholder { color: rgba(255,255,255,0.6); }
  .submit-button { background: linear-gradient(45deg, #3b82f6, #8b5cf6); border: none; padding: 1rem; font-size: 1.1rem; border-radius: 12px; }
  .submit-button:disabled { background: #475569; }
  .loader { width: 50px; height: 50px; border: 5px solid #334155; border-top: 5px solid #60a5fa; border-radius: 50%; animation: spin 1s linear infinite; }
  @keyframes spin { to { transform: rotate(360deg); } }
  .error-panel { background: rgba(239, 68, 68, 0.2); border: 1px solid #f87171; padding: 1rem; border-radius: 12px; margin: 1rem 0; }
  .status-badge { padding: 0.5rem 1rem; border-radius: 9999px; font-weight: bold; }
  .status-badge.success { background: #22c55e; }
  .status-badge.warning { background: #f59e0b; }
  .status-badge.danger { background: #ef4444; }
  .placeholder-section { max-width: 800px; margin: 4rem auto; padding: 2rem; opacity: 0; transition: opacity 0.8s ease; }
  .fade-in-section.is-visible { opacity: 1; }
  .form-feedback { color: #fca5a5; }
</style>