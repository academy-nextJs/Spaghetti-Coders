'use client';

import React, { useEffect, useRef, useState } from 'react';
import { throttle } from 'lodash';

export const HeaderClientWrapper = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [isHidden, setIsHidden] = useState(false);
  const prevScrollY = useRef<number>(0);

  useEffect(() => {
    const positionHeader = () => {
      const curScrollY = window.pageYOffset; //TODO: pageYOffset is deprecated use scrollY instead
      if(curScrollY > prevScrollY.current && curScrollY > (window.innerHeight / 3)) {
        setIsHidden(true)
      } else {
        setIsHidden(false);
      }
      prevScrollY.current = curScrollY;
    };

    window.addEventListener('scroll', throttle(positionHeader, 500)); //TODO: Create a const holding the throttled position header
    return () =>
      window.removeEventListener('scroll', throttle(positionHeader, 500));
    //TODO: add throttle.cancel()
  }, []);

  return (
    <header
      className={`w-[88%] md:w-[95%] lg:w-[97%] h-22 flex items-center justify-between m-auto overflow-hidden fixed top-0 right-0 left-0 z-50 backdrop-blur-xs transition-all duration-500 ${isHidden ? '-translate-y-full' : 'translate-y-0'}`}
    >
      {children}
    </header>
  );
};
