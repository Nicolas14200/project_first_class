import { User } from "./User";
export interface UserManagement {
    saveUser(user: User): void;
    loadUser(id: string): void;
    getUsers(): User[];
    loadUserById(id:string):User;
} 