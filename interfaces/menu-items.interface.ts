export interface IMenuItem {
    info: Restaurant
}

interface Restaurant {
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
    sla?: Record<any, any>
  }
  