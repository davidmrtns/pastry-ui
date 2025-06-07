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
      sx={(theme) => ({ 
        backgroundColor: theme.palette.secondary.main,
        color: theme.palette.text.secondary,
        border: 1,
        borderColor: '#000000',
        borderRadius: borderType === 'round' ? '50px' : 0,
        width: {
          xs: '20%',
          sm: '30%',
          md: '15%'
        },
        textAlign: 'center'
      })}
    >
      <CardContent
        sx={{ 
          '&:last-child': {
            paddingBottom: {
              xs: '6px',
              sm: '16px',
              md: '16px'
            },
          },
          padding: {
            xs: '6px',
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
              xs: '0.85rem',
              sm: '1.2rem',
              md: '1.6rem'
            }
          }}
        >
          {size}
        </Typography>
        <Typography variant='h5'
          sx={{ 
            fontSize: {
              xs: '0.8rem',
              sm: '1.2rem',
              md: '1.6rem'
            }
          }}
        >
          {price.currency} {price.value}
        </Typography>
      </CardContent>
    </Card>
  );
};
