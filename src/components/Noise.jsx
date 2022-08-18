import React from 'react';
import Lottie from 'react-lottie-player';
import lottieJson from './noise.json';

export default function Noise() {
  return <Lottie loop animationData={lottieJson} play />;
}
