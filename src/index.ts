import { uuid } from 'uuidv4';
import { User } from "./entities/User";
import { ListUserManagement } from './ListUserManagement'
const id  = uuid();
const user : User = {
    id,
    email: "string",
    first_name: "string",
    last_name: "string",
    password: "string",
}

const userManagement = new ListUserManagement();

userManagement.saveUser(user);

const loadedUser = userManagement.loadUser(id);
console.log(userManagement.users);
