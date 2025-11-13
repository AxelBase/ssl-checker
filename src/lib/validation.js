export function extractAndValidateDomain(input) {
  let domain = input.trim().toLowerCase();
  
  // If starts with http:// or https://, extract hostname
  if (domain.startsWith('http://') || domain.startsWith('https://')) {
    try {
      const url = new URL(domain);
      domain = url.hostname;
    } catch (e) {
      return { valid: false, domain: null, message: 'Invalid URL format' };
    }
  }
  
  // Basic domain validation: letters, numbers, hyphens, dots; ends with TLD (2+ chars)
  const regex = /^([a-z0-9]+(-[a-z0-9]+)*\.)+[a-z]{2,}$/i;
  if (!regex.test(domain)) {
    return { valid: false, domain: null, message: 'Invalid domain format' };
  }
  
  return { valid: true, domain, message: null };
}