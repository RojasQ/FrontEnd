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
    blockedUsers?: Array<User>
    connected: boolean;
    onChatWith?: ChatI;
}
