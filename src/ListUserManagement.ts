import { User } from "./entities/User";
import { UserManagement } from "./entities/UserManagement";
export class ListUserManagement implements UserManagement {
    untruc(){
        
    }
    loadUserById(id: string): User {
        throw new Error("Method not implemented.");
    }
    saveUser(user: User): void {
        throw new Error("Method not implemented.");
    }
    loadUser(id: string): void {
        throw new Error("Method not implemented.");
    }
    getUsers(): User[] {
        throw new Error("Method not implemented.");
    }

}
