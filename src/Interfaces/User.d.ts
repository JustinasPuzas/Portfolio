export interface User {
    _id: string;
    username: string;
    email: string;
    admin: boolean;
    createdAt: Date;
}