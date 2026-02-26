"use client";

import { useState } from "react";
import EventsFilter from "./EventsFilter";
import EventsGrid from "./EventsGrid";

export type EventStatus = "upcoming" | "past" | "completed" | "cancelled";

export type EventFilter = "all" | EventStatus;

export interface EventType {
  id: number;
  title: string;
  date: string;
  location: string;
  image: string;
  status: EventStatus;
  badge?: string;
}

const events: EventType[] = [
  {
    id: 1,
    title: "Neon Night Vol. IV",
    date: "15 Octobre 2024",
    location: "Salle Polyvalente ENEAM",
    image: "/IMG_8005.jpg",
    status: "upcoming",
    badge: "À venir",
  },
  {
    id: 2,
    title: "Cinéma Halloween",
    date: "31 Octobre 2024",
    location: "Salle Polyvalente ENEAM",
    image: "/IMG_8038.jpg",
    status: "past",
    badge: "Passé",
  },
  {
    id: 3,
    title: "Beach Party",
    date: "20 Décembre 2024",
    location: "Plage Fidjrossè",
    image: "/IMG_7927.jpg",
    status: "completed",
    badge: "Terminé",
  },
];

export default function EventsPage() {
  const [filter, setFilter] = useState<EventFilter>("all");

  const filteredEvents =
    filter === "all"
      ? events
      : events.filter((event) => event.status === filter);

  const countByFilter = (filterType: EventFilter) => {
    if (filterType === "all") return events.length;

    return events.filter((event) => event.status === filterType).length;
  };

  return (
    <section className="py-20 container mx-auto px-6">
      <h1 className="text-4xl font-bold mb-10">NOS ÉVÉNEMENTS</h1>

      <EventsFilter
        filter={filter}
        setFilter={setFilter}
        countByFilter={countByFilter}
      />

      <EventsGrid events={filteredEvents} />
    </section>
  );
}
