'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Breadcrumb from "@/components/Common/Breadcrumb";

// Sample location data - in a real application, this would come from an API or CMS
const locations = [
  {
    id: 1,
    name: "Les Rochers Bleus",
    description: "Formations rocheuses emblématiques aux teintes bleutées qui changent avec la lumière du jour.",
    image: "/images/city/1.jpg",
    category: "nature",
    rating: 4.8,
  },
  {
    id: 2,
    name: "Vallée des Ameln",
    description: "Magnifique vallée parsemée de villages berbères traditionnels et d'amandiers en fleurs au printemps.",
    image: "/images/city/2.jpg",
    category: "culture",
    rating: 4.7,
  },
  {
    id: 3,
    name: "Marché Traditionnel",
    description: "Découvrez l'artisanat local et les produits frais dans ce marché animé au cœur de Tafroute.",
    image: "/images/city/3.jpg",
    category: "culture",
    rating: 4.5,
  },
  {
    id: 4,
    name: "Gorges d'Ait Mansour",
    description: "Impressionnantes gorges entourées de palmiers et de falaises rocheuses spectaculaires.",
    image: "/images/city/1.jpg", // Replace with actual image
    category: "nature",
    rating: 4.9,
  },
  {
    id: 5,
    name: "Maison Traditionnelle",
    description: "Visitez une maison berbère authentique et découvrez le mode de vie traditionnel de la région.",
    image: "/images/city/2.jpg", // Replace with actual image
    category: "culture",
    rating: 4.6,
  },
  {
    id: 6,
    name: "Montagne du Lion",
    description: "Formation rocheuse naturelle ressemblant à un lion, offrant une vue panoramique sur la région.",
    image: "/images/city/3.jpg", // Replace with actual image
    category: "nature",
    rating: 4.7,
  },
];

const categories = [
  { id: "all", label: "Tous" },
  { id: "nature", label: "Nature" },
  { id: "culture", label: "Culture" },
];

export default function Explorer() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [filteredLocations, setFilteredLocations] = useState(locations);
  const [searchQuery, setSearchQuery] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  // Filter locations based on category and search query
  useEffect(() => {
    setIsLoading(true);
    
    setTimeout(() => {
      let filtered = locations;
      
      // Filter by category
      if (activeCategory !== 'all') {
        filtered = filtered.filter(location => location.category === activeCategory);
      }
      
      // Filter by search query
      if (searchQuery) {
        const query = searchQuery.toLowerCase();
        filtered = filtered.filter(location => 
          location.name.toLowerCase().includes(query) || 
          location.description.toLowerCase().includes(query)
        );
      }
      
      setFilteredLocations(filtered);
      setIsLoading(false);
    }, 300); // Small timeout to simulate loading
  }, [activeCategory, searchQuery]);

  return (
    <div className="min-h-screen bg-gray-50">
     <Breadcrumb
        pageName="Explorer Tafroute"
        />

      {/* Hero banner for Explorer page */}
      <div className="relative h-72 lg:h-80 overflow-hidden">
        <div className="absolute inset-0">
          <Image 
            src="/images/city/1.jpg" 
            alt="Tafroute landscape" 
            layout="fill"
            objectFit="cover"
            priority
            className="brightness-75"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/30"></div>
        <div className="relative h-full flex flex-col justify-center px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Explorer Tafroute</h1>
            <p className="text-xl text-white/90 max-w-2xl">
              Découvrez les merveilles naturelles et culturelles de cette région unique du Maroc.
            </p>
          </div>
        </div>
      </div>

      {/* Search and filters */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">
          <div className="relative w-full md:w-96">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <svg className="h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
              </svg>
            </div>
            <input
              type="text"
              className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              placeholder="Rechercher un lieu..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          
          <div className="flex space-x-2">
            {categories.map((category) => (
              <button
                key={category.id}
                className={`px-4 py-2 text-sm font-medium rounded-md ${
                  activeCategory === category.id 
                    ? 'bg-indigo-600 text-white' 
                    : 'bg-white text-gray-700 hover:bg-gray-100'
                } transition-colors duration-200`}
                onClick={() => setActiveCategory(category.id)}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>

        {/* Locations grid */}
        {isLoading ? (
          <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-indigo-500"></div>
          </div>
        ) : filteredLocations.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredLocations.map((location) => (
              <div key={location.id} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
                <div className="relative h-48">
                  <Image 
                    src={location.image} 
                    alt={location.name}
                    layout="fill"
                    objectFit="cover"
                    className="transition-transform duration-500 hover:scale-105"
                  />
                  <div className="absolute top-2 right-2 bg-white rounded-full px-2 py-1 text-xs font-medium text-gray-800 flex items-center">
                    <svg className="h-3 w-3 text-yellow-400 mr-1" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    {location.rating}
                  </div>
                  <div className="absolute bottom-2 left-2 bg-indigo-600 rounded-full px-2 py-1 text-xs font-medium text-white">
                    {location.category === 'nature' ? 'Nature' : 'Culture'}
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-semibold mb-2">{location.name}</h3>
                  <p className="text-gray-600 text-sm mb-4">{location.description}</p>
                  <Link href={`/location/${location.id}`} className="inline-block bg-indigo-50 hover:bg-indigo-100 text-indigo-700 font-medium py-2 px-4 rounded transition-colors duration-200 text-sm">
                    En savoir plus
                  </Link>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <svg className="mx-auto h-12 w-12 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <h3 className="mt-2 text-lg font-medium text-gray-900">Aucun résultat trouvé</h3>
            <p className="mt-1 text-gray-500">Essayez de modifier vos critères de recherche ou consultez toutes les destinations.</p>
            <div className="mt-6">
              <button 
                onClick={() => {
                  setActiveCategory('all');
                  setSearchQuery('');
                }}
                className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Voir toutes les destinations
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Call to Action Section */}
      <div className="bg-indigo-700 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
          <div className="lg:flex lg:items-center lg:justify-between">
            <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
              <span className="block">Prêt à visiter Tafroute?</span>
              <span className="block text-indigo-200">Planifiez votre voyage dès aujourd'hui.</span>
            </h2>
            <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
              <div className="inline-flex rounded-md shadow">
                <Link href="/contact" className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-indigo-600 bg-white hover:bg-indigo-50">
                  Réserver un guide
                </Link>
              </div>
              <div className="ml-3 inline-flex rounded-md shadow">
                <Link href="/itineraries" className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700">
                  Voir les itinéraires
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}