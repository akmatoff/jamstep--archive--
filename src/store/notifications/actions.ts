import { Dispatch } from "redux"
import { uuid } from "uuidv4"

import { ActionTypes } from "./actionTypes"
import { NotificationAction, Notification } from "../../types/store/notificationTypes"



export const showNotification = ({message, type}: Notification) => {
    let id = uuid()

    return (dispatch: Dispatch<NotificationAction>) => {
        dispatch({
            type: ActionTypes.SET_NOTIFICATION,
            payload: {
                id: id,
                message: message,
                type: type
            }
        })
    }
}

export const removeNotification = (notification: Notification) => {
    return (dispatch: Dispatch<NotificationAction>) => {
        dispatch({
            type: ActionTypes.REMOVE_NOTIFICATION,
            payload: notification
        })
    }
}