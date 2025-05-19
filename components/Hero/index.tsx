


'use client';

import { useEffect, useState } from 'react';
import Link from "next/link";
import SiderSlider from "../SiderSlider/index";

const Hero = () => {
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const [isLoaded, setIsLoaded] = useState(false);

  // YouTube video ID
  const videoId = "RIdlUCcrcTs";

  useEffect(() => {
    // Initialize YouTube API
    const tag = document.createElement('script');
    tag.src = "https://www.youtube.com/iframe_api";
    const firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

    // Clean up function
    return () => {
      
      (window as any).onYouTubeIframeAPIReady = null;
    };
  }, []);

  // Handle YouTube player controls
  const togglePlay = () => {
    const iframe = document.getElementById('youtube-bg') as HTMLIFrameElement;
    if (!iframe || !iframe.contentWindow) return;

    const command = isPlaying ? 'pauseVideo' : 'playVideo';
    iframe.contentWindow.postMessage(
      JSON.stringify({
        event: 'command',
        func: command,
        args: [],
      }),
      '*'
    );

    setIsPlaying(!isPlaying);
  };

  const toggleMute = () => {
    const iframe = document.getElementById('youtube-bg') as HTMLIFrameElement;
    if (!iframe || !iframe.contentWindow) return;

    const command = isMuted ? 'unMute' : 'mute';
    iframe.contentWindow.postMessage(
      JSON.stringify({
        event: 'command',
        func: command,
        args: [],
      }),
      '*'
    );

    setIsMuted(!isMuted);
  };

  // Add class to handle video loading state
  const handleVideoLoad = () => {
    setIsLoaded(true);
  };

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Loading overlay */}
      {!isLoaded && (
        <div className="absolute inset-0 z-20 flex items-center justify-center bg-black">
          <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-white"></div>
        </div>
      )}

      {/* YouTube Background */}
      <div className="absolute inset-0 z-0">
        <iframe
          id="youtube-bg"
          className={`w-full h-full object-cover transition-opacity duration-1000 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
          src={`https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&loop=1&playlist=${videoId}&controls=0&showinfo=0&modestbranding=1&enablejsapi=1&rel=0&version=3`}
          title="Tafroute background video"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          frameBorder="0"
          onLoad={handleVideoLoad}
        ></iframe>
      </div>

      {/* Dark overlay with gradient */}
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-black/30 via-black/40 to-black/70"></div>

      {/* Content container */}
      <div className="absolute inset-0 z-10 flex flex-col items-start justify-end text-white">
        <div className="container mx-auto px-4 md:px-8 pb-16 md:pb-24">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-2 md:mb-4 tracking-tight">
            Tafroute
          </h1>
          <p className="text-xl md:text-3xl mb-6 md:mb-8 font-light">
            Là où chaque pas raconte une histoire.
          </p>
          
          <div className="flex flex-col md:flex-row gap-4 mt-4">
            <Link href="/explore" className="bg-white text-black hover:bg-opacity-90 px-6 py-3 rounded-md font-medium text-lg transition-all duration-300">
              Explorer
            </Link>
            <Link href="/about" className="bg-transparent border border-white hover:bg-white/10 px-6 py-3 rounded-md font-medium text-lg transition-all duration-300">
              En savoir plus
            </Link>
          </div>
        </div>
      </div>

      {/* Video controls */}
      <div className="absolute bottom-6 right-6 z-20 flex gap-3">
        <button 
          onClick={togglePlay}
          className="bg-black/50 hover:bg-black/70 text-white p-2 rounded-full backdrop-blur-sm transition-all duration-300"
          aria-label={isPlaying ? "Pause video" : "Play video"}
        >
          {isPlaying ? (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 9v6m4-6v6m7-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          )}
        </button>
        <button 
          onClick={toggleMute}
          className="bg-black/50 hover:bg-black/70 text-white p-2 rounded-full backdrop-blur-sm transition-all duration-300"
          aria-label={isMuted ? "Unmute video" : "Mute video"}
        >
          {isMuted ? (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" clipRule="evenodd" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
            </svg>
          )}
        </button>
      </div>
    </section>
  );
};

export default Hero;