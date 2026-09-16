export type Category =
  | "Frontend"
  | "Backend"
  | "Database"
  | "Language"
  | "Styling"
  | "DevOps";

export interface Technology {
  id: number;
  name: string;
  description: string;
  category: Category;
  level: string;
  rating: number;
  badge: string;
  badgeType: string;
  icon: string;
}