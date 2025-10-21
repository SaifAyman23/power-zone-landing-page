import React from "react";
import { useTranslation } from "../hooks/useTranslation";
import { TransformationsComparator } from "./ui/TransformationsComparator";

import before1 from "../assets/img/transformations/trans1/before.png";
import before2 from "../assets/img/transformations/trans2/before.png";
import before3 from "../assets/img/transformations/trans3/before.png";
import before4 from "../assets/img/transformations/trans4/before.png";
import after1 from "../assets/img/transformations/trans1/after.png";
import after2 from "../assets/img/transformations/trans2/after.png";
import after3 from "../assets/img/transformations/trans3/after.png";
import after4 from "../assets/img/transformations/trans4/after.png";

export const Transformations: React.FC = () => {
  const { t, language} = useTranslation();

  // 🔹 Config for transformations with multilingual titles/descriptions
  const transformations = [
    {
      title: {
        en: "Commit and Transform",
        ar: "التزم وتغيّر",
      },
      description: {
        en: "Stay consistent — we’ll handle the science, tech, and guidance to get you results fast.",
        ar: "التزم، وإحنا نوفر لك العلم والخبرة والتقنية علشان توصّل هدفك بسرعة.",
      },
      beforeImage: before1,
      afterImage: after1,
    },
    {
      title: {
        en: "Day Ten",
        ar: "اليوم العاشر",
      },
      description: {
        en: "True success lies in becoming the best version of yourself.",
        ar: "النجاح الحقيقي يكمن في أن تكون أفضل نسخة من نفسك.",
      },
      beforeImage: before2,
      afterImage: after2,
    },
    {
      title: {
        en: "The Journey Within",
        ar: "الرحلة",
      },
      description: {
        en: "True change starts in the mind — push yourself, grow, and become your best version.",
        ar: "الرحلة هي إنك تغيّر عقليتك علشان توصل لأفضل نسخة من نفسك، وتبدأ تجاهد نفسك لتطويرها",
      },
      beforeImage: before3,
      afterImage: after3,
    },
    {
      title: {
        en: "Day Eleven",
        ar: "اليوم الحادي عشر",
      },
      description: {
        en: "Life is a journey — enjoy every moment of it.",
        ar: "الحياة رحلة، استمتع بكل لحظة فيها.",
      },
      beforeImage: before4,
      afterImage: after4,
    },
  ];

  return (
    <section id="transformations" className="py-20 bg-gray-950">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            {t("transformationsTitle")}
            <br />
            <span className="text-primary-400">{t("transformationsSubtitle")}</span>
          </h2>
          <p className="text-lg text-gray-400 leading-relaxed">
            {t("transformationsDescription")}
          </p>
        </div>

        {/* Transformations Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-12 lg:gap-16">
          {transformations.map((item, index) => {
            const lang = language === "ar" ? "ar" : "en";
            return (
              <div
                key={index}
                className="group relative rounded-3xl overflow-hidden transition-transform duration-500 hover:scale-[1.02]"
              >
                <TransformationsComparator
                    beforeImage={item.beforeImage}
                    afterImage={item.afterImage}
                    height="65vh"
                    initialPosition={50}
                />

                {/* Overlay Info */}
                <div className="absolute bottom-6 left-6 right-6 bg-black/40 backdrop-blur-md text-white p-5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <h3 className="text-lg font-semibold">{item.title[lang]}</h3>
                  <p className="text-sm text-gray-300 mt-1">{item.description[lang]}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
