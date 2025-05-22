import {telegram} from "@/api/axiosInstance.ts";

export interface ISendMessageProps {
    chatId: number
    message: string
}

export const sendMessage = async ({chatId, message}: ISendMessageProps) => {
    const messageData = {
        chat_id: chatId.toString(),
        text: message,
        parse_mode: 'Markdown',
    };

    return telegram.post('/sendMessage', messageData)
}