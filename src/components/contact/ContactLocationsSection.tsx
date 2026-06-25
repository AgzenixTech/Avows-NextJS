import Image from "next/image";
import { contactLocations } from "@/content/contact";
import Container from "@/components/layout/Container";

export default function ContactLocationsSection() {
  return (
    <section className="contact-locations" aria-label="Global office locations">
      <Container>
        <h2 className="contact-locations__title">{contactLocations.title}</h2>
        <div className="contact-locations__list">
          {contactLocations.items.map((location) => (
            <article key={location.id} id={location.id} className="contact-location">
              <div className="contact-location__flag">
                <Image
                  src={location.flag}
                  alt=""
                  width={318}
                  height={159}
                  className="contact-location__flag-image"
                />
              </div>
              <h3 className="contact-location__name">{location.name}</h3>
              <div className="contact-location__details">
                <p>
                  <strong>{location.company}</strong>
                </p>
                <p>{location.address}</p>
                <p>Tel: {location.phone}</p>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
