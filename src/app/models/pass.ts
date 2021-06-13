export class Pass {
    numberOfGuests: string;
    firstName: string;
    lastName: string;
    email: string;
    facilityName: string;
    date: Date;
    type: string;
    parkName: string;

    constructor(obj?: any) {
        this.numberOfGuests = obj && obj.numberOfGuests|| null;
        this.firstName = obj && obj.firstName || null;
        this.lastName = obj && obj.lastName || null;
        this.email = obj && obj.email || null;
        this.facilityName = obj && obj.facilityName || null;
        this.date = obj && obj.date || null;
        this.parkName = obj && obj.parkName || null;
    }
}
