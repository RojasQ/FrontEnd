import { User } from 'src/app/class/user';
import { MessageI } from './MessageI';

export interface ChatI{
    $chatKey?: string
    title: string
    icon?: string
    msgPreview: string
    isRead: boolean
    lastMsg: string
    msgs?: Array<MessageI>
    chatMembers: Array<User>
    isGroup: boolean
    chatAdmins?: Array<User>
}
