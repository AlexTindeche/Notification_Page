import '../styles/Notifications.css';

const Notification = ({ names, items, times }) => {
    const rendered_items = items.map((item, key) => {
        return (
            <div>
                <p>
                    <span className={'name'}>{names[key]}</span>
                    <span className={'notification_message'}>{item}</span>
                    <br></br>
                    { times[key] }
                </p>
            </div>
        )
    })

    /*
        'Hello, thanks for setting up the Chess Club. I\'ve been a member for a few weeks now and I\'m already having lots of fun and improving my game.',
     */

    return (
        <div className={'rendered_items'}>{ rendered_items }</div>
    )
}

export default Notification;