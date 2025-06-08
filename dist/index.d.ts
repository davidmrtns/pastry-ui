import * as react_jsx_runtime from 'react/jsx-runtime';
import { SpeedDial } from '@mui/material';
import { ReactElement } from 'react';

declare enum Currency {
    BRL = "R$",
    USD = "$",
    EUR = "\u20AC",
    GBP = "\u00A3",
    JPY = "\u00A5"
}

type Price = {
    value: number;
    currency?: Currency;
};

type CakeFormat = {
    size: string;
    price: Price;
};

type CakeBoardData = {
    name?: string;
    flavors?: string[];
    roundFormats?: CakeFormat[];
    squareFormats?: CakeFormat[];
};

type ReferenceHeader = {
    name: string;
    footnote?: string;
    footnoteWeight?: number;
};

type Reference = {
    name?: string;
    headers: ReferenceHeader[];
    values: string[][];
    disclaimer?: string;
};

type CakeFactoryProps = {
    name: string;
    logoUrl: string;
    showSearchBar: boolean;
    searchBarPlaceholder?: string;
    children: ReactElement<typeof SpeedDial>;
    cakeBoards: CakeBoardData[];
    reference?: Reference;
};
declare function CakeFactory(props: CakeFactoryProps): react_jsx_runtime.JSX.Element;

type CakeBoardProps = {
    boardData: CakeBoardData;
};
declare const CakeBoard: ({ boardData }: CakeBoardProps) => react_jsx_runtime.JSX.Element;

type FlavorListProps = {
    flavors: string[];
};
declare const FlavorList: ({ flavors }: FlavorListProps) => react_jsx_runtime.JSX.Element;

type FormatCardProps = {
    size: string;
    price: Price;
    borderType?: 'round' | 'square';
};
declare const FormatCard: ({ size, price, borderType }: FormatCardProps) => react_jsx_runtime.JSX.Element;

type FormatSectionProps = {
    name: string;
    children?: React.ReactNode;
};
declare const FormatSection: ({ name, children }: FormatSectionProps) => react_jsx_runtime.JSX.Element;

type HighlighterProps = {
    text: string;
    query: string;
};
declare const Highlighter: ({ text, query }: HighlighterProps) => react_jsx_runtime.JSX.Element;

type MarqueeProps = {
    name: string;
    logoUrl?: string;
    showSearchBar?: boolean;
    searchBarPlaceholder?: string;
};
declare const Marquee: ({ name, logoUrl, showSearchBar, searchBarPlaceholder }: MarqueeProps) => react_jsx_runtime.JSX.Element;

type ReferenceTableProps = {
    reference: Reference;
};
declare const ReferenceTable: ({ reference }: ReferenceTableProps) => react_jsx_runtime.JSX.Element;

export { CakeBoard, type CakeBoardData, CakeFactory, type CakeFormat, Currency, FlavorList, FormatCard, FormatSection, Highlighter, Marquee, type Price, type Reference, type ReferenceHeader, ReferenceTable };
