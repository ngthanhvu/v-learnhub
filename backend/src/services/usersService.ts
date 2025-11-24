import mysql from 'mysql2/promise';

export interface User {
    id: number;
    name: string;
    email: string;
    password: string;
    created_at?: Date;
    updated_at?: Date;
}

export interface CreateUserData {
    name: string;
    email: string;
    password: string;
}

export interface UpdateUserData {
    name?: string;
    email?: string;
    password?: string;
}

export async function getAll(db: mysql.Pool): Promise<User[]> {
    const [rows] = await db.query('SELECT * FROM users');
    return rows as User[];
}

export async function getById(db: mysql.Pool, id: number): Promise<User | null> {
    const [rows] = await db.query('SELECT * FROM users WHERE id = ?', [id]);
    const result = rows as User[];
    return result[0] || null;
}

export async function create(db: mysql.Pool, data: CreateUserData): Promise<number> {
    const [result] = await db.query('INSERT INTO users (name, email, password) VALUES (?, ?, ?)', [data.name, data.email, data.password]);
    return (result as any).insertId;
}

export async function update(db: mysql.Pool, id: number, data: UpdateUserData): Promise<any> {
    const [result] = await db.query('UPDATE users SET name = ?, email = ?, password = ? WHERE id = ?', [data.name, data.email, data.password, id]);
    return result;
}

export async function remove(db: mysql.Pool, id: number): Promise<any> {
    const [result] = await db.query('DELETE FROM users WHERE id = ?', [id]);
    return result;
}
