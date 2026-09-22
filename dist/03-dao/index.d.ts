export interface User {
    id: number;
    name: string;
    email: string;
}
export interface UserDao {
    get(id: number): Promise<User | null>;
    getAll(): Promise<User[]>;
    save(user: User): Promise<void>;
    update(user: User): Promise<void>;
    delete(id: number): Promise<void>;
}
export declare class InMemoryUserDao implements UserDao {
    private users;
    get(id: number): Promise<User | null>;
    getAll(): Promise<User[]>;
    save(user: User): Promise<void>;
    update(user: User): Promise<void>;
    delete(id: number): Promise<void>;
}
