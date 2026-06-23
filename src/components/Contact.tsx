import { useState } from "react";

export default function Contact() {
  const email = "kobemckinzie@gmail.com";
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Clipboard unavailable (e.g. non-secure context) — mailto link is the fallback.
    }
  };

  return (
    <section id="contact" className="py-24 px-6 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
          Let&apos;s Work Together
        </h2>
        <p className="text-gray-500 dark:text-gray-400 mb-8 max-w-md leading-relaxed">
          Have a project in mind? Email me and I&apos;ll get back to you.
        </p>
        <div className="flex flex-wrap items-center gap-3">
          <a
            href={`mailto:${email}`}
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-gray-900 dark:bg-white text-white dark:text-gray-900 font-semibold hover:opacity-90 transition shadow-lg shadow-gray-900/10"
          >
            Email Me →
          </a>
          <button
            type="button"
            onClick={copyEmail}
            className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl border border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 font-medium hover:bg-gray-100 dark:hover:bg-gray-800 transition"
          >
            {copied ? "Copied!" : email}
          </button>
        </div>
        <p className="mt-3 text-xs text-gray-400 dark:text-gray-500">
          Button not opening your mail app? Click the address to copy it.
        </p>
      </div>
    </section>
  );
}
