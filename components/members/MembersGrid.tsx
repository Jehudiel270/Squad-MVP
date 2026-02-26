import { Member } from "@/types/member";
import MemberCard from "./MemberCard";

interface Props {
  members: Member[];
}

export default function MembersGrid({ members }: Props) {
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {members.map((member) => (
        <MemberCard key={member.id} member={member} />
      ))}
    </div>
  );
}
