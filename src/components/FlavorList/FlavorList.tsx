import { Box, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';

type FlavorListProps = {
  flavors: string[];
};

const MAX_COLUMNS = 2;

export const FlavorList = ({ flavors }: FlavorListProps) => {
  const itemsPerColumn = Math.ceil(flavors.length / MAX_COLUMNS);

  const columns = Array.from({ length: MAX_COLUMNS }, (_, i) =>
    flavors.slice(i * itemsPerColumn, (i + 1) * itemsPerColumn)
  ).filter((col) => col.length > 0);

  return (
    <Box 
      sx={{ 
        display: 'flex',
        gap: {
          xs: 2,
          sm: '16px',
          md: 10
        },
        justifyContent: {
          xs: 'space-between',
          sm: 'space-between',
          md: 'center'
        }
      }}
    >
      {columns.map((col, colIndex) => (
        <List key={colIndex} dense disablePadding>
          {col.map((flavor, i) => (
            <ListItem key={i} disableGutters sx={{ py: 0.1 }}>
              <ListItemIcon sx={{ minWidth: 20 }}>
                <FiberManualRecordIcon sx={{ fontSize: 6 }} />
              </ListItemIcon>
              <ListItemText 
                primary={flavor}
                slotProps={{
                  primary: {
                    fontSize: {
                      xs: '0.6rem',
                      sm: '1.2rem',
                      md: '1em'
                    }
                  }
                }}
              />
            </ListItem>
          ))}
        </List>
      ))}
    </Box>
  );
};
