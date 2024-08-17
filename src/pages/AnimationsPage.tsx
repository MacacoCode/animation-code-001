import React from 'react';
import { TAnimation } from '../types';

interface IAnimationsProps {
animation: TAnimation;
}

const AnimationsPage = ({ animation }: IAnimationsProps) => {
    return (
        <div>
            Hello There {animation}
        </div>
    );
};

export default AnimationsPage;
