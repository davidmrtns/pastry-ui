import { ReferenceHeader } from "./ReferenceHeader";

export type Reference = {
  name?: string;
  headers: ReferenceHeader[];
  values: string[][];
  disclaimer?: string;
}