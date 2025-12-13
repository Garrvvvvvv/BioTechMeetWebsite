const raw = import.meta.env.VITE_API_BASE_URL || ""
export const API_BASE_URL = raw.replace(/\/+$/, "")

// Google Form embed URL (set in your .env as VITE_GOOGLE_FORM_URL)
// Example: VITE_GOOGLE_FORM_URL=https://docs.google.com/forms/d/e/<FORM_ID>/viewform?embedded=true
export const GOOGLE_FORM_URL = import.meta.env.VITE_GOOGLE_FORM_URL || ""
