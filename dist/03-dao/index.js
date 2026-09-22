"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InMemoryUserDao = void 0;
class InMemoryUserDao {
    constructor() {
        this.users = new Map();
    }
    async get(id) {
        return this.users.get(id) || null;
    }
    async getAll() {
        return Array.from(this.users.values());
    }
    async save(user) {
        this.users.set(user.id, user);
    }
    async update(user) {
        if (this.users.has(user.id)) {
            this.users.set(user.id, user);
        }
    }
    async delete(id) {
        this.users.delete(id);
    }
}
exports.InMemoryUserDao = InMemoryUserDao;
//# sourceMappingURL=index.js.map