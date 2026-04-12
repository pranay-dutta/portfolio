import { Reference } from "./Reference";

export interface ProjectType {
  id: number;
  name: string;
  description: string;
  repo?: Reference;
  website?: Reference;
}
