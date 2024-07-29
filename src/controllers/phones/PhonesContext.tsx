import React from 'react';
import { Phone } from '../../types';


export interface PhonesContextType {
  phones: Phone[];
}

export const PhonesContext = React.createContext<PhonesContextType>({
  phones: []
});
