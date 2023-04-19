import { User } from "./entities/User";
import { UserManagement } from "./entities/UserManagement";
export class ListUserManagement implements UserManagement<User, number> {
    canSave(): boolean {
        throw new Error("Method not implemented.");
    }
    loadUserById(id: number): User {
        throw new Error("Method not implemented.");
    }
    saveUser(user: User): void {
        throw new Error("Method not implemented.");
    }
    loadUser(id: number): void {
        throw new Error("Method not implemented.");
    }
    getUsers(): User[] {
        throw new Error("Method not implemented.");
    }
}
