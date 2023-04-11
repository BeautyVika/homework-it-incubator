import React from 'react'
import Message from './message/Message'
import MessageSender from './message-sender/MessageSender'
import s2 from '../../s1-main/App.module.css'
import FriendMessage from './friend-message/FriendMessage'
import avatar from './avatar.png'

export type MessageType = {
    id: number
    user: UserType
    message: MessageTextType
}

type MessageTextType = {
    text: string
    time: string
}
type UserType ={
    avatar: string
    name: string
}

export const message0: MessageType = {
    id: 0,
    user: {
        avatar: avatar,
        name: 'Maxim',
    },
    message: {
        text: 'Hello! How is your education in IT-incubator?',
        time: '15:00',
    },
}
export const friendMessage0: MessageType = {
    id: 100,
    user: {
        avatar: avatar,
        name: 'Victoria',
    },
    message: {
        text: 'Hi! Ok,I am very satisfied.',
        time: '15:35',
    },
}

const HW1 = () => {
    return (
        <div id={'hw1'}>
            <div className={s2.hwTitle}>Homework №1</div>
            <div className={s2.hw}>
                <div>
                    <Message message={message0} />
                    <FriendMessage message={friendMessage0} />
                </div>

                <MessageSender M={Message} />
            </div>
        </div>
    )
}

export default HW1
