import { UserDb } from "./entities/UserDb";
import { UserManagement } from "./entities/UserManagement";
export class DBUserManagement implements UserManagement<UserDb, string> {
    canSave(): boolean {
        throw new Error("Method not implemented.");
    }
    loadUserById(id: string): UserDb {
        throw new Error("Method not implemented.");
    }
    saveUser(user: UserDb): void {
        throw new Error("Method not implemented.");
    }
    loadUser(id: string): void {
        throw new Error("Method not implemented.");
    }
    getUsers(): UserDb[] {
        throw new Error("Method not implemented.");
    }

}