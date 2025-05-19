
import Breadcrumb from "@/components/Common/Breadcrumb";
import Hotel from "@/components/Hotel";
const HotelPages = () => {
  return (
    <>
      <Breadcrumb
        pageName="Hotel"
        description="Trouvez votre séjour idéal grâce à notre sélection d’hôtels triée sur le volet. Réservez dès maintenant et profitez d’un service exceptionnel !"
      />
      <Hotel />
    </>
  );
};

export default HotelPages;