// src/app/services/page.tsx
import { services } from "../data/servicesData";

export default function ServicesPage() {
  return (
    <section className="space-y-12 mt-8 max-w-4xl mx-auto p-4">
      <h1 className="text-3xl font-bold">Our Services</h1>

      {services.map((service) => (
        <div key={service.slug} className="border-b pb-10">
          <h2 className="text-2xl font-semibold">{service.name}</h2>

          {service.image ? (
            <img
              src={`/images/${service.image}`}
              alt={service.name}
              className="w-full max-w-md my-4 rounded shadow"
            />
          ) : null}

          <p className="text-gray-700 mb-2">{service.shortDescription}</p>

          <p className="text-gray-600 mb-2">{service.longDescription}</p>

          {typeof service.price === "number" && (
            <p className="mt-2 font-medium text-lg text-black">
              Starting at ${service.price.toFixed(2)}
            </p>
          )}
        </div>
      ))}
    </section>
  );
}

