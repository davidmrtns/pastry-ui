import { CakeBoardData } from "./CakeBoardData"

export type CakeRecipe = {
  name: string;
  logoUrl?: string;
  showSearchBar?: boolean;
  showFloatingButton?: boolean;
  cakeBoards: CakeBoardData[];
}