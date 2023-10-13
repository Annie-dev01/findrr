export interface IUser {
    userName?: string;
    email?: string;
    password?: string;
}

export interface IEnv {
    PORT: string;
    DB_URI: string;
    NODE_ENV: string;
    API_KEY: string;
}
