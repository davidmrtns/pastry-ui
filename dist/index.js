"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.ts
var index_exports = {};
__export(index_exports, {
  CakeBoard: () => CakeBoard,
  CakeFactory: () => CakeFactory,
  Currency: () => Currency,
  FlavorList: () => FlavorList,
  FormatCard: () => FormatCard,
  FormatSection: () => FormatSection,
  Highlighter: () => Highlighter,
  Marquee: () => Marquee,
  ReferenceTable: () => ReferenceTable
});
module.exports = __toCommonJS(index_exports);

// src/utils/CakeFactory.tsx
var import_material7 = require("@mui/material");

// src/components/CakeBoard/CakeBoard.tsx
var import_material4 = require("@mui/material");

// src/components/FormatSection/FormatSection.tsx
var import_material = require("@mui/material");
var import_jsx_runtime = require("react/jsx-runtime");
var FormatSection = ({ name, children }) => {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
    import_material.Box,
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
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
          import_material.Box,
          {
            sx: {
              width: {
                xs: "15%",
                sm: "30%",
                md: "15%"
              }
            },
            children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
              import_material.Typography,
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
var import_material2 = require("@mui/material");
var import_jsx_runtime2 = require("react/jsx-runtime");
var FormatCard = ({ size, price, borderType = "square" }) => {
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
    import_material2.Card,
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
      children: /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(
        import_material2.CardContent,
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
            /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
              import_material2.Typography,
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
            /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(
              import_material2.Typography,
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
var import_material3 = require("@mui/material");
var import_FiberManualRecord = __toESM(require("@mui/icons-material/FiberManualRecord"));

// src/components/Highlighter/Highlighter.tsx
var import_jsx_runtime3 = require("react/jsx-runtime");
var Highlighter = ({ text, query }) => {
  if (!query) return /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(import_jsx_runtime3.Fragment, { children: text });
  const parts = text.split(new RegExp(`(${query})`, "gi"));
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(import_jsx_runtime3.Fragment, { children: parts.map(
    (part, i) => part.toLowerCase().startsWith(query.toLowerCase()) ? /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("mark", { style: { backgroundColor: "#fff176", fontWeight: "bold" }, children: part }, i) : part
  ) });
};

// src/contexts/SearchContext/SearchContext.tsx
var import_react = require("react");
var import_jsx_runtime4 = require("react/jsx-runtime");
var SearchContext = (0, import_react.createContext)(void 0);
var SearchProvider = ({ children }) => {
  const [query, setQuery] = (0, import_react.useState)("");
  return /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(SearchContext.Provider, { value: { query, setQuery }, children });
};
var useSearch = () => {
  const context = (0, import_react.useContext)(SearchContext);
  if (!context) throw new Error("useSearch must be used within a SearchProvider");
  return context;
};

// src/components/FlavorList/FlavorList.tsx
var import_jsx_runtime5 = require("react/jsx-runtime");
var MAX_COLUMNS = 2;
var FlavorList = ({ flavors }) => {
  const { query, setQuery } = useSearch();
  const itemsPerColumn = Math.ceil(flavors.length / MAX_COLUMNS);
  const columns = Array.from(
    { length: MAX_COLUMNS },
    (_, i) => flavors.slice(i * itemsPerColumn, (i + 1) * itemsPerColumn)
  ).filter((col) => col.length > 0);
  return /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(
    import_material3.Box,
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
      children: columns.map((col, colIndex) => /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(import_material3.List, { dense: true, disablePadding: true, children: col.map((flavor, i) => /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)(import_material3.ListItem, { disableGutters: true, sx: { py: 0 }, children: [
        /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(import_material3.ListItemIcon, { sx: { minWidth: 20 }, children: /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(import_FiberManualRecord.default, { sx: { fontSize: 6 } }) }),
        /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(
          import_material3.ListItemText,
          {
            primary: /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(Highlighter, { text: flavor, query }),
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
var import_jsx_runtime6 = require("react/jsx-runtime");
var CakeBoard = ({ boardData }) => {
  return /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)(
    import_material4.Box,
    {
      sx: {
        minWidth: 200,
        backgroundColor: "transparent",
        padding: 1
      },
      children: [
        boardData.name && /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(
          import_material4.Typography,
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
        /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)(
          import_material4.Box,
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
              boardData.roundFormats && /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(FormatSection, { name: "Formato redondo", children: boardData.roundFormats.map((cake, index) => /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(FormatCard, { size: cake.size, price: cake.price, borderType: "round" }, `rd${index}`)) }),
              boardData.squareFormats && /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(FormatSection, { name: "Formato retangular", children: boardData.squareFormats.map((cake, index) => /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(FormatCard, { size: cake.size, price: cake.price, borderType: "square" }, `sq${index}`)) })
            ]
          }
        ),
        boardData.flavors && /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(FlavorList, { flavors: boardData.flavors })
      ]
    }
  );
};

// src/components/Marquee/Marquee.tsx
var import_material5 = require("@mui/material");
var import_Search = __toESM(require("@mui/icons-material/Search"));
var import_Cake = __toESM(require("@mui/icons-material/Cake"));
var import_jsx_runtime7 = require("react/jsx-runtime");
var Marquee = ({ name, logoUrl, showSearchBar, searchBarPlaceholder }) => {
  const { query, setQuery } = useSearch();
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };
  return /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)(import_material5.Box, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(import_material5.AppBar, { position: "fixed", color: "primary", elevation: 1, children: /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)(import_material5.Toolbar, { sx: { display: "flex", alignItems: "center", gap: 1 }, children: [
      /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)(
        import_material5.Box,
        {
          onClick: scrollToTop,
          sx: {
            display: "flex",
            alignItems: "center",
            gap: 1,
            cursor: "pointer"
          },
          children: [
            /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(
              import_material5.Avatar,
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
                children: /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(import_Cake.default, { sx: (theme) => ({ color: theme.palette.text.secondary }) })
              }
            ),
            /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(
              import_material5.Typography,
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
      showSearchBar && /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(
        import_material5.TextField,
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
              startAdornment: /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(import_material5.InputAdornment, { position: "start", children: /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(
                import_Search.default,
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
    /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(import_material5.Toolbar, {})
  ] });
};

// src/components/ReferenceTable/ReferenceTable.tsx
var import_material6 = require("@mui/material");
var import_jsx_runtime8 = require("react/jsx-runtime");
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
  return /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)(
    import_material6.TableContainer,
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
        name && /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(
          import_material6.Typography,
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
        /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)(import_material6.Table, { sx: { border: 1 }, children: [
          /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(
            import_material6.TableHead,
            {
              sx: (theme) => ({
                backgroundColor: theme.palette.secondary.main
              }),
              children: /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(import_material6.TableRow, { children: headers.map((header, index) => /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(
                import_material6.TableCell,
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
          /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(import_material6.TableBody, { children: values.map((row, rowIndex) => /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(
            import_material6.TableRow,
            {
              sx: {
                backgroundColor: rowIndex % 2 === 0 ? "#ffffff35" : "transparent"
              },
              children: row.map((cell, cellIndex) => /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(import_material6.TableCell, { sx: { textAlign: "center", borderBottom: "unset" }, children: cell }, cellIndex))
            },
            rowIndex
          )) })
        ] }),
        headers.some((header) => header.footnote) && /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(
          import_material6.Typography,
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
            children: headers.filter((header) => header.footnote).map((header, index) => /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)("span", { children: [
              resolveFootnote(header),
              index < headers.filter((header2) => header2.footnote).length - 1 ? " | " : ""
            ] }, index))
          }
        ),
        disclaimer && /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(import_material6.Box, { children: /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(
          import_material6.Typography,
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
var import_jsx_runtime9 = require("react/jsx-runtime");
function CakeFactoryContent({ name, logoUrl, showSearchBar, searchBarPlaceholder, children, cakeBoards, reference }) {
  return /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)(import_material7.Box, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(
      Marquee,
      {
        name,
        logoUrl,
        showSearchBar,
        searchBarPlaceholder
      }
    ),
    cakeBoards.map((board, index) => /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)(import_material7.Box, { children: [
      /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(CakeBoard, { boardData: board }),
      index < cakeBoards.length - 1 && /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(import_material7.Divider, { variant: "middle" })
    ] }, index)),
    children,
    reference && /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(ReferenceTable, { reference })
  ] });
}
function CakeFactory(props) {
  return /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(SearchProvider, { children: /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(CakeFactoryContent, { ...props }) });
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
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  CakeBoard,
  CakeFactory,
  Currency,
  FlavorList,
  FormatCard,
  FormatSection,
  Highlighter,
  Marquee,
  ReferenceTable
});
//# sourceMappingURL=index.js.map