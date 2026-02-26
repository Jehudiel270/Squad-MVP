"use client";

import { useState } from "react";
import { members } from "@/data/members";
import MembersGrid from "@/components/members/MembersGrid";
import MembersFilters from "@/components/members/MembersFilters";

export default function MembersPage() {
  const [minStars, setMinStars] = useState(0);
  const [minMonths, setMinMonths] = useState(0);
  const [level, setLevel] = useState("");
  const [branch, setBranch] = useState("");

  const filteredMembers = members.filter((member) => {
    const memberMonths = calculateMonths(member.joinedAt);

    return (
      member.stars >= minStars &&
      memberMonths >= minMonths &&
      (level ? member.level === level : true) &&
      (branch ? member.branch === branch : true)
    );
  });

  return (
    <div className="container mx-auto px-6 py-16">
      <h1 className="text-4xl md:text-5xl font-bold mb-12 text-center">
        La Squad ENEAM
      </h1>

      <MembersFilters
        minStars={minStars}
        setMinStars={setMinStars}
        minMonths={minMonths}
        setMinMonths={setMinMonths}
        level={level}
        setLevel={setLevel}
        branch={branch}
        setBranch={setBranch}
      />

      <MembersGrid members={filteredMembers} />
    </div>
  );
}

function calculateMonths(joinedAt: string) {
  const joinDate = new Date(joinedAt);
  const now = new Date();

  return (
    (now.getFullYear() - joinDate.getFullYear()) * 12 +
    now.getMonth() -
    joinDate.getMonth()
  );
}
