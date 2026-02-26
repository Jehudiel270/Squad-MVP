import { GalleryPreview } from "@/components/accueil/GalleryPreview";

import { Section } from "@/components/accueil/Section";

export default function GalleryPage() {
  return (
    <main>
      <Section>
        <h1 className="flex items-center justify-center text-4xl font-bold text-primary p-5">
          {" "}
          <span className="text-secondary pe-4 ">DES </span> PEPITES{" "}
        </h1>
        <GalleryPreview
          images={[
            "/IMG_8005.jpg",
            "/IMG_8038.jpg",
            "/IMG_8484.jpg",
            "IMG_0255.jpg",
            "IMG_7927.jpg",
            "IMG_7967.jpg",
            "IMG_8130.jpg",
            "IMG_8209.jpg",
          ]}
        />
      </Section>
    </main>
  );
}
