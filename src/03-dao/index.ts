/**
 * Patrón DAO (Data Access Object)
 * Aísla la interfaz de acceso a datos de la implementación subyacente.
 */
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

export class InMemoryUserDao implements UserDao {
  private users: Map<number, User> = new Map();

  async get(id: number): Promise<User | null> {
    return this.users.get(id) || null;
  }

  async getAll(): Promise<User[]> {
    return Array.from(this.users.values());
  }

  async save(user: User): Promise<void> {
    this.users.set(user.id, user);
  }

  async update(user: User): Promise<void> {
    if (this.users.has(user.id)) {
      this.users.set(user.id, user);
    }
  }

  async delete(id: number): Promise<void> {
    this.users.delete(id);
  }
}

