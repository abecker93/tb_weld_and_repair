// src/app/services/page.tsx
import { request } from "graphql-request";
import { SERVICES_QUERY } from "@/lib/queries";
import { Service } from "@/types";

export default async function ServicesPage() {
  const { services }: { services: Service[] } = await request(
    "https://us-west-2.cdn.hygraph.com/content/cm8xmxs7b04u608w27p42y13t/master",
    SERVICES_QUERY
  );

  return (
    <section className="space-y-12 mt-8 max-w-4xl mx-auto p-4">
      <h1 className="text-3xl font-bold">Our Services</h1>

      {services.map((service) => (
        <div key={service.name} className="border-b pb-10">
          <h2 className="text-2xl font-semibold">{service.name}</h2>

          {service.image?.url && (
            <img
              src={service.image.url}
              alt={service.image.fileName || service.name}
              className="w-full max-w-md my-4 rounded shadow"
            />
          )}

          {service.description && (
            <p className="text-gray-700 mb-2">{service.description}</p>
          )}

          {service.descriptionFull?.html && (
            <div
              className="prose"
              dangerouslySetInnerHTML={{
                __html: service.descriptionFull.html,
              }}
            />
          )}

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

