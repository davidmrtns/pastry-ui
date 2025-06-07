import { Typography, Box } from '@mui/material';

type FormatSectionProps = {
  name: string;
  children?: React.ReactNode;
};

export const FormatSection = ({ name, children }: FormatSectionProps) => {
  return (
    <Box 
      sx={{ 
        display: 'flex',
        gap: {
          xs: '4px',
          sm: '16px',
          md: 2
        },
        alignItems: 'center',
        justifyContent: {
          xs: 'space-between',
          sm: 'space-between',
          md: 'center'
        },
      }}
    >
      <Box
        sx={{ 
          width: {
            xs: '15%',
            sm: '30%',
            md: '15%'
          }
        }}
      >
        <Typography variant='h5'
          sx={{ 
            fontSize: {
              xs: '0.6rem',
              sm: '1.2rem',
              md: '1.4rem'
            },
            fontWeight: "bold" 
          }}
        >
          {name}
        </Typography>
      </Box>
      {children}
    </Box>
  );
};
