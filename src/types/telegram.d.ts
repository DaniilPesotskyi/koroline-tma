export interface IRequestContactResponse {
    response: string;
    responseUnsafe: {
        contact: {
            phone_number: string;
            first_name: string;
            last_name: string;
            user_id: number;
        };
        auth_date: string;
        hash: string;
    };
    status: string;
}

export interface IUser {
    id: number;
    first_name: string;
    last_name?: string;
    username?: string;
    is_premium?: boolean;
    allows_write_to_pm?: boolean;
    language_code?: string;
    photo_url?: string;
}