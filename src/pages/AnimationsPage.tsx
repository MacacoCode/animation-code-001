import React from 'react';
import { TAnimation } from '../types';
import ZeroOneRays from '../components/Animations/ZeroOneRays';
import styles from './AnimationsPage.module.css';

interface IAnimationsProps {
  animation: TAnimation;
}

const SwitchAnimation = ({ animation }: IAnimationsProps) => {
  switch (animation) {
    case '01-rays':
      return <ZeroOneRays />;
    default:
      return <></>;
  }
};

const AnimationsPage = ({ animation }: IAnimationsProps) => {
  return <SwitchAnimation animation={animation} />;
};

export default AnimationsPage;
