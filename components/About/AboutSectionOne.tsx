import Image from "next/image";
import SectionTitle from "../Common/SectionTitle";

import SiderSlider from "../SiderSlider/index"
const checkIcon = (
  <svg width="16" height="13" viewBox="0 0 16 13" className="fill-current">
    <path d="M5.8535 12.6631C5.65824 12.8584 5.34166 12.8584 5.1464 12.6631L0.678505 8.1952C0.483242 7.99994 0.483242 7.68336 0.678505 7.4881L2.32921 5.83739C2.52467 5.64193 2.84166 5.64216 3.03684 5.83791L5.14622 7.95354C5.34147 8.14936 5.65859 8.14952 5.85403 7.95388L13.3797 0.420561C13.575 0.22513 13.8917 0.225051 14.087 0.420383L15.7381 2.07143C15.9333 2.26669 15.9333 2.58327 15.7381 2.77854L5.8535 12.6631Z" />
  </svg>
);

const AboutSectionOne = () => {
  const images = [
    "/images/city/1.jpg",
    "/images/city/2.jpg",
    // "/images/city/3.jpg",

  ];
  const List = ({ text }) => (
    <p className="mb-5 flex items-center text-lg font-medium text-body-color">
      <span className="mr-4 flex h-[30px] w-[30px] items-center justify-center rounded-md bg-primary bg-opacity-10 text-primary">
        {checkIcon}
      </span>
      {text}
    </p>
  );

  return (
    <section id="about" className="pt-16 md:pt-20 lg:pt-28">
      <div className="container">
        <div className="border-b border-body-color/[.15] pb-16 dark:border-white/[.15] md:pb-20 lg:pb-28">
          <div className="-mx-4 flex flex-wrap items-center">
            <div className="w-full px-4 lg:w-1/2">
              <SectionTitle
                title="Tafraout : Définition et Histoire, un Guide Essentiel pour les Visiteurs"
                paragraph="Tafraout, se révèle comme un joyau caché au cœur des majestueuses montagnes de l'Anti-Atlas marocain. Cette destination unique et captivante, nichée dans un environnement accidenté et pittoresque, promet une expérience inoubliable aux voyageurs en quête d'authenticité et de beauté naturelle. Son emplacement privilégié au sein de l'Anti-Atlas la distingue immédiatement, évoquant des paysages grandioses et une culture riche qui n'attendent qu'à être découverts."
                mb="44px"
              />

            </div>

            <div className="w-full px-4 lg:w-1/2">
              <div
                className="wow fadeInUp relative mx-auto aspect-[25/24] max-w-[750px] lg:mr-0"
                data-wow-delay=".2s"
              >
                {/* <Image
                  src="/images/about/pers1.jpeg"
                  alt="about-image"
                  fill
                  className="drop-shadow-three mx-auto max-w-full dark:hidden dark:drop-shadow-none lg:mr-0"
                />
                <Image
                   src="/images/about/pers1.jpeg"
                  alt="about-image"
                  fill
                  className="drop-shadow-three mx-auto hidden max-w-full dark:block dark:drop-shadow-none lg:mr-0"
                />  */}
                <SiderSlider images={images} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSectionOne;
