"use client";

import { Member, Level, Branch } from "@/types/member";
import { Star } from "lucide-react";

interface Props {
  member: Member;
}

export default function MemberCard({ member }: Props) {
  const seniority = formatSeniority(member.joinedAt);

  return (
    <div className="card bg-base-100 shadow-xl border border-base-300 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">
      <div className="card-body">
        <div className="flex items-center gap-4">
          <div className="avatar">
            <div className="w-16 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
              <img src={member.imageUrl} alt={member.name} />
            </div>
          </div>

          <div>
            <h2 className="card-title">{member.name}</h2>
            <p className="text-sm opacity-70">
              {formatPosition(member.level, member.branch)}
            </p>
          </div>
        </div>

        {/* Stars */}
        <div className="flex gap-1 mt-3 text-warning">
          {[...Array(member.stars)].map((_, i) => (
            <Star key={i} className="w-4 h-4 fill-current" />
          ))}
        </div>

        {/* Seniority */}
        <p className="text-sm mt-2">
          Ancienneté : <span className="font-semibold">{seniority}</span>
        </p>
      </div>
    </div>
  );
}

/* ------------------ Helpers ------------------ */

function formatPosition(level: Level, branch: Branch) {
  const branchLabel = branch.charAt(0) + branch.slice(1).toLowerCase();

  switch (level) {
    case "DIRECTEUR":
      return `Directeur/trice ${branchLabel}`;
    case "CHARGE":
      return `Chargé/e ${branchLabel}`;
    case "COORDONNATEUR":
      return `Coordonnateur/trice ${branchLabel}`;
    default:
      return branchLabel;
  }
}

function formatSeniority(joinedAt: string) {
  const joinDate = new Date(joinedAt);
  const now = new Date();

  const totalMonths =
    (now.getFullYear() - joinDate.getFullYear()) * 12 +
    now.getMonth() -
    joinDate.getMonth();

  const years = Math.floor(totalMonths / 12);
  const months = totalMonths % 12;

  if (years > 0) {
    return `${years} an${years > 1 ? "s" : ""} ${months} mois`;
  }

  return `${months} mois`;
}
