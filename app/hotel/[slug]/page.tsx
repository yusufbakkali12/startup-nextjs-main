
import Breadcrumb from "@/components/Common/Breadcrumb";
import { use } from 'react';  
import HotelDetails from "@/components/HotelDetails";

interface HotelPageProps {
  params: { slug: number }
}


import Hotel from "@/components/Hotel";
const HotelPage = ({ params }: HotelPageProps) => {
  return (
    <>
      <Breadcrumb
        pageName="Hotel"
        description="Find your perfect stay with our curated selection of hotels."
      />
      <HotelDetails params={params} />
      
    </>
  );
};

export default HotelPage;