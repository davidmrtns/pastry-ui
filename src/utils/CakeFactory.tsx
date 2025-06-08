import { Box, Divider, SpeedDial } from '@mui/material';
import { CakeBoardData } from "../types/CakeBoardData";
import { CakeBoard } from '../components/CakeBoard/CakeBoard';
import { SearchProvider } from '../contexts/SearchContext/SearchContext';
import { Marquee } from '../components/Marquee/Marquee';
import { ReactElement } from 'react';
import { ReferenceTable } from '../components/ReferenceTable/ReferenceTable';

type CakeFactoryProps = {
  name: string,
  logoUrl: string,
  showSearchBar: boolean,
  searchBarPlaceholder?: string,
  children: ReactElement<typeof SpeedDial>,
  cakeBoards: CakeBoardData[],
  reference?: Reference;
};

function CakeFactoryContent({ name, logoUrl, showSearchBar, searchBarPlaceholder, children, cakeBoards, reference }: CakeFactoryProps) {
  return (
    <Box>
      <Marquee 
        name={name}
        logoUrl={logoUrl}
        showSearchBar={showSearchBar}
        searchBarPlaceholder={searchBarPlaceholder}
      />
      {cakeBoards.map((board, index) => (
        <Box key={index}>
          <CakeBoard boardData={board} />
          {index < cakeBoards.length - 1 && <Divider variant="middle" />}
        </Box>
      ))}
      {children}
      {reference && <ReferenceTable reference={reference} />}
    </Box>
  );
}

export default function CakeFactory(props: CakeFactoryProps) {
  return(
    <SearchProvider>
      <CakeFactoryContent {...props} />
    </SearchProvider>
  );
}