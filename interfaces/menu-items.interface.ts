export interface IMenuItem {
  info: Restaurant;
}

export interface Restaurant {
  id: string;
  name: string;
  cloudinaryImageId: string;
  locality: string;
  areaName: string;
  costForTwo: string;
  cuisines: string[];
  avgRating: number;
  parentId: string;
  avgRatingString: string;
  totalRatingsString: string;
  deliveryTime: number;
  veg?: boolean;
  sla?: Record<any, any>;
}

export interface InfoItem {
  id: string;
}

export interface GridElements {
  infoWithStyle?: {
    info?: InfoItem[];
    restaurants?: IMenuItem[];
  };
}

export interface CardData {
  header?: {
    title?: string;
  };
  gridElements?: GridElements;
}

export interface MenuProps {
  card?: {
    card?: CardData;
  };
}

export interface DynamicCardRendererProps {
  menu: MenuProps;
}
