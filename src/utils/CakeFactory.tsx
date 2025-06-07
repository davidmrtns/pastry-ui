import { Box, Divider, SpeedDial } from '@mui/material';
import { CakeBoardData } from "../types/CakeBoardData";
import { CakeBoard } from '../components/CakeBoard/CakeBoard';
import { SearchProvider } from '../contexts/SearchContext/SearchContext';
import { Marquee } from '../components/Marquee/Marquee';
import { ReactElement } from 'react';

type CakeFactoryProps = {
  name: string,
  logoUrl: string,
  showSearchBar: boolean,
  searchBarPlaceholder?: string,
  children: ReactElement<typeof SpeedDial>,
  cakeBoards: CakeBoardData[];
};

function CakeFactoryContent({ name, logoUrl, showSearchBar, searchBarPlaceholder, children, cakeBoards }: CakeFactoryProps) {
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