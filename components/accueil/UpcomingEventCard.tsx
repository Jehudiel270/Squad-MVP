import React from "react";
import { Calendar, MapPin, Clock, ArrowRight, Flame } from "lucide-react";

interface UpcomingEventCardProps {
  title: string;
  date: string;
  time: string;
  location: string;
  description: string;
  status: string;
}

export function UpcomingEventCard({
  title,
  date,
  time,
  location,
  description,
  status,
}: UpcomingEventCardProps) {
  return (
    <div className="card bg-base-200/40 backdrop-blur-lg border border-white/10 shadow-xl p-6">
      {/* Header avec titre + badge */}
      <div className="flex justify-between items-start mb-4 gap-4">
        <h3 className="text-2xl font-bold leading-tight">{title}</h3>

        <span className="badge badge-secondary gap-2 px-3 py-3 text-sm font-semibold whitespace-nowrap">
          <Flame size={14} />
          {status}
        </span>
      </div>

      <div className="flex items-center gap-2 text-gray-400 mb-2">
        <Calendar size={16} />
        <span>{date}</span>
      </div>

      <div className="flex items-center gap-2 text-gray-400 mb-2">
        <Clock size={16} />
        <span>{time}</span>
      </div>

      <div className="flex items-center gap-2 text-gray-400 mb-4">
        <MapPin size={16} />
        <span>{location}</span>
      </div>

      <p className="text-base-content mb-6">{description}</p>

      <button className="btn btn-secondary gap-2">
        Voir les détails <ArrowRight size={16} />
      </button>
    </div>
  );
}
