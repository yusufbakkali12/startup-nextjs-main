
import Breadcrumb from "@/components/Common/Breadcrumb";
import { use } from 'react';

interface HotelPageProps {
  params: { slug: string }
}


import Hotel from "@/components/Hotel";
const HotelPage = ({ params }: HotelPageProps) => {
  return (
    <>
      <Breadcrumb
        pageName="Hotel"
        description="Find your perfect stay with our curated selection of hotels."
      />
      {/* <Hotel slug={params.slug} /> */}
      <h1 className="text-3xl font-bold mb-4">Article : {params.slug}</h1>
    </>
  );
};

export default HotelPage;