import * as notificationList from '../../../../notifications.json';
import { normalize, schema } from 'normalizr';

const getAllNotificationsByUser = (userId) => {
    return notificationList.filter(notification => notification.author.id === userId)
        .map(notification => notification.context);
}

const user = new schema.Entity("users");
const message = new schema.Entity("messages", {}, { idAttribute: "guid" });
const notification = new schema.Entity("notifications", {
    author: user,
    context: message,
});

export const normalizedData = normalize(notificationList, [notification]);


export default getAllNotificationsByUser;
