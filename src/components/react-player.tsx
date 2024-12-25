'use client';
import { useEffect, useState } from 'react';
import ReactPlayer from 'react-player';

const VideoPlayer = () => {
  const [isMounted, setIsMounted] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setIsMounted(true);
  }, []);
  const handleReady = () => {
    setIsLoading(false);
  };
  if (!isMounted) {
    return null;
  }
  return (
    <>
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-black/50 rounded-2xl z-10">
          <div className="h-10 w-10 animate-spin rounded-full border-4 border-gray-200 border-t-gray-500" />
        </div>
      )}
      <div className="rounded-2xl p-1 bg-black aspect-video w-full max-w-screen-2xl h-full pointer-events-none">
        <ReactPlayer
          url="https://youtu.be/gd9glVp24hA?si=sNxXUqEqnxYWSciI"
          width="100%"
          height="100%"
          style={{ borderRadius: '10rem' }}
          controls={false}
          muted={true}
          playing={true}
          loop={true}
          onReady={handleReady}
        />
      </div>
    </>
  );
};

export default VideoPlayer;
