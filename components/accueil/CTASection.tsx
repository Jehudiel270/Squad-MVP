import React from "react";
import { Send } from "lucide-react";

export function CTASection() {
  return (
    <section className="py-24 text-center bg-gradient-to-r from-purple-600/20 to-blue-600/20">
      <div className="max-w-3xl mx-auto px-4">
        <h2 className="text-4xl font-bold mb-6">
          Envie de faire partie de l’aventure ?
        </h2>

        <p className="text-gray-300 mb-8">
          Rejoins la Squad ENEAM et participe à l’organisation des plus grands
          événements étudiants.
        </p>

        <button className="btn btn-primary gap-2">
          Postuler maintenant <Send size={16} />
        </button>
      </div>
    </section>
  );
}
