export type Level = "DIRECTEUR" | "CHARGE" | "COORDONNATEUR";

export type Branch =
  | "COMMUNICATION"
  | "LOGISTIQUE"
  | "RH"
  | "TECHNIQUE"
  | "FINANCE"
  | "ACTIVITÉS";

export interface Member {
  id: string;
  name: string;
  level: Level;
  branch: Branch;
  stars: number; // 1 → 5
  joinedAt: string; // ISO string (DateTime côté backend)
  imageUrl: string;
}
