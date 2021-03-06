import { ChatI } from '../pages/private/home/interfaces/ChatI';

export class User {
    $userkey?: string;
    name: string;
    icon?: string;
    lname: string;
    email: string;
    prefix: string;
    phone: number;
    password: string;
    contacts?: Array<User>;
    blockedUsers?: Array<User>;
    connected: boolean;
    onChatWith?: ChatI;
    // contacts?:  Array<User>;
}
