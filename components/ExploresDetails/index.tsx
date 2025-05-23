'use client';

import exploreData from "./exploreData";

import { useState, useEffect } from 'react';

import Image from 'next/image';
import { Explore } from "@/types/explore";



interface ExploresPageProps {
  params: { slug: number }
}


const ExploresDetails = ({ params }: ExploresPageProps) => {


  const [isLoading, setIsLoading] = useState(true);

  const [selectedImage, setSelectedImage] = useState<string | null>(null)
  const [explore, setExplore] = useState<Explore | null>(null)

  const handleDoubleClick = (src: string) => {
    setSelectedImage(src)
  }

  const closeModal = () => {
    setSelectedImage(null)
  }


  useEffect(() => {

    setIsLoading(true);

    setExplore(exploreData.find((e) => e.id == params.slug))
    setIsLoading(false);
  },[])

  if (!explore) {
    return <div>Hotel not found</div>
  }

  return (
    <>
      <section className="pb-[120px] pt-[150px]">
        <div className="container">
          <div className="-mx-4 flex flex-wrap justify-center">
            {isLoading ? (<div className="flex justify-center items-center h-64">
              <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-indigo-500"></div>
            </div>
            ) : (
              <div className="w-full px-4 lg:w-8/12">
                <div>
                  <h2 className="mb-8 text-3xl font-bold leading-tight text-black dark:text-white sm:text-4xl sm:leading-tight flex justify-between items-center">
                    {explore.name}

                    <div className="mb-5">
                      <a
                        href="#0"
                        className="inline-flex items-center justify-center rounded-full bg-primary px-4 py-2 text-sm font-semibold text-white"
                      >
                        <svg className="h-3 w-3 text-yellow-400 mr-1" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                        {explore.rating}
                      </a>
                    </div>
                  </h2>

                  <div>
                    <p className="mb-10 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
                      {explore.resume_description}
                    </p>
                    <div className="mb-10 w-full overflow-hidden rounded">
                      <div className="relative aspect-[97/60] w-full sm:aspect-[97/44]">
                        <Image
                          src={`${explore.images[0]}`}
                          alt="image"
                          fill
                          className="object-cover object-center"
                        />
                      </div>
                    </div>

                    {explore.description.map((section, index) => (
                      <div key={index} className="mb-8">
                        <h2 className="text-2xl font-bold mb-4 text-gray-800">{section.title}</h2>
                        <div
                          className="prose text-gray-700"
                          dangerouslySetInnerHTML={{ __html: section.content }}
                        />
                      </div>
                    ))}


                    <div className="items-center justify-between sm:flex">
                      <div className="mb-5">
                        <h4 className="mb-3 text-sm font-medium text-body-color">
                          Popular Tags :
                        </h4>
                        <div className="flex items-center">
                          {/* <TagButton text="Design" />
                        <TagButton text="Development" />
                        <TagButton text="Info" /> */}
                        </div>
                      </div>
                      <div className="mb-5">
                        <h5 className="mb-3 text-sm font-medium text-body-color sm:text-right">
                          Share this post :
                        </h5>
                        <div className="flex items-center sm:justify-end">
                          {/* <SharePost /> */}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>)
            }
          </div>
        </div>
      </section>
    </>
  );
};

export default ExploresDetails;
