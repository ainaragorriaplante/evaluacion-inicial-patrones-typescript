export interface User {
    id: number;
    name: string;
    email: string;
}
export interface UserDAO {
    selectAll(): Promise<User[]>;
    selectById(id: number): Promise<User | null>;
    insert(user: User): Promise<void>;
    update(user: User): Promise<boolean>;
    delete(id: number): Promise<boolean>;
}
export declare class InMemoryUserDAO implements UserDAO {
    private users;
    selectAll(): Promise<User[]>;
    selectById(id: number): Promise<User | null>;
    insert(user: User): Promise<void>;
    update(user: User): Promise<boolean>;
    delete(id: number): Promise<boolean>;
}
export declare function runDaoDemo(): Promise<void>;
