import { EventType } from "./EventsPage";
import EventCard from "./EventCard";

interface Props {
  events: EventType[];
}

export default function EventsGrid({ events }: Props) {
  return (
    <div className="grid md:grid-cols-3 gap-8">
      {events.map((event) => (
        <EventCard key={event.id} event={event} />
      ))}
    </div>
  );
}
