"use client";

interface Props {
  minStars: number;
  setMinStars: (value: number) => void;
  minMonths: number;
  setMinMonths: (value: number) => void;
  level: string;
  setLevel: (value: string) => void;
  branch: string;
  setBranch: (value: string) => void;
}

export default function MembersFilters({
  minStars,
  setMinStars,
  minMonths,
  setMinMonths,
  level,
  setLevel,
  branch,
  setBranch,
}: Props) {
  return (
    <div className="card bg-base-200 shadow-md border border-base-300 p-6 mb-10">
      <div className="grid md:grid-cols-3 gap-8">
        {/* ⭐ Stars */}
        <div>
          <label className="font-semibold">Étoiles minimum ({minStars})</label>
          <input
            type="range"
            min={0}
            max={5}
            value={minStars}
            onChange={(e) => setMinStars(Number(e.target.value))}
            className="range range-warning mt-2 w-full"
          />
          <div className="flex justify-between text-xs px-1 mt-2">
            {[0, 1, 2, 3, 4].map((s) => (
              <span key={s}>★</span>
            ))}
          </div>
        </div>

        {/* ⏳ Seniority */}
        <div>
          <label className="font-semibold">
            Ancienneté minimum ({minMonths} mois)
          </label>
          <input
            type="range"
            min={0}
            max={60}
            step={1}
            value={minMonths}
            onChange={(e) => setMinMonths(Number(e.target.value))}
            className="range range-primary mt-2 w-full"
          />
          <div className="flex justify-between text-xs px-1 mt-2">
            <span>0</span>
            <span>2 ans</span>
            <span>5 ans</span>
          </div>
        </div>

        {/* 🎯 Level */}
        <div>
          <label className="font-semibold">Niveau</label>
          <select
            className="select select-bordered w-full mt-2"
            value={level}
            onChange={(e) => setLevel(e.target.value)}
          >
            <option value="">Tous</option>
            <option value="DIRECTEUR">Directeur/trice</option>
            <option value="CHARGE">Chargé/e</option>
            <option value="COORDONNATEUR">Coordonnateur/trice</option>
          </select>
        </div>

        {/* 🏢 Branch */}
        <div>
          <label className="font-semibold">Branche</label>
          <select
            className="select select-bordered w-full mt-2"
            value={branch}
            onChange={(e) => setBranch(e.target.value)}
          >
            <option value="">Toutes</option>
            <option value="COMMUNICATION">Communication</option>
            <option value="LOGISTIQUE">Logistique</option>
            <option value="RH">RH</option>
            <option value="TECHNIQUE">Technique</option>
            <option value="FINANCE">Finance</option>
          </select>
        </div>
      </div>
    </div>
  );
}
