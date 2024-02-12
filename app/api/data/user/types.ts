export interface UserType {
    id: number;
    email: string;
    username: string;
    password: string;
    name: {
        firstname: string;
        lastname: string;
    };
    address: {
        city: string;
        street: string;
        number: string;
        zipcode: string;
        geolocation: {
            lat: number;
            long: number;
        };
    };
    phone: string;
}

export type UserTypePartial = Partial<{
    id: number | string;
    email: string;
    username: string;
    password: string;
    name: Partial<{
        firstname: string;
        lastname: string;
    }>
    address: Partial<{
        city: string;
        street: string;
        number: string | number;
        zipcode: string;
        geolocation: Partial<{
            lat: number | string;
            long: number | string;
        }>
    }>
    phone: string | number;
}>