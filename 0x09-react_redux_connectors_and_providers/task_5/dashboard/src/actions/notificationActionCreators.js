import { MARK_AS_READ,
        SET_TYPE_FILTER,
        SET_LOADING_STATE,
        FETCH_NOTIFICATIONS_SUCCESS } from "./notificationActionTypes";

export function markAsRead(index) {
    return {
        type: MARK_AS_READ,
        index,
    }
};

export const boundMarkAsRead = (index) => dispatch(markAsRead(index));

export function setNotificationFilter(filter) {
    return {
        type: SET_TYPE_FILTER,
        filter,
    }
};
export const setLoadingState = (loading) => {
    return {
      type: SET_LOADING_STATE,
      loading,
    };
  };

export const setNotifications = (data) => {
    return {
      type: FETCH_NOTIFICATIONS_SUCCESS,
      data,
    };
  };
  
export const boundSetNotificationFilter = (filter) => dispatch(setNotificationFilter(filter));

export const fetchNotifications = () => {
    return async (dispatch) => {
      dispatch(setLoadingState(true));
      try {
            try {
                const res = await fetch("./notifications.json");
                const data = await res.json();
                return dispatch(setNotifications(data));
            } catch (error) { }
        } finally {
            return dispatch(setLoadingState(false));
        }
    };
  };