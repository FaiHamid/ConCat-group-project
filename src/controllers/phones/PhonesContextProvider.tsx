import React, { useEffect, useMemo, useState } from 'react';
import { Phone } from '../../types';
import { PhonesContext } from './PhonesContext';

interface Props {
  children: React.ReactNode;
}

export const PhonesContextProvider: React.FC<Props> = ({ children }) => {
  const [phones, setPhones] = useState<Phone[]>([]);

  const jsonPath = '/api/phones.json';

  useEffect(() => {
    fetch(jsonPath)
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok ' + response.statusText);
        }
        return response.json();
      })
      .then(setPhones)
      .catch(error => {
        console.error('There was a problem with the fetch operation:', error);
      });
  }, []);

  const values = useMemo(
    () => ({
      phones,
    }),
    [phones],
  );

  return (
    <PhonesContext.Provider value={values}>{children}</PhonesContext.Provider>
  );
};
