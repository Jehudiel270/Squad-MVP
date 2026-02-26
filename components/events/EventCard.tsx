import { EventType } from "./EventsPage";
import { MapPin } from "lucide-react";

interface Props {
  event: EventType;
}

const badgeVariant = (status: string) => {
  switch (status) {
    case "upcoming":
      return "badge badge-info";
    case "past":
      return "badge badge-neutral ";
    case "completed":
      return "badge badge-success";
    case "cancelled":
      return "badge badge-error";
    default:
      return "badge badge-soft badge-primary";
  }
};

export default function EventCard({ event }: Props) {
  return (
    <div
      className="
  card
  bg-base-100
  shadow-md
  border border-base-300/40
  hover:shadow-2xl
  hover:border-base-content/20
  hover:-translate-y-1
  transition-all duration-300
"
    >
      <figure className="relative">
        <img
          src={event.image}
          alt={event.title}
          className="h-52 w-full object-cover"
        />

        {event.badge && (
          <div className="absolute top-4 right-4">
            <div className={badgeVariant(event.status)}>{event.badge}</div>
          </div>
        )}
      </figure>

      <div className="card-body">
        <h2 className="card-title text-lg">{event.title}</h2>

        <p className="text-sm opacity-70">{event.date}</p>

        <div className="flex items-center gap-2 text-sm opacity-70">
          <MapPin size={16} />
          {event.location}
        </div>

        <div className="card-actions mt-4">
          <button className="btn btn-secondary btn-sm">Voir plus</button>
        </div>
      </div>
    </div>
  );
}
