export interface MessageI{
    $messageKey?: string
    content: string
    time: string
    isRead: boolean
    owner?: string
    isMe: boolean
}
