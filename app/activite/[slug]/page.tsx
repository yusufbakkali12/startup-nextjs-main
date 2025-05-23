
import Breadcrumb from "@/components/Common/Breadcrumb";
import { use } from 'react';  
import HotelDetails from "@/components/HotelDetails";

interface ActivitePageProps {
  params: { slug: number }
}


import Hotel from "@/components/Hotel";
const ActiviteDetailsPage = ({ params }: ActivitePageProps) => {
  return (
    <>
      <Breadcrumb
        pageName="Activite"
        description="Find your perfect stay with our curated selection of  Activite."
      />
     
      
    </>
  );
};

export default ActiviteDetailsPage;