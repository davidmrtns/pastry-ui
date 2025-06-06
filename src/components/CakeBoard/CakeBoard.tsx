import { Typography, Box } from '@mui/material';
import { FormatSection } from '../FormatSection/FormatSection';
import { FormatCard } from '../FormatCard/FormatCard';
import { Cake } from '@/src/types/Cake';
import { FlavorList } from '../FlavorList/FlavorList';

type CakeBoardProps = {
  name?: string;
  flavors?: string[];
  roundFormats?: Cake[];
  squareFormats?: Cake[];
};

export const CakeBoard = ({ name, flavors, roundFormats, squareFormats }: CakeBoardProps) => {
  return (
    <Box 
      sx={{ 
        minWidth: 200,
        marginBottom: 2,
        backgroundColor: 'transparent',
        padding: 1
      }}
    >
      {name && 
        <Typography variant="h6" 
          sx={{ 
            textAlign: 'center',
            fontWeight: 'bold',
            fontStyle: 'italic',
            fontSize: {
              xs: '1.1rem',
              sm: '1.2rem',
              md: 30
            },
            paddingBottom: 2 
          }}
        >
          {name}
        </Typography>
      }
      <Box sx={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', marginBottom: 2, gap: 2 }}>
        {roundFormats && 
          <FormatSection name="Formato redondo">
            {roundFormats.map((cake) => (
              <FormatCard size={cake.size} price={cake.price} borderType='round' />
            ))}
          </FormatSection>
        }
        {squareFormats && 
          <FormatSection name="Formato retangular">
            {squareFormats.map((cake) => (
              <FormatCard size={cake.size} price={cake.price} borderType='square' />
            ))}
          </FormatSection>
        }
      </Box>
      {flavors && 
        <FlavorList flavors={flavors} />
      }
    </Box>
  );
};
