// src/pages/main/registration.jsx
import React, { useState } from "react";
import { GOOGLE_FORM_URL } from "../../config";

export default function Registration() {
  const rawUrl = GOOGLE_FORM_URL || "";
  const formUrl = rawUrl.trim();
  const [isLoading, setIsLoading] = useState(true);

  // If no form URL is configured, show a simple full-page message
  if (!formUrl) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#f0f0f0] px-4">
        <div className="max-w-lg w-full bg-white rounded-xl shadow-lg p-6 border border-black/5">
          <h1 className="text-2xl font-semibold text-gray-900 mb-2">
            Google Form not configured
          </h1>
          <p className="text-gray-600 text-sm">
            Please set <code className="font-mono">VITE_GOOGLE_FORM_URL</code> in your{" "}
            <code className="font-mono">.env</code> file and reload the app.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen w-full bg-[#f0f0f0]">
      <div className="relative w-full h-screen">
        {/* Lightweight loading overlay */}
        {isLoading && (
          <div className="absolute inset-0 flex flex-col items-center justify-center z-10 bg-[#f0f0f0]">
            <div className="w-10 h-10 rounded-full border-4 border-gray-300 border-t-transparent animate-spin mb-3" />
            <p className="text-sm text-gray-600">Loading Google Form…</p>
          </div>
        )}

        <iframe
          title="Event Registration Form"
          src={formUrl}
          className="w-full h-full border-0"
          frameBorder="0"
          marginHeight="0"
          marginWidth="0"
          onLoad={() => setIsLoading(false)}
        >
          Loading…
        </iframe>
      </div>
    </div>
  );
}
