import * as notificationList from '../../../../notifications.json'

const getAllNotificationsByUser = (userId) => {
    return notificationList.filter(notification => notification.author.id === userId)
        .map(notification => notification.context);
}

export default getAllNotificationsByUser;
