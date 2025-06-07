import { Box, Divider, Typography, AppBar, Toolbar, Avatar, TextField, InputAdornment, SpeedDial, SpeedDialAction, SpeedDialIcon } from '@mui/material';
import { CakeBoardData } from "../types/CakeBoardData";
import { CakeBoard } from '../components/CakeBoard/CakeBoard';
import { SearchProvider, useSearch } from '../contexts/SearchContext/SearchContext';
import CakeIcon from '@mui/icons-material/Cake';
import { Marquee } from '../components/Marquee/Marquee';

type CakeFactoryProps = {
  name: string,
  logoUrl: string,
  showSearchBar: boolean,
  showFloatingButton: boolean
  cakeBoards: CakeBoardData[];
};

function CakeFactoryContent({ name, logoUrl, showSearchBar, showFloatingButton, cakeBoards }: CakeFactoryProps) {
  return (
    <Box>
      <Marquee 
        name={name}
        logoUrl={logoUrl}
        showSearchBar={showSearchBar}
      />
      {cakeBoards.map((board, index) => (
        <Box key={index}>
          <CakeBoard boardData={board} />
          {index < cakeBoards.length - 1 && <Divider variant="middle" />}
        </Box>
      ))}
      {showFloatingButton && (
        <SpeedDial
          ariaLabel="Floating Action Button"
          sx={{
            position: 'fixed',
            bottom: 16,
            right: 16
          }}
          FabProps={{
            sx: (theme) => ({
              backgroundColor: theme.palette.secondary.main,
              color: theme.palette.text.secondary,
              '&:hover': {
                backgroundColor: theme.palette.secondary.dark,
              }
            })
          }}
          icon={<SpeedDialIcon />}
        >
          <SpeedDialAction
            icon={<CakeIcon />}
            tooltipTitle="Order Cake"
            onClick={() => alert('Order Cake')}
          />
        </SpeedDial>
      )}
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