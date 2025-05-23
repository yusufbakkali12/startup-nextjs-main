
import Breadcrumb from "@/components/Common/Breadcrumb";
import { use } from 'react';  
import ExploresDetails from "@/components/ExploresDetails";

interface HotelPageProps {
  params: { slug: number }
}


import Hotel from "@/components/Hotel";
const HotelPage = ({ params }: HotelPageProps) => {
  return (
    <>
  
      <ExploresDetails params={params} />
      
    </>
  );
};

export default HotelPage;