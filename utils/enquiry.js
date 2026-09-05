// Public Web3Forms access key already used by the existing contact form.
const accessKey = 'd1bd7e1e-e4a9-4452-a7ab-216176b86f74';

export async function sendEnquiry(fields) {
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 15000);
  try {
    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
      body: JSON.stringify({ ...fields, access_key: accessKey }),
      signal: controller.signal,
    });
    const result = await response.json();
    if (!response.ok || result.success !== true) throw new Error('Enquiry submission failed');
  } finally { clearTimeout(timeout); }
}
