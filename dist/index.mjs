// src/utils/CakeFactory.tsx
import { Box as Box6, Divider } from "@mui/material";

// src/components/CakeBoard/CakeBoard.tsx
import { Typography as Typography3, Box as Box3 } from "@mui/material";

// src/components/FormatSection/FormatSection.tsx
import { Typography, Box } from "@mui/material";
import { jsx, jsxs } from "react/jsx-runtime";
var FormatSection = ({ name, children }) => {
  return /* @__PURE__ */ jsxs(
    Box,
    {
      sx: {
        display: "flex",
        gap: {
          xs: "4px",
          sm: "16px",
          md: 2
        },
        alignItems: "center",
        justifyContent: {
          xs: "space-between",
          sm: "space-between",
          md: "center"
        }
      },
      children: [
        /* @__PURE__ */ jsx(
          Box,
          {
            sx: {
              width: {
                xs: "15%",
                sm: "30%",
                md: "15%"
              }
            },
            children: /* @__PURE__ */ jsx(
              Typography,
              {
                variant: "h5",
                sx: {
                  fontSize: {
                    xs: "0.6rem",
                    sm: "1.2rem",
                    md: "1.4rem"
                  },
                  fontWeight: "bold"
                },
                children: name
              }
            )
          }
        ),
        children
      ]
    }
  );
};

// src/components/FormatCard/FormatCard.tsx
import { Typography as Typography2, Card, CardContent } from "@mui/material";
import { jsx as jsx2, jsxs as jsxs2 } from "react/jsx-runtime";
var FormatCard = ({ size, price, borderType = "square" }) => {
  return /* @__PURE__ */ jsx2(
    Card,
    {
      sx: (theme) => ({
        backgroundColor: theme.palette.secondary.main,
        color: theme.palette.text.secondary,
        border: 1,
        borderColor: "#000000",
        borderRadius: borderType === "round" ? "50px" : 0,
        width: {
          xs: "20%",
          sm: "30%",
          md: "15%"
        },
        textAlign: "center"
      }),
      children: /* @__PURE__ */ jsxs2(
        CardContent,
        {
          sx: {
            "&:last-child": {
              paddingBottom: {
                xs: "6px",
                sm: "16px",
                md: "16px"
              }
            },
            padding: {
              xs: "6px",
              sm: "16px",
              md: "16px"
            }
          },
          children: [
            /* @__PURE__ */ jsx2(
              Typography2,
              {
                variant: "h5",
                sx: {
                  fontWeight: "bold",
                  fontStyle: "italic",
                  fontSize: {
                    xs: "0.85rem",
                    sm: "1.2rem",
                    md: "1.6rem"
                  }
                },
                children: size
              }
            ),
            /* @__PURE__ */ jsxs2(
              Typography2,
              {
                variant: "h5",
                sx: {
                  fontSize: {
                    xs: "0.8rem",
                    sm: "1.2rem",
                    md: "1.6rem"
                  }
                },
                children: [
                  price.currency,
                  " ",
                  price.value
                ]
              }
            )
          ]
        }
      )
    }
  );
};

// src/components/FlavorList/FlavorList.tsx
import { Box as Box2, List, ListItem, ListItemIcon, ListItemText } from "@mui/material";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";

// src/components/Highlighter/Highlighter.tsx
import { Fragment, jsx as jsx3 } from "react/jsx-runtime";
var Highlighter = ({ text, query }) => {
  if (!query) return /* @__PURE__ */ jsx3(Fragment, { children: text });
  const parts = text.split(new RegExp(`(${query})`, "gi"));
  return /* @__PURE__ */ jsx3(Fragment, { children: parts.map(
    (part, i) => part.toLowerCase().startsWith(query.toLowerCase()) ? /* @__PURE__ */ jsx3("mark", { style: { backgroundColor: "#fff176", fontWeight: "bold" }, children: part }, i) : part
  ) });
};

// src/contexts/SearchContext/SearchContext.tsx
import { createContext, useContext, useState } from "react";
import { jsx as jsx4 } from "react/jsx-runtime";
var SearchContext = createContext(void 0);
var SearchProvider = ({ children }) => {
  const [query, setQuery] = useState("");
  return /* @__PURE__ */ jsx4(SearchContext.Provider, { value: { query, setQuery }, children });
};
var useSearch = () => {
  const context = useContext(SearchContext);
  if (!context) throw new Error("useSearch must be used within a SearchProvider");
  return context;
};

// src/components/FlavorList/FlavorList.tsx
import { jsx as jsx5, jsxs as jsxs3 } from "react/jsx-runtime";
var MAX_COLUMNS = 2;
var FlavorList = ({ flavors }) => {
  const { query, setQuery } = useSearch();
  const itemsPerColumn = Math.ceil(flavors.length / MAX_COLUMNS);
  const columns = Array.from(
    { length: MAX_COLUMNS },
    (_, i) => flavors.slice(i * itemsPerColumn, (i + 1) * itemsPerColumn)
  ).filter((col) => col.length > 0);
  return /* @__PURE__ */ jsx5(
    Box2,
    {
      sx: {
        display: "flex",
        gap: {
          xs: 2,
          sm: "16px",
          md: 10
        },
        justifyContent: {
          xs: "space-between",
          sm: "space-between",
          md: "center"
        },
        padding: "15px"
      },
      children: columns.map((col, colIndex) => /* @__PURE__ */ jsx5(List, { dense: true, disablePadding: true, children: col.map((flavor, i) => /* @__PURE__ */ jsxs3(ListItem, { disableGutters: true, sx: { py: 0 }, children: [
        /* @__PURE__ */ jsx5(ListItemIcon, { sx: { minWidth: 20 }, children: /* @__PURE__ */ jsx5(FiberManualRecordIcon, { sx: { fontSize: 6 } }) }),
        /* @__PURE__ */ jsx5(
          ListItemText,
          {
            primary: /* @__PURE__ */ jsx5(Highlighter, { text: flavor, query }),
            slotProps: {
              primary: {
                fontSize: {
                  xs: "0.6rem",
                  sm: "1.2rem",
                  md: "1em"
                }
              }
            }
          }
        )
      ] }, i)) }, colIndex))
    }
  );
};

// src/components/CakeBoard/CakeBoard.tsx
import { jsx as jsx6, jsxs as jsxs4 } from "react/jsx-runtime";
var CakeBoard = ({ boardData }) => {
  return /* @__PURE__ */ jsxs4(
    Box3,
    {
      sx: {
        minWidth: 200,
        backgroundColor: "transparent",
        padding: 1
      },
      children: [
        boardData.name && /* @__PURE__ */ jsx6(
          Typography3,
          {
            variant: "h6",
            sx: {
              textAlign: "center",
              fontWeight: "bold",
              fontStyle: "italic",
              fontSize: {
                xs: "1.1rem",
                sm: "1.2rem",
                md: 30
              }
            },
            children: boardData.name
          }
        ),
        /* @__PURE__ */ jsxs4(
          Box3,
          {
            sx: {
              display: "flex",
              justifyContent: "center",
              flexDirection: "column",
              marginBottom: 1.5,
              gap: 2,
              paddingTop: {
                xs: 1,
                sm: 2,
                md: 2
              }
            },
            children: [
              boardData.roundFormats && /* @__PURE__ */ jsx6(FormatSection, { name: "Formato redondo", children: boardData.roundFormats.map((cake, index) => /* @__PURE__ */ jsx6(FormatCard, { size: cake.size, price: cake.price, borderType: "round" }, `rd${index}`)) }),
              boardData.squareFormats && /* @__PURE__ */ jsx6(FormatSection, { name: "Formato retangular", children: boardData.squareFormats.map((cake, index) => /* @__PURE__ */ jsx6(FormatCard, { size: cake.size, price: cake.price, borderType: "square" }, `sq${index}`)) })
            ]
          }
        ),
        boardData.flavors && /* @__PURE__ */ jsx6(FlavorList, { flavors: boardData.flavors })
      ]
    }
  );
};

// src/components/Marquee/Marquee.tsx
import { AppBar, Avatar, Box as Box4, InputAdornment, TextField, Toolbar, Typography as Typography4 } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import CakeIcon from "@mui/icons-material/Cake";
import { jsx as jsx7, jsxs as jsxs5 } from "react/jsx-runtime";
var Marquee = ({ name, logoUrl, showSearchBar, searchBarPlaceholder }) => {
  const { query, setQuery } = useSearch();
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };
  return /* @__PURE__ */ jsxs5(Box4, { children: [
    /* @__PURE__ */ jsx7(AppBar, { position: "fixed", color: "primary", elevation: 1, children: /* @__PURE__ */ jsxs5(Toolbar, { sx: { display: "flex", alignItems: "center", gap: 1 }, children: [
      /* @__PURE__ */ jsxs5(
        Box4,
        {
          onClick: scrollToTop,
          sx: {
            display: "flex",
            alignItems: "center",
            gap: 1,
            cursor: "pointer"
          },
          children: [
            /* @__PURE__ */ jsx7(
              Avatar,
              {
                src: logoUrl,
                sx: (theme) => ({
                  bgcolor: !logoUrl ? theme.palette.secondary.main : "transparent",
                  width: {
                    xs: "3.3rem",
                    sm: "3.5rem",
                    md: "3.7rem"
                  },
                  height: {
                    xs: "3.3rem",
                    sm: "3.5rem",
                    md: "3.7rem"
                  }
                }),
                children: /* @__PURE__ */ jsx7(CakeIcon, { sx: (theme) => ({ color: theme.palette.text.secondary }) })
              }
            ),
            /* @__PURE__ */ jsx7(
              Typography4,
              {
                variant: "h4",
                sx: {
                  textAlign: "left",
                  fontWeight: "bold",
                  fontStyle: "italic",
                  fontSize: {
                    xs: "1.3rem",
                    sm: "1.4rem",
                    md: 35
                  }
                },
                children: name
              }
            )
          ]
        }
      ),
      showSearchBar && /* @__PURE__ */ jsx7(
        TextField,
        {
          placeholder: searchBarPlaceholder || "Search...",
          size: "small",
          onChange: (e) => setQuery(e.target.value),
          sx: {
            backgroundColor: "#ffffff",
            borderRadius: 20,
            ml: "auto",
            width: {
              xs: "40%",
              sm: "250px"
            },
            "& .MuiOutlinedInput-root": {
              "& fieldset": {
                border: "none"
              }
            }
          },
          slotProps: {
            input: {
              startAdornment: /* @__PURE__ */ jsx7(InputAdornment, { position: "start", children: /* @__PURE__ */ jsx7(
                SearchIcon,
                {
                  sx: {
                    width: {
                      xs: "1.1rem",
                      sm: "1.2rem",
                      md: "1.8rem"
                    }
                  }
                }
              ) }),
              sx: {
                fontSize: {
                  xs: "0.7rem",
                  sm: "0.8rem",
                  md: "1rem"
                }
              }
            }
          }
        }
      )
    ] }) }),
    /* @__PURE__ */ jsx7(Toolbar, {})
  ] });
};

// src/components/ReferenceTable/ReferenceTable.tsx
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography as Typography5, Box as Box5 } from "@mui/material";
import { jsx as jsx8, jsxs as jsxs6 } from "react/jsx-runtime";
var ReferenceTable = ({ reference }) => {
  const { name, headers, values, disclaimer } = reference;
  const resolveHeaderName = (header) => {
    if (header.footnoteWeight && header.footnoteWeight > 0) {
      return header.name + "*".repeat(header.footnoteWeight);
    } else {
      return header.name;
    }
  };
  const resolveFootnote = (header) => {
    if (header.footnoteWeight && header.footnoteWeight > 0) {
      return "*".repeat(header.footnoteWeight) + header.footnote;
    }
  };
  return /* @__PURE__ */ jsxs6(
    TableContainer,
    {
      sx: {
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
        }
      },
      children: [
        name && /* @__PURE__ */ jsx8(
          Typography5,
          {
            variant: "h6",
            sx: {
              textAlign: "center",
              fontWeight: "bold",
              fontStyle: "italic",
              fontSize: {
                xs: "1.3rem",
                sm: "1.5rem",
                md: 35
              },
              paddingBottom: 0.7
            },
            children: name
          }
        ),
        /* @__PURE__ */ jsxs6(Table, { sx: { border: 1 }, children: [
          /* @__PURE__ */ jsx8(
            TableHead,
            {
              sx: (theme) => ({
                backgroundColor: theme.palette.secondary.main
              }),
              children: /* @__PURE__ */ jsx8(TableRow, { children: headers.map((header, index) => /* @__PURE__ */ jsx8(
                TableCell,
                {
                  sx: (theme) => ({
                    fontWeight: "bold",
                    textAlign: "center",
                    color: theme.palette.text.secondary,
                    borderBottom: "unset"
                  }),
                  children: resolveHeaderName(header)
                },
                index
              )) })
            }
          ),
          /* @__PURE__ */ jsx8(TableBody, { children: values.map((row, rowIndex) => /* @__PURE__ */ jsx8(
            TableRow,
            {
              sx: {
                backgroundColor: rowIndex % 2 === 0 ? "#ffffff35" : "transparent"
              },
              children: row.map((cell, cellIndex) => /* @__PURE__ */ jsx8(TableCell, { sx: { textAlign: "center", borderBottom: "unset" }, children: cell }, cellIndex))
            },
            rowIndex
          )) })
        ] }),
        headers.some((header) => header.footnote) && /* @__PURE__ */ jsx8(
          Typography5,
          {
            variant: "caption",
            sx: {
              textAlign: "center",
              fontStyle: "italic",
              paddingTop: 1,
              fontSize: {
                xs: "0.7rem",
                sm: "0.9rem",
                md: "1rem"
              }
            },
            children: headers.filter((header) => header.footnote).map((header, index) => /* @__PURE__ */ jsxs6("span", { children: [
              resolveFootnote(header),
              index < headers.filter((header2) => header2.footnote).length - 1 ? " | " : ""
            ] }, index))
          }
        ),
        disclaimer && /* @__PURE__ */ jsx8(Box5, { children: /* @__PURE__ */ jsx8(
          Typography5,
          {
            variant: "caption",
            sx: {
              textAlign: "left",
              fontStyle: "italic",
              fontWeight: "bold",
              textDecoration: "underline",
              fontSize: {
                xs: "1rem",
                sm: "1.1rem",
                md: "1.3rem"
              }
            },
            children: disclaimer
          }
        ) })
      ]
    }
  );
};

// src/utils/CakeFactory.tsx
import { jsx as jsx9, jsxs as jsxs7 } from "react/jsx-runtime";
function CakeFactoryContent({ name, logoUrl, showSearchBar, searchBarPlaceholder, children, cakeBoards, reference }) {
  return /* @__PURE__ */ jsxs7(Box6, { children: [
    /* @__PURE__ */ jsx9(
      Marquee,
      {
        name,
        logoUrl,
        showSearchBar,
        searchBarPlaceholder
      }
    ),
    cakeBoards.map((board, index) => /* @__PURE__ */ jsxs7(Box6, { children: [
      /* @__PURE__ */ jsx9(CakeBoard, { boardData: board }),
      index < cakeBoards.length - 1 && /* @__PURE__ */ jsx9(Divider, { variant: "middle" })
    ] }, index)),
    children,
    reference && /* @__PURE__ */ jsx9(ReferenceTable, { reference })
  ] });
}
function CakeFactory(props) {
  return /* @__PURE__ */ jsx9(SearchProvider, { children: /* @__PURE__ */ jsx9(CakeFactoryContent, { ...props }) });
}

// src/types/Currency.ts
var Currency = /* @__PURE__ */ ((Currency2) => {
  Currency2["BRL"] = "R$";
  Currency2["USD"] = "$";
  Currency2["EUR"] = "\u20AC";
  Currency2["GBP"] = "\xA3";
  Currency2["JPY"] = "\xA5";
  return Currency2;
})(Currency || {});
export {
  CakeBoard,
  CakeFactory,
  Currency,
  FlavorList,
  FormatCard,
  FormatSection,
  Highlighter,
  Marquee,
  ReferenceTable
};
//# sourceMappingURL=index.mjs.map