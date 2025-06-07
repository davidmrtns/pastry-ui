import { useSearch } from '../../contexts/SearchContext/SearchContext';
import { AppBar, Avatar, Box, InputAdornment, TextField, Toolbar, Typography } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import CakeIcon from '@mui/icons-material/Cake';

type MarqueeProps = {
  name: string,
  logoUrl?: string,
  showSearchBar?: boolean;
  searchBarPlaceholder?: string;
};

export const Marquee = ({ name, logoUrl, showSearchBar, searchBarPlaceholder }: MarqueeProps) => {
  const { query, setQuery } = useSearch();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return(
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
              src={logoUrl}
              sx={(theme) => ({ 
                bgcolor: !logoUrl ? theme.palette.secondary.main : 'transparent',
                width: {
                  xs: '3.3rem',
                  sm: '3.5rem',
                  md: '3.7rem'
                },
                height: {
                  xs: '3.3rem',
                  sm: '3.5rem',
                  md: '3.7rem'
                }
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
              {name}
            </Typography>
          </Box>
          {showSearchBar && (
            <TextField
              placeholder={searchBarPlaceholder || "Search..."}
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
    </Box>
  );
}