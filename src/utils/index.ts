export interface CreateUser extends Object {
    name: string,
    email: string,
    password: string,
    is_active: boolean,
    role_id: number
}

export interface UpdateUser extends Object {
    name: string,
    email: string,
    password: string | null,
    is_active: boolean,
    role_id: number
}