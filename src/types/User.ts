export interface User {
    id: string;
    name: string;
    email: string;
    password: string;
    password_confirmation: string;
    role: string;
    token: string;
}

export const defaultUser: User = {
    id: '',
    name: '',
    email: '',
    password: '',
    password_confirmation: '',
    role: '',
    token: '',
};

export interface UserErrors {
    name: string[];
    email: string[];
    password: string[];
    password_confirmation: string[];
    role: string[];
}

export const defaultUserErrors: UserErrors = {
    name: [],
    email: [],
    password: [],
    password_confirmation: [],
    role: [],
};