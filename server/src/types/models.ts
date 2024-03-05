
export interface User {
    id?: number;
    username?: string;
    public_key?: string;
    create_date?: Date;
    password?: string;
    salt?: string;
    sessionToken?: string;
}