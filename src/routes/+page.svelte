<script lang="ts">
    import { base } from '$app/paths';
  import { getSslInfo } from '$lib/api';
  import { extractAndValidateDomain } from '$lib/validation';
  import { getStatusColor } from '$lib/utils';

  let input = '';
  let extracted = { valid: false, domain: null, message: null };
  let loading = false;
  let error = '';
  let result = null;

  $: extracted = extractAndValidateDomain(input);
  $: validInput = extracted.valid;

  async function checkSsl() {
    error = '';
    result = null;
    loading = true;
    try {
      const data = await getSslInfo(extracted.domain);
      result = {
        domain: data.host,
        issuer: data.issuer_cn,
        validFrom: data.valid_from,
        expiry: data.valid_till,
        daysRemaining: data.days_left,
        statusColor: getStatusColor(data.days_left)
      };
    } catch (e) {
      error = e.message || 'An error occurred while checking the certificate.';
    } finally {
      loading = false;
    }
  }
</script>

<div class="container py-5">
  <!-- Hero Section -->
  <section id="home" class="text-center mb-5">
    <h1 class="display-4 fw-bold mb-4">SSL Certificate Expiry Checker</h1>
    <p class="lead text-muted">Instantly check when any domain's SSL certificate expires</p>
  </section>

  <!-- Checker Form -->
  <div class="row justify-content-center">
    <div class="col-lg-8">
      <div class="card border-0 shadow-lg">
        <div class="card-body p-5">
          <div class="mb-4">
            <label for="domain" class="form-label fs-5">Enter Domain or Full URL</label>
            <input 
              type="text" 
              id="domain" 
              class="form-control form-control-lg" 
              bind:value={input} 
              placeholder="github.com or https://example.com/path"
            />
            {#if input && !validInput}
              <small class="text-danger mt-2 d-block">{extracted.message}</small>
            {/if}
          </div>

          <button 
            class="btn btn-primary btn-lg w-100" 
            disabled={!validInput || loading} 
            on:click={checkSsl}
          >
            {#if loading}
              <span class="spinner-border spinner-border-sm me-2" role="status"></span>
              Checking...
            {:else}
              Check SSL Certificate
            {/if}
          </button>

          {#if error}
            <div class="alert alert-danger mt-4">{error}</div>
          {/if}

          {#if result}
            <div class="mt-5 p-4 bg-dark rounded">
              <h3 class="text-center mb-4">Results for <strong>{result.domain}</strong></h3>
              <div class="row text-center">
                <div class="col-md-6 mb-3"><strong>Issuer:</strong> {result.issuer}</div>
                <div class="col-md-6 mb-3"><strong>Valid From:</strong> {result.validFrom}</div>
                <div class="col-md-6 mb-3"><strong>Expiry Date:</strong> {result.expiry}</div>
                <div class="col-md-6 mb-3"><strong>Days Remaining:</strong> {result.daysRemaining}</div>
              </div>
              <div class="text-center mt-4">
                <span class="badge bg-{result.statusColor} fs-5 px-4 py-3">
                  {result.daysRemaining > 0 ? 'Valid' : 'Expired'}
                </span>
              </div>
            </div>
          {/if}
        </div>
      </div>
    </div>
  </div>

  <!-- About Section -->
  <section id="about" class="mt-5 py-5 bg-dark rounded shadow-lg overflow-hidden">
    <div class="container">
      <div class="row align-items-center">
        <div class="col-lg-6">
          <h2 class="display-6 fw-bold text-warning mb-4">About AxelBase SSL Checker</h2>
          <p class="lead">
            AxelBase SSL Checker is a <strong>100% client-side</strong>, <strong>open-source</strong>, and <strong>completely free</strong> web tool designed to help developers, sysadmins, and website owners instantly verify the SSL/TLS certificate status of any public domain — without compromising privacy.
          </p>
          <p>
            Built in 2025 using modern SvelteKit and deployed via GitHub Pages, this tool was created out of frustration with bloated, tracking-heavy alternatives. We believe privacy and performance should never be traded off.
          </p>
          <p>
            Every single operation — from domain parsing to certificate lookup — happens <strong>entirely in your browser</strong>. No backend. No logs. No cookies. No data collection. Even the public API calls are routed through anonymized CORS proxies that we don’t control or monitor.
          </p>
          <p>
            Whether you're checking your own sites, auditing a client’s infrastructure, or teaching web security concepts, AxelBase delivers accurate, real-time results in under two seconds.
          </p>
          <p>
            This project is proudly <strong>MIT-licensed</strong> and hosted on GitHub. Contributions, forks, and improvements from the community are not just welcome — they’re encouraged.
          </p>
          <div class="mt-4">
            <a href="https://github.com/AxelBase/ssl-checker" target="_blank" class="btn btn-outline-warning btn-lg me-3">
              View on GitHub
            </a>
            <a href="{base}/blog" class="btn btn-warning btn-lg">Read Our Blog</a>
          </div>
        </div>
        <div class="col-lg-6 text-center mt-5 mt-lg-0">
          <div class="bg-black rounded-4 p-5 shadow">
            <h3 class="text-warning">Why We Built This</h3>
            <p class="text-secondary fs-5">
              "An expired certificate shouldn’t cost anyone their reputation — or their revenue."
            </p>
            <p class="text-muted small mt-4">
              — The AxelBase Team • November 2025
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- How to Use Section -->
  <section id="how-to-use" class="mt-5 py-5">
    <div class="container">
      <h2 class="display-6 fw-bold text-warning text-center mb-5">How to Use AxelBase SSL Checker</h2>
      <div class="row g-5">
        <div class="col-md-4">
          <div class="text-center">
            <div class="bg-warning text-black rounded-circle d-inline-flex align-items-center justify-content-center mb-4" style="width: 80px; height: 80px; font-size: 2rem; font-weight: bold;">
              1
            </div>
            <h4 class="text-warning">Enter Any Domain or URL</h4>
            <p class="text-secondary">
              Type a bare domain like <code>github.com</code>, or paste a full URL such as <code>https://randomwordgenerator.com/color.php</code>. Our smart parser extracts the correct hostname automatically.
            </p>
          </div>
        </div>
        <div class="col-md-4">
          <div class="text-center">
            <div class="bg-warning text-black rounded-circle d-inline-flex align-items-center justify-content-center mb-4" style="width: 80px; height: 80px; font-size: 2rem; font-weight: bold;">
              2
            </div>
            <h4 class="text-warning">Click “Check SSL Certificate”</h4>
            <p class="text-secondary">
              The button only activates when a valid domain is detected. Once clicked, your browser securely queries public certificate data via a trusted CORS proxy — no server of ours ever sees your request.
            </p>
          </div>
        </div>
        <div class="col-md-4">
          <div class="text-center">
            <div class="bg-warning text-black rounded-circle d-inline-flex align-items-center justify-content-center mb-4" style="width: 80px; height: 80px; font-size: 2rem; font-weight: bold;">
              3
            </div>
            <h4 class="text-warning">Get Instant Results</h4>
            <p class="text-secondary">
              Within seconds, you’ll see the certificate issuer, validity period, exact expiry date, days remaining, and a color-coded status badge: <span class="badge bg-success">Valid</span> (green), <span class="badge bg-warning">Expiring Soon</span> (yellow), or <span class="badge bg-danger">Expired</span> (red).
            </p>
          </div>
        </div>
      </div>
      <div class="text-center mt-5">
        <p class="text-muted fs-5">
          That’s it. No signup. No limits. No tracking.<br>
          <strong>Just paste → click → know.</strong>
        </p>
      </div>
    </div>
  </section>

  <!-- FAQ Section (Native <details>) -->
  <section id="faq" class="mt-5 py-5 bg-dark rounded shadow-lg">
    <div class="container">
      <h2 class="display-6 fw-bold text-warning text-center mb-5">Frequently Asked Questions</h2>
      <div class="row">
        <div class="col-lg-10 mx-auto">
          <details class="mb-3 bg-black border border-secondary rounded p-3">
            <summary class="text-light fw-bold cursor-pointer">Is my data private and secure?</summary>
            <p class="text-secondary mt-3">
              <strong>Yes — absolutely.</strong> Nothing you enter ever leaves your device except as an anonymized request to a public API. We don’t log, store, or track anything. No cookies. No analytics. Full details in our <a href="{base}/privacy" class="text-warning">Privacy Policy</a>.
            </p>
          </details>

          <details class="mb-3 bg-black border border-secondary rounded p-3">
            <summary class="text-light fw-bold cursor-pointer">Why do you use a CORS proxy?</summary>
            <p class="text-secondary mt-3">
              The SSL API we use doesn’t send CORS headers, so browsers block direct requests. We route through a trusted public proxy that adds the necessary headers. It sees only the domain — never your IP or session.
            </p>
          </details>

          <details class="mb-3 bg-black border border-secondary rounded p-3">
            <summary class="text-light fw-bold cursor-pointer">Can I use this for internal/private domains?</summary>
            <p class="text-secondary mt-3">
              No. This tool only works with publicly resolvable domains that have certificates exposed via standard TLS handshakes (port 443). Internal IPs, localhost, or self-signed certs cannot be checked.
            </p>
          </details>

          <details class="mb-3 bg-black border border-secondary rounded p-3">
            <summary class="text-light fw-bold cursor-pointer">Is there a rate limit or usage cap?</summary>
            <p class="text-secondary mt-3">
              No official limit from us — but the public proxy and API may throttle excessive automated use. For personal and manual checks, you’ll never hit limits.
            </p>
          </details>

          <details class="mb-3 bg-black border border-secondary rounded p-3">
            <summary class="text-light fw-bold cursor-pointer">Can I contribute or run my own version?</summary>
            <p class="text-secondary mt-3">
              Absolutely! The entire project is <strong>MIT-licensed</strong> on GitHub. Fork it, modify it, self-host it — it’s yours. Pull requests welcome!
            </p>
          </details>
        </div>
      </div>
    </div>
  </section>
</div>