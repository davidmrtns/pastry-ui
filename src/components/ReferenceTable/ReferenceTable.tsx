import { Reference } from "@/src/types/Reference";
import { ReferenceHeader } from "@/src/types/ReferenceHeader";
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography, Box } from "@mui/material";

type ReferenceTableProps = {
  reference: Reference;
};

export const ReferenceTable = ({ reference }: ReferenceTableProps) => {
  const { name, headers, values, disclaimer } = reference;
  
  const resolveHeaderName = (header: ReferenceHeader) => {
    if(header.footnoteWeight && header.footnoteWeight > 0){
      return header.name + "*".repeat(header.footnoteWeight);
    }else{
      return header.name;
    }
  }

  const resolveFootnote = (header: ReferenceHeader) => {
    if(header.footnoteWeight && header.footnoteWeight > 0){
      return "*".repeat(header.footnoteWeight) + header.footnote;
    }
  }
  
  return(
    <TableContainer
      sx={{ 
        paddingX: {
          xs: 3,
          sm: 2,
          md: 5
        },
        paddingTop: {
          xs: 2,
          sm: 3,
          md: 4
        },
        paddingBottom: {
          xs: 7,
          sm: 5,
          md: 5
        },
      }}
    >
      {name && (
        <Typography variant="h6" 
          sx={{ 
            textAlign: 'center',
            fontWeight: 'bold',
            fontStyle: 'italic',
            fontSize: {
              xs: '1.3rem',
              sm: '1.5rem',
              md: 35
            },
            paddingBottom: 0.7
          }}
        >
          {name}
        </Typography>
      )}
      <Table sx={{ border: 1 }}>
        <TableHead 
          sx={(theme) => ({
            backgroundColor: theme.palette.secondary.main,
          })}
        >
          <TableRow>
            {headers.map((header, index) => (
              <TableCell
                key={index}
                sx={(theme) => ({
                  fontWeight: 'bold',
                  textAlign: 'center',
                  color: theme.palette.text.secondary,
                  borderBottom: "unset"
                })}
              >
                {resolveHeaderName(header)}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {values.map((row, rowIndex) => (
            <TableRow key={rowIndex}
              sx={{
                backgroundColor: rowIndex % 2 === 0 ? '#ffffff35' : 'transparent',
              }}
            >
              {row.map((cell, cellIndex) => (
                <TableCell key={cellIndex} sx={{ textAlign: 'center', borderBottom: "unset" }}>
                  {cell}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
      {headers.some(header => header.footnote) && (
        <Typography variant="caption" 
          sx={{ 
            textAlign: 'center',
            fontStyle: 'italic',
            paddingTop: 1,
            fontSize: {
              xs: '0.7rem',
              sm: '0.9rem',
              md: '1rem'
            }
          }}
        >
          {headers.filter(header => header.footnote).map((header, index) => (
            <span key={index}>
              {resolveFootnote(header)}
              {index < headers.filter(header => header.footnote).length - 1 ? " | " : ""}
            </span>
          ))}
        </Typography>
      )}
      {disclaimer && (
        <Box>
          <Typography variant="caption" 
            sx={{ 
              textAlign: 'left',
              fontStyle: 'italic',
              fontWeight: 'bold',
              textDecoration: 'underline',
              fontSize: {
                xs: '1rem',
                sm: '1.1rem',
                md: "1.3rem"
              }
            }}
          >
            {disclaimer}
          </Typography>
        </Box>
      )}
    </TableContainer>
  );
}
