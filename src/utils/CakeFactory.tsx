import { Box, Divider, Typography, AppBar, Toolbar, Avatar, TextField, InputAdornment, SpeedDial, SpeedDialAction, SpeedDialIcon } from '@mui/material';
import { CakeRecipe } from "../types/CakeRecipe";
import { CakeBoard } from '../components/CakeBoard/CakeBoard';
import { SearchProvider, useSearch } from '../contexts/SearchContext/SearchContext';
import CakeIcon from '@mui/icons-material/Cake';
import SearchIcon from '@mui/icons-material/Search';

type CakeFactoryProps = {
  cakeRecipe: CakeRecipe;
};

function CakeFactoryContent({ cakeRecipe }: CakeFactoryProps) {
  const { query, setQuery } = useSearch();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <Box>
      <AppBar position="fixed" color="primary" elevation={1}>
        <Toolbar sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <Box
            onClick={scrollToTop}
            sx={{
              display: 'flex',
              alignItems: 'center',
              gap: 1,
              cursor: 'pointer',
            }}
          >
            <Avatar 
              src={cakeRecipe.logoUrl}
              sx={(theme) => ({ 
                bgcolor: !cakeRecipe.logoUrl ? theme.palette.secondary.main : 'transparent', 
              })}
            >
              <CakeIcon sx={(theme) => ({ color: theme.palette.text.secondary })} />
            </Avatar>
            <Typography variant="h4"
              sx={{
                textAlign: 'left',
                fontWeight: 'bold',
                fontStyle: 'italic',
                fontSize: {
                  xs: '1.3rem',
                  sm: '1.4rem',
                  md: 35
                }
              }}
            >
              {cakeRecipe.name}
            </Typography>
          </Box>
          {cakeRecipe.showSearchBar && (
            <TextField
              placeholder="Buscar sabor..."
              size="small"
              onChange={e => setQuery(e.target.value)}
              sx={{
                backgroundColor: '#ffffff',
                borderRadius: 20,
                ml: 'auto',
                width: {
                  xs: '40%',
                  sm: '250px'
                },
                '& .MuiOutlinedInput-root': {
                  '& fieldset': {
                    border: 'none',
                  }
                }
              }}
              slotProps={{
                input: {
                  startAdornment: (
                    <InputAdornment position="start">
                      <SearchIcon sx={{
                        width: {
                            xs: '1.1rem',
                            sm: '1.2rem',
                            md: '1.8rem'
                          }
                        }}
                      />
                    </InputAdornment>
                  ),
                  sx: {
                    fontSize: {
                      xs: '0.7rem',
                      sm: '0.8rem',
                      md: '1rem'
                    }
                  }
                }
              }}
            />
          )}
        </Toolbar>
      </AppBar>
      <Toolbar />
      {cakeRecipe.cakeBoards.map((board, index) => (
        <Box key={index}>
          <CakeBoard boardData={board} />
          {index < cakeRecipe.cakeBoards.length - 1 && <Divider variant="middle" />}
        </Box>
      ))}
      {cakeRecipe.showFloatingButton && (
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