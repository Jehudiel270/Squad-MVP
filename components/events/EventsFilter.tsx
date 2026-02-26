import { EventFilter } from "./EventsPage";

interface Props {
  filter: EventFilter;
  setFilter: (value: EventFilter) => void;
  countByFilter: (value: EventFilter) => number;
}

export default function EventsFilter({
  filter,
  setFilter,
  countByFilter,
}: Props) {
  const filters: { label: string; value: EventFilter }[] = [
    { label: "Tous", value: "all" },
    { label: "À venir", value: "upcoming" },
    { label: "Passés", value: "past" },
  ];

  return (
    <div className="flex gap-4 mb-12 flex-wrap">
      {filters.map(({ label, value }) => (
        <button
          key={value}
          onClick={() => setFilter(value)}
          className={`btn ${
            filter === value ? "btn-secondary" : "btn-outline"
          }`}
        >
          {label} ({countByFilter(value)})
        </button>
      ))}
    </div>
  );
}
