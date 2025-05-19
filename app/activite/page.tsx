
import Breadcrumb from "@/components/Common/Breadcrumb";

import Hotel from "@/components/Hotel";
const HotelPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Hotel"
        description="Find your perfect stay with our curated selection of hotels."
      />
      <Hotel />
    
    </>
  );
};

export default HotelPage;