// pages/services.tsx
import Layout from "@/components/Layout";
import { SERVICES_QUERY } from "@/lib/queries";
import { request } from "graphql-request";

export default async function ServicesPage() {
  const { services } = await request(
    "https://us-west-2.cdn.hygraph.com/content/cm8xmxs7b04u608w27p42y13t/master",
    SERVICES_QUERY
  );

  return (
    <Layout>
      <section className="space-y-8 mt-8">
        <h1 className="text-3xl font-bold">Our Services</h1>
        {services.map((service: any) => (
          <div key={service.slug} className="border-b pb-6 mb-6">
            <h2 className="text-2xl font-semibold">{service.title}</h2>
            <div
              className="prose"
              dangerouslySetInnerHTML={{ __html: service.description.html }}
            />
            {service.priceInfo && (
              <div
                className="prose mt-2 text-sm text-gray-700"
                dangerouslySetInnerHTML={{ __html: service.priceInfo.html }}
              />
            )}
          </div>
        ))}
      </section>
    </Layout>
  );
}

