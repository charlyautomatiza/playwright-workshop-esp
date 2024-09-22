export interface Booking {
    bookingid: number;
    roomid: number;
    firstname: string;
    lastname: string;
    depositpaid: boolean;
    bookingdates: {
      checkin: string;
      checkout: string;
    };
}
