export interface Card {
  id: string
  image: string
  title: string
  day: string
  month: string
  location: string
  price: string
  description: string
  dayName: string
  time: string
 
}


export interface OfferI {
        id: number;
        description: string;
        image: string;
        action: string;
    }