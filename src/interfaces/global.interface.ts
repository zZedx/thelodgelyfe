export interface ICabin {
  _id: string;
  name: string;
  maxCapacity: number;
  discount: number;
  description: string;
  regularPrice: number;
  image: string;
  imageName: string;
}

export interface IBooking {
  id: string;
  guestId: string;
  startDate: string;
  endDate: string;
  numNights: number;
  totalPrice: number;
  numGuests: number;
  status: string;
  created_at: string;
  cabins: {
    name: string;
    image: string;
  };
}
