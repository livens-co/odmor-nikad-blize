"use client";

import dynamic from 'next/dynamic';

const ReactPlayer = dynamic(() => import('react-player'), { ssr: false });

const YouTubePlayer = () => {
  return <ReactPlayer url="https://www.youtube.com/watch?v=BLTFKRis-Tc" width={'100%'} height={'100%'}/>;
};

export default YouTubePlayer;