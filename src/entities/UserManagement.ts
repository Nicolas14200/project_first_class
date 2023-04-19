export interface UserManagement<T,X> {
    saveUser(user:T): void;
    loadUser(id: X): void;
    getUsers(): T[];
    loadUserById(id:X):T;
    canSave():boolean;
} 