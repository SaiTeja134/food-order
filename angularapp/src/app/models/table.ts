export interface Table {
    _id: string;
    tableNo: number;
    capacity: 2 | 4 | 6;
    isAvailable: boolean;
    isSelected?: boolean;
    alloted: boolean;
    booked: boolean;
    served: boolean;
    bookingDate?: Date | null;
    bookingTime?: string | null;
    userId?: string | null;
    createdAt?: Date;
    updatedAt?: Date;
}