<script>
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
                <div class="col-md-6 mb-3"><strong>Expires:</strong> {result.expiry}</div>
                <div class="col-md-6 mb-3"><strong>Days Left:</strong> {result.daysRemaining}</div>
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

  <!-- Placeholder Sections -->
  <section id="about" class="mt-5 py-5">
    <h2>About</h2>
    <p>AxelBase SSL Checker is a free, open-source tool to monitor certificate expiry dates.</p>
  </section>

  <section id="how-to-use" class="mt-5 py-5">
    <h2>How to Use</h2>
    <p>Just enter any domain or full URL and click "Check SSL Certificate". Works instantly.</p>
  </section>

  <section id="faq" class="mt-5 py-5">
    <h2>FAQ</h2>
    <p><strong>Is it private?</strong> Yes — no logs, no tracking, no storage.</p>
  </section>
</div>