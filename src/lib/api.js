export async function getSslInfo(domain) {
  const originalUrl = `https://ssl-checker.io/api/v1/check/${domain}`;
  const proxyUrl = `https://api.codetabs.com/v1/proxy?quest=${encodeURIComponent(originalUrl)}`;
  
  console.log(`Starting SSL check for domain: ${domain}`);
  console.log(`Using proxy URL: ${proxyUrl}`);
  
  try {
    const response = await fetch(proxyUrl);
    console.log('Fetch response received:', {
      status: response.status,
      ok: response.ok,
      headers: Array.from(response.headers.entries())
    });
    
    if (!response.ok) {
      console.error('Proxy fetch failed with status:', response.status);
      throw new Error(`Proxy request failed with status ${response.status}`);
    }
    
    const data = await response.json();
    console.log('Parsed API data:', data);
    
    if (data.status !== 'ok') {
      console.error('API status error:', data.status, data.result);
      throw new Error(data.result?.reason || 'Failed to check certificate');
    }
    
    const cert = data.result;
    if (!cert.cert_valid && !cert.cert_exp) {
      console.warn('Certificate invalid for unknown reason');
      throw new Error('Certificate is invalid or not found');
    }
    // If cert_exp true (expired), still return cert for display
    
    return cert;
  } catch (fetchError) {
    console.error('Fetch error:', fetchError.message, fetchError.stack);
    throw fetchError;
  }
}