export default function ContactPage() {
  return (
    <Layout>
      <section className="space-y-8 mt-8 max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold">Get in Touch</h1>

        <p>
          Have a question or need to schedule a repair? Reach out and we’ll get back to you as soon as possible.
        </p>

        <div className="space-y-2 text-lg">
          <p>
            <strong>Email:</strong>{" "}
            <a href="mailto:your@email.com" className="underline">
              your@email.com
            </a>
          </p>
          <p>
            <strong>Phone:</strong>{" "}
            <a href="tel:+18005551234" className="underline">
              (800) 555-1234
            </a>
          </p>
        </div>

        <hr className="my-6" />

        <h2 className="text-2xl font-semibold">Contact Form</h2>
        <p>
          Prefer to reach out online? Fill out the form below and we’ll follow up within one business day.
        </p>

        {/* Optional form embed (Tally, Formspree, etc.) */}
        <div className="mt-4">
          {/* Example Tally Embed */}
          <iframe
            data-tally-src="https://tally.so/embed/yourformid?alignLeft=1&hideTitle=1&transparentBackground=1"
            loading="lazy"
            width="100%"
            height="500"
            frameBorder="0"
            title="Contact Form"
          ></iframe>
        </div>
      </section>
    </Layout>
  );
}
