
import Breadcrumb from "@/components/Common/Breadcrumb";
import Restaurants from "@/components/Restaurants";
const RestaurantPages = () => {
  return (
    <>
      <Breadcrumb
        pageName="Restaurant"
        description="Trouvez votre séjour idéal grâce à notre sélection de restaurants triée sur le volet. Réservez dès maintenant et profitez d’un service exceptionnel !"
      />
      <Restaurants />
    </>
  );
};

export default RestaurantPages; 