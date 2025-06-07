import { CakeFormat } from "./CakeFormat";

export type CakeBoardData = {
  name?: string;
  flavors?: string[];
  roundFormats?: CakeFormat[];
  squareFormats?: CakeFormat[];
}