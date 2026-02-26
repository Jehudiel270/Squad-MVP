"use client";

import Image from "next/image";
import { useState } from "react";
import { Mail, Phone, MapPin, Instagram } from "lucide-react";

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    console.log(form);
  }

  return (
    <div className="container mx-auto px-6 py-16">
      {/* Logo + Titre */}
      <div className="text-center mb-16">
        <div className="flex justify-center mb-6">
          <Image
            src="/La-Squad.png"
            alt="Logo Squad ENEAM"
            width={120}
            height={120}
            className="rounded-full shadow-lg"
          />
        </div>

        <h1 className="text-4xl md:text-5xl font-bold">
          Contactez la Squad ENEAM
        </h1>

        <p className="mt-4 opacity-70">Basée à l'ENEAM – Gbégamey, Cotonou</p>
      </div>

      <div className="grid lg:grid-cols-2 gap-12">
        {/* Infos */}
        <div className="space-y-8">
          <div className="card bg-base-200 shadow-md border border-base-300">
            <div className="card-body space-y-4">
              <h2 className="card-title">Nos coordonnées</h2>

              <div className="flex items-center gap-3">
                <Mail className="text-primary" size={20} />
                <span>squad.eneam@etu.uac.bj</span>
              </div>

              <div className="flex items-center gap-3">
                <Phone className="text-success" size={20} />
                <a
                  href="https://wa.me/229XXXXXXXX"
                  target="_blank"
                  className="hover:underline"
                >
                  +229 XX XX XX XX (WhatsApp)
                </a>
              </div>

              <div className="flex items-center gap-3">
                <Instagram className="text-pink-500" size={20} />
                <a
                  href="https://instagram.com/squadeneam"
                  target="_blank"
                  className="hover:underline"
                >
                  @squadeneam
                </a>
              </div>

              <div className="flex items-center gap-3">
                <MapPin className="text-error" size={20} />
                <span>ENEAM – Gbégamey, Cotonou</span>
              </div>
            </div>
          </div>
        </div>

        {/* Formulaire */}
        <div className="card bg-base-100 shadow-xl border border-base-300">
          <div className="card-body">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="label">
                  <span className="label-text">Nom complet</span>
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  onChange={handleChange}
                  className="input input-bordered w-full"
                />
              </div>

              <div>
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  onChange={handleChange}
                  className="input input-bordered w-full"
                />
              </div>

              <div>
                <label className="label">
                  <span className="label-text">Sujet</span>
                </label>
                <input
                  type="text"
                  name="subject"
                  required
                  onChange={handleChange}
                  className="input input-bordered w-full"
                />
              </div>

              <div>
                <label className="label">
                  <span className="label-text">Message</span>
                </label>
                <textarea
                  name="message"
                  required
                  rows={5}
                  onChange={handleChange}
                  className="textarea textarea-bordered w-full"
                />
              </div>

              <button type="submit" className="btn btn-primary w-full">
                Envoyer le message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
