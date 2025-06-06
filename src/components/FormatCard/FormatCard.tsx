import { Price } from '@/src/types/Price';
import { Typography, Card, CardContent } from '@mui/material';

type FormatCardProps = {
  size: string;
  price: Price;
  borderType?: 'round' | 'square';
};

export const FormatCard = ({ size, price, borderType = 'square' }: FormatCardProps) => {
  return (
    <Card 
      sx={{ 
        backgroundColor: '#ac1456',
        color: '#fff',
        border: 1,
        borderColor: '#000000',
        borderRadius: borderType === 'round' ? '50px' : 0,
        minWidth: {
          xs: '5%',
          sm: '',
          md: '10%'
        },
        maxWidth: {
          xs: '20%',
          sm: '',
          md: '20%'
        },
        textAlign: 'center',
        padding: 1
      }}
    >
      <CardContent
        sx={{ 
          '&:last-child': {
            paddingBottom: {
              xs: '4px',
              sm: '16px',
              md: '16px'
            },
          },
          padding: {
            xs: '4px',
            sm: '16px',
            md: '16px'
          }
        }}
      >
        <Typography variant='h5' 
          sx={{ 
            fontWeight: 'bold',
            fontStyle: 'italic',
            fontSize: {
              xs: '0.7rem',
              sm: '1.2rem',
              md: '1em'
            }
          }}
        >
          {size}
        </Typography>
        <Typography variant='h5'
          sx={{ 
            fontSize: {
              xs: '0.7rem',
              sm: '1.2rem',
              md: '1em'
            }
          }}
        >
          {price.currency} {price.value}
        </Typography>
      </CardContent>
    </Card>
  );
};
