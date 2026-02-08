// ============================================
// GEMINI API CONFIGURATION
// ============================================

/*
 * IMPORTANT INSTRUCTIONS:
 * 
 * 1. GET YOUR API KEY:
 *    - Go to: https://aistudio.google.com/app/apikey
 *    - Sign in with your Google account
 *    - Click "Create API Key"
 *    - Copy your new API key
 * 
 * 2. REPLACE THE API KEY:
 *    - Replace "YOUR_API_KEY_HERE" below with your actual API key
 *    - Keep the quotes around the key
 * 
 * 3. SECURITY WARNING:
 *    ⚠️ This API key will be visible in the browser!
 *    ⚠️ Only use this for personal/learning projects
 *    ⚠️ DO NOT share this file publicly
 *    ⚠️ DO NOT upload to GitHub (make repo private)
 * 
 * 4. REVOKE OLD KEY:
 *    - If you previously exposed a key, revoke it immediately
 *    - Go to: https://aistudio.google.com/app/apikey
 *    - Delete the old key
 *    - Generate a new one
 */

// 👇 PUT YOUR GEMINI API KEY HERE 👇
window.GEMINI_API_KEY = "YOUR_API_KEY_HERE";

// ============================================
// API CONFIGURATION (Advanced - Optional)
// ============================================

// Model selection (you can change this if needed)
window.GEMINI_MODEL = "gemini-2.5-flash";

// API endpoint (don't change unless you know what you're doing)
window.GEMINI_BASE_URL = "https://generativelanguage.googleapis.com/v1/models";

// ============================================
// VALIDATION
// ============================================

// Check if API key is set
if (window.GEMINI_API_KEY === "YOUR_API_KEY_HERE") {
    console.warn("⚠️ WARNING: Gemini API key not configured!");
    console.warn("📝 Please edit config.js and add your API key");
    console.warn("🔗 Get your key at: https://aistudio.google.com/app/apikey");
}

// ============================================
// USAGE EXAMPLE
// ============================================

/*
 * This configuration file is automatically loaded by index.html
 * 
 * The API key is accessed in index.html as:
 * window.GEMINI_API_KEY
 * 
 * No need to modify anything else!
 */
