'use client'
import Image from "next/image";
import { useState } from "react";
const AboutSectionTwo = () => {
  const [showMore, setShowMore] = useState(false);

  const fullText = `Situation géographique : Province de Tiznit, région Souss-Massa, au cœur de l'Anti-Atlas. 
  Sur le plan géographique, Tafraout est une municipalité située dans la province de Tiznit, qui fait partie de la région de Souss-Massa au Maroc. 
  La ville occupe une position centrale au sein de la chaîne de montagnes de l'Anti-Atlas, elle-même une extension du vaste système montagneux de l'Atlas qui traverse le nord-ouest de l'Afrique. 
  Tafraout se trouve à environ 160 kilomètres au sud d'Agadir et à une centaine de kilomètres au sud de la ville historique de Taroudant. 
  Elle est également localisée à l'est de Tiznit. Perchée à une altitude de 1200 mètres, Tafraout jouit d'un climat montagnard distinct. 
  La population de la ville proprement dite oscille entre 5 000 et 6 000 habitants. 
  Il est important de noter que le nom "Tafraout" peut également désigner, par extension, un ensemble de petits villages pittoresques disséminés dans la même vallée. 
  Cette situation géographique privilégiée, au cœur de l'Anti-Atlas, confère à Tafraout un caractère unique, avec des paysages montagneux spectaculaires propices aux activités de plein air et une atmosphère paisible loin de l'agitation des grandes métropoles. 
  La distance relative des grands centres urbains comme Agadir et Marrakech contribue à son charme isolé et à la préservation de sa culture authentique.`;

  const previewText = fullText.slice(0, 280) + "...";
  return (
    <section className="py-16 md:py-20 lg:py-28">
      <div className="container">
        <div className="-mx-4 flex flex-wrap items-center">
          <div className="w-full px-4 lg:w-1/2">
            <div
              className="wow fadeInUp relative mx-auto mb-12 aspect-[25/24] max-w-[500px] text-center lg:m-0"
              data-wow-delay=".15s"
            >
              <Image
                src="/images/about/about-image-2.svg"
                alt="about image"
                fill
                className="drop-shadow-three dark:hidden dark:drop-shadow-none"
              />
              <Image
                src="/images/about/about-image-2-dark.svg"
                alt="about image"
                fill
                className="drop-shadow-three hidden dark:block dark:drop-shadow-none"
              />
            </div>
          </div>
          <div className="w-full px-4 lg:w-1/2">
            <div className="wow fadeInUp max-w-[770px]" data-wow-delay=".2s">
              <div className="mb-9">
                <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                  Signification du nom Tafraout:
                </h3>
                <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                  Le nom &quotTafraout&quot trouve ses racines dans la langue amazighe (plus précisément le tachelhit), où il signifie originellement &quotbassin ou citerne dans laquelle l&aposeau tirée d&aposun puits est versée&quot. Cette définition première souligne l&aposimportance historique des sources d&aposeau dans cette région semi-aride. Par extension, le terme a également acquis le sens de &quotvallée&quot , décrivant parfaitement la topographie du lieu. En effet, la ville de Tafraout est blottie dans une petite vallée, au pied de l&aposimposant Djebel Lekest, une montagne de granit rose dont l&aposérosion a sculpté les formes au fil des millénaires.
                </p>
              </div>
             {/* <div className="mb-9">
                 <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                  Situation géographique : Province de Tiznit, région Souss-Massa, au cœur de l'Anti-Atlas
                </h3>
                <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                Sur le plan géographique, Tafraout est une municipalité située dans la province de Tiznit, qui fait partie de la région de Souss-Massa au Maroc. La ville occupe une position centrale au sein de la chaîne de montagnes de l'Anti-Atlas , elle-même une extension du vaste système montagneux de l'Atlas qui traverse le nord-ouest de l'Afrique. Tafraout se trouve à environ 160 kilomètres au sud d'Agadir  et à une centaine de kilomètres au sud de la ville historique de Taroudant. Elle est également localisée à l'est de Tiznit. Perchée à une altitude de 1200 mètres , Tafraout jouit d'un climat montagnard distinct. La population de la ville proprement dite oscille entre 5 000 et 6 000 habitants. Il est important de noter que le nom "Tafraout" peut également désigner, par extension, un ensemble de petits villages pittoresques disséminés dans la même vallée. Cette situation géographique privilégiée, au cœur de l'Anti-Atlas, confère à Tafraout un caractère unique, avec des paysages montagneux spectaculaires propices aux activités de plein air et une atmosphère paisible loin de l'agitation des grandes métropoles. La distance relative des grands centres urbains comme Agadir et Marrakech  contribue à son charme isolé et à la préservation de sa culture authentique.
                </p> */}



                  <div className="max-w-3xl mx-auto  dark:text-white  rounded-2xl  mt-10">
                    <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">Situation géographique</h3>
                    <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                      {showMore ? fullText : previewText}
                    </p>
                    <button
                      onClick={() => setShowMore(!showMore)}
                      className="mt-4 text-blue-600 hover:text-blue-800 font-medium transition duration-300"
                    >
                      {showMore ? "Lire moins" : "Lire plus"}
                    </button>
                  </div>

              {/* </div> */}

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSectionTwo;
