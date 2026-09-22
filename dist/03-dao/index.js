"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InMemoryUserDAO = void 0;
exports.runDaoDemo = runDaoDemo;
class InMemoryUserDAO {
    constructor() {
        this.users = [
            { id: 1, name: 'Alice Smith', email: 'alice@example.com' },
            { id: 2, name: 'Bob Jones', email: 'bob@example.com' },
        ];
    }
    async selectAll() {
        console.log('[DB Query]: SELECT * FROM users');
        return [...this.users];
    }
    async selectById(id) {
        console.log(`[DB Query]: SELECT * FROM users WHERE id = ${id}`);
        const user = this.users.find((u) => u.id === id);
        return user ? { ...user } : null;
    }
    async insert(user) {
        console.log(`[DB Query]: INSERT INTO users (id, name, email) VALUES (${user.id}, '${user.name}', '${user.email}')`);
        this.users.push({ ...user });
    }
    async update(user) {
        console.log(`[DB Query]: UPDATE users SET name = '${user.name}', email = '${user.email}' WHERE id = ${user.id}`);
        const index = this.users.findIndex((u) => u.id === user.id);
        if (index !== -1) {
            this.users[index] = { ...user };
            return true;
        }
        return false;
    }
    async delete(id) {
        console.log(`[DB Query]: DELETE FROM users WHERE id = ${id}`);
        const initialLength = this.users.length;
        this.users = this.users.filter((u) => u.id !== id);
        return this.users.length < initialLength;
    }
}
exports.InMemoryUserDAO = InMemoryUserDAO;
async function runDaoDemo() {
    console.log('====================================');
    console.log('------ Demostración Patrón DAO -----');
    console.log('====================================');
    const userDao = new InMemoryUserDAO();
    console.log('\n--- 1. selectAll() ---');
    let users = await userDao.selectAll();
    console.log('Usuarios encontrados:', users);
    console.log('\n--- 2. insert() ---');
    await userDao.insert({ id: 3, name: 'Carlos García', email: 'carlos@example.com' });
    console.log('\n--- 3. selectById(3) ---');
    const user = await userDao.selectById(3);
    console.log('Usuario obtenido:', user);
    console.log('\n--- 4. update() ---');
    await userDao.update({ id: 3, name: 'Carlos G. Actualizado', email: 'carlos.actualizado@example.com' });
    const updatedUser = await userDao.selectById(3);
    console.log('Usuario tras actualización:', updatedUser);
    console.log('\n--- 5. delete(1) ---');
    await userDao.delete(1);
    console.log('\n--- selectAll() final ---');
    users = await userDao.selectAll();
    console.log('Lista final de usuarios en base de datos:', users);
}
if (typeof require !== 'undefined' && require.main === module) {
    runDaoDemo();
}
//# sourceMappingURL=index.js.map