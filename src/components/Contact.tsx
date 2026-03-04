export default function Contact() {
  const email = "kobemckinzie@gmail.com";

  return (
    <section id="contact" className="py-24 px-6 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
          Let&apos;s Work Together
        </h2>
        <p className="text-gray-500 dark:text-gray-400 mb-8 max-w-md leading-relaxed">
          Have a project in mind? Drop me an email and I&apos;ll get back to you.
        </p>
        <a
          href={`mailto:${email}`}
          className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-gray-900 dark:bg-white text-white dark:text-gray-900 font-semibold hover:opacity-90 transition shadow-lg shadow-gray-900/10"
        >
          Email Me →
        </a>
      </div>
    </section>
  );
}
