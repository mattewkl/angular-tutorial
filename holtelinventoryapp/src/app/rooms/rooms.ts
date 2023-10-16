export interface RoomInterface {
  totalRooms:number;
  availableRooms:number;
  bookedRooms:number;

}

export  interface  RoomDataInterface {
  roomNumber:number;
  roomType: string;
  amenities: string;
  price: number;
  photos: string;
  checkInTime: Date;
  checkOutTime: Date;
  rating?: number;

}
