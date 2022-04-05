import { ActionTypes } from "../../store/notifications/actionTypes";

export interface Notification {
    id?: string;
    message: string;
    type: 'ERROR' | 'SUCCESS' | 'WARNING' ;
}

export interface NotificationState {
    notifications: Notification[] | []
}

type SetNotificationAction = {
    type: ActionTypes.SET_NOTIFICATION
    payload: Notification
}

type RemoveNotificationAction = {
    type: ActionTypes.REMOVE_NOTIFICATION
    payload: Notification
}

export type NotificationAction = 
    SetNotificationAction |
    RemoveNotificationAction
