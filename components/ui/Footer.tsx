"use client";

import React from "react";
import {
  Mail,
  Instagram,
  Twitter,
  Youtube,
  MapPin,
  Phone,
  Flame,
} from "lucide-react";
import { FooterItems } from "./FooterItems";

const Footer = () => {
  const [email, setEmail] = React.useState("");

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Email inscrit:", email);
    setEmail("");
  };

  const navigationSections = [
    {
      title: "Événements",
      links: [
        "Soirées",
        "Gala",
        "Intégration",
        "Beach Party",
        "Prochains événements",
      ],
    },
    {
      title: "La Squad",
      links: ["À propos", "L’équipe", "Devenir membre", "Partenaires"],
    },
    {
      title: "Ressources",
      links: ["Galerie", "Blog", "FAQ", "Contact"],
    },
  ];

  const legalLinks = [
    "Conditions d'utilisation",
    "Politique de confidentialité",
    "Mentions légales",
  ];

  const socialLinks = [
    { icon: Instagram, label: "Instagram", href: "#" },
    { icon: Twitter, label: "Twitter (X)", href: "#" },
    { icon: Youtube, label: "YouTube", href: "#" },
  ];

  return (
    <footer className="bg-base-200 border-t border-base-300">
      <div className="container mx-auto px-6 py-12">
        {/* TOP SECTION */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-10 pb-10 border-b border-base-300">
          {/* Brand */}
          <div className="md:col-span-2">
            <FooterItems
              title="Squad ENEAM"
              description="Nous organisons les meilleures soirées et événements étudiants de l’ENEAM. Ambiance premium, expériences inoubliables, communauté soudée."
              icon={<Flame />}
              variant="secondary"
            />
          </div>

          {/* Navigation */}
          {navigationSections.map((section) => (
            <div key={section.title}>
              <h4 className="font-bold text-base-content mb-4">
                {section.title}
              </h4>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-base-content/70 hover:text-secondary transition-colors text-sm"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* NEWSLETTER */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 py-12 border-b border-base-300">
          <div className="md:col-span-1">
            <h3 className="font-bold text-base-content mb-2">
              🎉 Reste informé des prochains événements
            </h3>
            <p className="text-sm text-base-content/70">
              Reçois les annonces exclusives et les dates avant tout le monde.
            </p>
          </div>

          <form
            onSubmit={handleNewsletterSubmit}
            className="md:col-span-2 flex flex-col sm:flex-row gap-3"
          >
            <input
              type="email"
              placeholder="Votre email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="input input-bordered flex-1 text-sm"
            />
            <button className="btn btn-secondary whitespace-nowrap">
              S'abonner
            </button>
          </form>
        </div>

        {/* BOTTOM SECTION */}
        <div className="py-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
            {/* Legal */}
            <div>
              <h4 className="font-bold text-base-content mb-4">Légal</h4>
              <ul className="space-y-2">
                {legalLinks.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-base-content/70 hover:text-secondary transition-colors text-sm"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="font-bold text-base-content mb-4">Contact</h4>
              <ul className="space-y-3">
                <li className="flex items-center gap-2 text-base-content/70 text-sm">
                  <Mail size={16} />
                  <a
                    href="mailto:squadeneam@gmail.com"
                    className="hover:text-secondary transition-colors"
                  >
                    squadeneam@gmail.com
                  </a>
                </li>

                <li className="flex items-center gap-2 text-base-content/70 text-sm">
                  <Phone size={16} />
                  <a
                    href="tel:+22900000000"
                    className="hover:text-secondary transition-colors"
                  >
                    +229 XX XX XX XX
                  </a>
                </li>

                <li className="flex items-center gap-2 text-base-content/70 text-sm">
                  <MapPin size={16} />
                  <span>Campus ENEAM – Cotonou</span>
                </li>
              </ul>
            </div>

            {/* Social */}
            <div>
              <h4 className="font-bold text-base-content mb-4">
                Réseaux Sociaux
              </h4>
              <div className="flex gap-5">
                {socialLinks.map(({ icon: Icon, label, href }) => (
                  <a
                    key={label}
                    href={href}
                    aria-label={label}
                    className="text-base-content/70 hover:text-secondary transition-colors"
                  >
                    <Icon size={22} />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Copyright */}
          <div className="border-t border-base-300 pt-8 text-center">
            <p className="text-base-content/60 text-sm">
              © 2026 Squad ENEAM. Tous droits réservés.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
