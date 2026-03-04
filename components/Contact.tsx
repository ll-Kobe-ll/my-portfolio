export default function Contact() {
  // TODO: Replace with your email address
  const email = "kobemckinzie@gmail.com";

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 bg-gray-50 dark:bg-gray-900/50">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
          Contact
        </h2>
        <a
          href={`mailto:${email}`}
          className="inline-block px-6 py-3 rounded-lg bg-gray-900 dark:bg-white text-white dark:text-gray-900 font-medium hover:opacity-90 transition"
        >
          Email Me
        </a>
      </div>
    </section>
  );
}
