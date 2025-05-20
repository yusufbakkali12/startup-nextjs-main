
import Breadcrumb from "@/components/Common/Breadcrumb";

import Activites from "@/components/Activites";
const HotelPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Activite"
        description="Find your perfect activite with our curated selection of hotels."
      />
      <Activites />
    
    </>
  );
};

export default HotelPage;