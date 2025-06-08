import { Typography, Box } from '@mui/material';
import { FormatSection } from '../FormatSection/FormatSection';
import { FormatCard } from '../FormatCard/FormatCard';
import { FlavorList } from '../FlavorList/FlavorList';
import { CakeBoardData } from '@/src/types/CakeBoardData';

type CakeBoardProps = {
  boardData: CakeBoardData;
};

export const CakeBoard = ({ boardData }: CakeBoardProps) => {
  return (
    <Box 
      sx={{ 
        minWidth: 200,
        backgroundColor: 'transparent',
        padding: 1
      }}
    >
      {boardData.name && 
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
          }}
        >
          {boardData.name}
        </Typography>
      }
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          flexDirection: 'column',
          marginBottom: 1.5,
          gap: 2,
          paddingTop: {
            xs: 1,
            sm: 2,
            md: 2
          }
        }}
      >
        {boardData.roundFormats && 
          <FormatSection name="Formato redondo">
            {boardData.roundFormats.map((cake) => (
              <FormatCard size={cake.size} price={cake.price} borderType='round' />
            ))}
          </FormatSection>
        }
        {boardData.squareFormats && 
          <FormatSection name="Formato retangular">
            {boardData.squareFormats.map((cake) => (
              <FormatCard size={cake.size} price={cake.price} borderType='square' />
            ))}
          </FormatSection>
        }
      </Box>
      {boardData.flavors && 
        <FlavorList flavors={boardData.flavors} />
      }
    </Box>
  );
};
