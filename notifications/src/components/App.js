import React from 'react';
import '../styles/App.css';
import Notification from './Notification.js';

const names = [
    'Mark Webber', 'Angela Grey', 'Jacob Thompson', 'Rizky Hasanuddin', 'Kimberly Smith', 'Nathan Peterson', 'Anna Kim'
]

const items = [
    ' reacted to your recent post My first tournament today!',
    ' followed you',
    ' has joined your group Chess Club',
    ' sent you a private message',
    ' commented on your picture',
    ' reacted to your recent post 5 end-game strategies to increase your win rate',
    ' left the group Chess Club'
]

const times = [ '1m', '5m', '1 day', '5 days', '1 week', '2 weeks', '2 weeks' ]

export default () => {
    return (
        <div className = 'Notification_Box'>
            <h1 className={'notification_title'}>Notifications 3</h1>
            <Notification names = {names} items = {items} times = {times}/>
            <div>

                Mark all as read

                <div className="attribution">
                    Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend
                    Mentor</a>.
                    Coded by <a href="#">Tindeche Alexandru</a>.
                </div>
            </div>
        </div>
    )
};