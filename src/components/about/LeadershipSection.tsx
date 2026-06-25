import Image from "next/image";
import { leadershipTeams } from "@/content/about";
import Container from "@/components/layout/Container";

type TeamMember = {
  name: string;
  role: string;
  image: string;
};

function LeaderCard({ member }: { member: TeamMember }) {
  return (
    <article className="leader-card">
      <div className="leader-card__inner">
        <Image
          src={member.image}
          alt={member.name}
          width={500}
          height={500}
          className="leader-card__photo"
          unoptimized
        />
        <h3 className="leader-card__name">{member.name}</h3>
        <p className="leader-card__role">{member.role}</p>
      </div>
    </article>
  );
}

export default function LeadershipSection() {
  return (
    <section className="about-leadership" aria-label="Leadership team">
      <Container>
        <div className="about-leadership__group">
          <h2 className="about-leadership__heading">Leadership</h2>
          <div className="about-leadership__grid about-leadership__grid--leadership">
            {leadershipTeams.leadership.map((member) => (
              <LeaderCard key={member.name} member={member} />
            ))}
          </div>
        </div>
        <div className="about-leadership__group">
          <h2 className="about-leadership__heading">Management</h2>
          <div className="about-leadership__grid">
            {leadershipTeams.management.map((member) => (
              <LeaderCard key={member.name} member={member} />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
