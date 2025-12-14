// src/pages/main/registration.jsx
import React from "react";
import { Button } from '@mui/material';
import { GOOGLE_FORM_URL } from "../../config";

export default function Registration() {
  const rawUrl = GOOGLE_FORM_URL || "";
  const formUrl = rawUrl.trim();

  // If no form URL is configured, show a simple full-page message
  if (!formUrl) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#f0f0f0] px-4">
        <div className="max-w-lg w-full bg-white rounded-xl shadow-lg p-6 border border-black/5">
          <h1 className="text-2xl font-semibold text-gray-900 mb-2">
            Google Form not configured
          </h1>
          <p className="text-gray-600 text-sm">
            Please set <code className="font-mono">VITE_GOOGLE_FORM_URL</code> in your
            <code className="font-mono">.env</code> file and reload the app.
          </p>
        </div>
      </div>
    );
  }

  // Many Google services (including docs.google.com) set a Content-Security-Policy
  // header with `frame-ancestors 'none'` which prevents embedding in an <iframe>.
  // To avoid CSP framing errors we open the form in a new tab instead.
  return (
    <div className="min-h-screen w-full bg-[#f0f0f0] flex items-center justify-center px-4">
      <div className="max-w-2xl w-full bg-white rounded-xl shadow-lg p-6 border border-black/5 text-center">
        <h1 className="text-2xl font-semibold text-gray-900 mb-2">Event Registration</h1>
        <p className="text-gray-600 text-sm mb-4">
          The registration form will open in a new tab. Embedding Google Docs/Forms
          may be blocked by Google&apos;s Content Security Policy (frame-ancestors).
        </p>

        <div className="flex items-center justify-center gap-3">
          <a href={formUrl} target="_blank" rel="noopener noreferrer">
            <Button variant="contained" color="primary">Open Registration Form</Button>
          </a>

          <Button
            variant="outlined"
            onClick={() => window.open(formUrl, '_blank', 'noopener')}
          >
            Open in new tab
          </Button>
        </div>

        <p className="text-xs text-gray-500 mt-4">
          If you need the form embedded, host it on a service that allows framing
          or use an approved embed from Google (when available).
        </p>
      </div>
    </div>
  );
}
