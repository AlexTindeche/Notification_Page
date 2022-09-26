import React from 'react';
import '../styles/App.css';
import Notification from './Notification.js';

const items = [
    'Mark Webber reacted to your recent post My first tournament today!',
    'Angela Gray followed you',
    'Jacob Thompson has joined your group Chess Club',
    'Rizky Hasanuddin sent you a private message',
    'Hello, thanks for setting up the Chess Club. I\'ve been a member for a few weeks now and',
    'I\'m already having lots of fun and improving my game.',
    'Kimberly Smith commented on your picture',
    'Nathan Peterson reacted to your recent post 5 end-game strategies to increase your win rate',
    'Anna Kim left the group Chess Club'
]

export default () => {
    return (
        <div className = 'Notification_Box'>
            <h1>Notifications 3</h1>
            <Notification items = {items}/>
            <div>

                Mark all as read

                1m ago

                5m ago

                1 day ago

                5 days ago

                1 week ago

                2 weeks ago

                2 weeks ago

                <div className="attribution">
                    Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend
                    Mentor</a>.
                    Coded by <a href="#">Tindeche Alexandru</a>.
                </div>
            </div>
        </div>
    )
};