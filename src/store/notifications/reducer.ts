import { NotificationAction, NotificationState } from "../../types/store/notificationTypes";
import { ActionTypes } from "./actionTypes";

const initialState: NotificationState = {
    notifications: []
}

const notification = (state: NotificationState = initialState, action: NotificationAction) => {
    switch (action.type) {
        case ActionTypes.SET_NOTIFICATION:
            return {...state, notifications: [action.payload]}
        case ActionTypes.REMOVE_NOTIFICATION:
            return {...state, notificatoins: state.notifications.filter((nt) => nt.id !== action.payload.id)}
        default:
            return state
    }
}

export default notification