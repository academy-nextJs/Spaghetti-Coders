import { ReactNode } from 'react';
import { createPortal } from 'react-dom';

export const PortalDropdown = ({ children } : {children: ReactNode}) => {
  return createPortal(
    <div className="absolute z-50">
      {children}
    </div>,
    document.body
  );
};