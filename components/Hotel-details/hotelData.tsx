import { Hotel } from "@/types/hotel";


  export const hotelData: Hotel[] = [
      {
        id: 1,
        path: "hotel/1",
        images: [
          "/images/hotel/1/hotel-salama.jpg",
          "/images/hotel/1/hotel1-2.jpg",
          "/images/hotel/1/hotel1-3.jpg",
        ],
        name: "Luxury Ocean View Resort",
        description: "Experience luxury with breathtaking ocean views and world-class amenities",
        price: 299,
        rating: 4.8,
        location: "Miami Beach, FL"
      },

      {
        id: 4,
        path: "hotel/1",
        images: [
          "/images/hotel/4/hotel-salama.jpg",
          "/images/hotel/4/hotel1-2.jpg",
          "/images/hotel/4/hotel1-3.jpg",
        ],
        name: "Luxury Ocean View Resort",
        description: "Experience luxury with breathtaking ocean views and world-class amenities",
        price: 299,
        rating: 4.8,
        location: "Miami Beach, FL"
      },
      {
        id: 2,
        path: "hotel/2",
        images: [
          "/images/hotel/2/hotel1-1.jpg",
          "/images/hotel/2/hotel1-2.jpg",
          "/images/hotel/2/hotel1-3.jpg",
        ],
        name: "Mountain Lodge Retreat",
        description: "Cozy mountain getaway with stunning panoramic views",
        price: 199,
        rating: 4.6,
        location: "Aspen, CO"
      },
      {
        id: 3,
        path: "hotel/3",
        images: [
          "/images/hotel/hotel-3.jpg",
          "/images/hotel1-2.jpg",
          "/images/hotel1-3.jpg",
        ],
        name: "Urban Boutique Hotel",
        description: "Modern comfort in the heart of the city",
        price: 249,
        rating: 4.7,
        location: "New York, NY"
      },
      // Add more hotels as needed
    ];    
export default hotelData;
