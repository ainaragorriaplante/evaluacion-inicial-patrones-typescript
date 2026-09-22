// Entidad de datos
export interface User {
  id: number;
  name: string;
  email: string;
}

// Interfaz que define el contrato DAO
export interface UserDAO {
  selectAll(): Promise<User[]>;
  selectById(id: number): Promise<User | null>;
  insert(user: User): Promise<void>;
  update(user: User): Promise<boolean>;
  delete(id: number): Promise<boolean>;
}

// Implementación concreta que simula consultas a base de datos usando memoria y logs de SQL
export class InMemoryUserDAO implements UserDAO {
  private users: User[] = [
    { id: 1, name: 'Alice Smith', email: 'alice@example.com' },
    { id: 2, name: 'Bob Jones', email: 'bob@example.com' },
  ];

  async selectAll(): Promise<User[]> {
    console.log('[DB Query]: SELECT * FROM users');
    return [...this.users];
  }

  async selectById(id: number): Promise<User | null> {
    console.log(`[DB Query]: SELECT * FROM users WHERE id = ${id}`);
    const user = this.users.find((u) => u.id === id);
    return user ? { ...user } : null;
  }

  async insert(user: User): Promise<void> {
    console.log(`[DB Query]: INSERT INTO users (id, name, email) VALUES (${user.id}, '${user.name}', '${user.email}')`);
    this.users.push({ ...user });
  }

  async update(user: User): Promise<boolean> {
    console.log(`[DB Query]: UPDATE users SET name = '${user.name}', email = '${user.email}' WHERE id = ${user.id}`);
    const index = this.users.findIndex((u) => u.id === user.id);
    if (index !== -1) {
      this.users[index] = { ...user };
      return true;
    }
    return false;
  }

  async delete(id: number): Promise<boolean> {
    console.log(`[DB Query]: DELETE FROM users WHERE id = ${id}`);
    const initialLength = this.users.length;
    this.users = this.users.filter((u) => u.id !== id);
    return this.users.length < initialLength;
  }
}

/**Demostración del patrón DAO*/
export async function runDaoDemo(): Promise<void> {

  const userDao: UserDAO = new InMemoryUserDAO();

  // 1. selectAll
  console.log('\n--- 1. selectAll() ---');
  let users = await userDao.selectAll();
  console.log('Usuarios encontrados:', users);

  // 2. insert
  console.log('\n--- 2. insert() ---');
  await userDao.insert({ id: 3, name: 'Carlos García', email: 'carlos@example.com' });

  // 3. selectById
  console.log('\n--- 3. selectById(3) ---');
  const user = await userDao.selectById(3);
  console.log('Usuario obtenido:', user);

  // 4. update
  console.log('\n--- 4. update() ---');
  await userDao.update({ id: 3, name: 'Carlos G. Actualizado', email: 'carlos.actualizado@example.com' });
  const updatedUser = await userDao.selectById(3);
  console.log('Usuario tras actualización:', updatedUser);

  // 5. delete
  console.log('\n--- 5. delete(1) ---');
  await userDao.delete(1);

  console.log('\n--- selectAll() final ---');
  users = await userDao.selectAll();
  console.log('Lista final de usuarios en base de datos:', users);
}