import { GalleryPreview } from "@/components/accueil/GalleryPreview";
import HeroSection from "@/components/accueil/HeroSection";
import { Section } from "@/components/accueil/Section";
import { StatsSection } from "@/components/accueil/StatsSection";
import { UpcomingEventCard } from "@/components/accueil/UpcomingEventCard";

import { CalendarCheck, Users, Award } from "lucide-react";

export default function HomePage() {
  const events = [
    {
      title: "Squad Party – Night Edition",
      date: "12 Avril 2026",
      time: "18h00 – 02h00",
      location: "Campus ENEAM – Espace Culturel",
      description:
        "Une soirée exceptionnelle avec DJ, animations, jeux concours et ambiance 100% étudiante.",
      status: "À venir",
    },
    {
      title: "Squad Beach Vibes",
      date: "25 Mai 2026",
      time: "14h00 – 22h00",
      location: "Plage de Cotonou",
      description:
        "Ambiance plage, DJ live, cocktails et animations sportives pour une journée mémorable.",
      status: "À venir",
    },
    {
      title: "Squad White Party",
      date: "15 Juin 2026",
      time: "19h00 – 03h00",
      location: "Hôtel Azalaï",
      description:
        "Dress code blanc obligatoire pour une soirée chic et élégante.",
      status: "À venir",
    },
    {
      title: "Squad Welcome Freshers",
      date: "10 Octobre 2026",
      time: "17h00 – 23h30",
      location: "Campus ENEAM",
      description:
        "Soirée d’intégration des nouveaux étudiants avec animations et surprises.",
      status: "À venir",
    },
    {
      title: "Squad Halloween Night",
      date: "31 Octobre 2026",
      time: "20h00 – 03h00",
      location: "Espace Culturel ENEAM",
      description:
        "Costumes effrayants, DJ set spécial Halloween et concours du meilleur déguisement.",
      status: "À venir",
    },
    {
      title: "Squad Gala Prestige",
      date: "20 Décembre 2026",
      time: "19h00 – 02h00",
      location: "Palais des Congrès",
      description:
        "Une soirée de gala exceptionnelle avec tapis rouge et ambiance VIP.",
      status: "À venir",
    },
    {
      title: "Squad New Year Bash",
      date: "31 Décembre 2026",
      time: "21h00 – 04h00",
      location: "Rooftop Premium Cotonou",
      description:
        "Fêtons la nouvelle année ensemble avec DJ, feu d’artifice et surprises.",
      status: "À venir",
    },
  ];
  const stats = [
    {
      icon: <CalendarCheck className="h-8 w-8" />,
      title: "Événements organisés",
      value: "25+",
      desc: "Depuis 2022",
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Membres actifs",
      value: "1 200+",
      desc: "Communauté ENEAM",
    },
    {
      icon: <Award className="h-8 w-8" />,
      title: "Partenaires",
      value: "15",
      desc: "Sponsors & Collaborations",
    },
  ];

  return (
    <main>
      <HeroSection
        images={["/IMG_8005.jpg", "/IMG_8038.jpg", "/IMG_8484.jpg"]}
        autoSlide={true}
        interval={4} // défile toutes les 4 secondes
      />
      <Section title="Prochain événement">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map((event, index) => (
            <UpcomingEventCard key={index} {...event} />
          ))}
        </div>
      </Section>
      <Section title="Nos Statistiques">
        <StatsSection stats={stats} />
      </Section>
      <Section>
        <GalleryPreview
          images={[
            "/IMG_8005.jpg",
            "/IMG_8038.jpg",
            "/IMG_8484.jpg",
            "IMG_0255.jpg",
            "IMG_7927.jpg",
            "IMG_7967.jpg",
            "IMG_8130.jpg",
            "IMG_8209.jpg",
          ]}
        />
      </Section>
    </main>
  );
}
