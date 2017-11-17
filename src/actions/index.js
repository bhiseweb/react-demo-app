import { CREATE_INPUT, REMOVE_INPUT, SHOW_TASK, RESET_INPUT, ADD_TASK,
  DELETE_TASK, LOAD_PHOTOS, LOAD_USERS, LOAD_ALBUMS, LOAD_POSTS,
  SET_MODAL_USERS, SET_SHOW_MODAL, SET_ACTIVE_PAGE, SET_CURRENT_POST,
  SET_SHOW  } from '../constants/ActionTypes'

export const createInput = text => ({ type: CREATE_INPUT, text });
export const removeInput = text => ({ type: REMOVE_INPUT, text });
export const addTask = text => ({ type: ADD_TASK, text });
export const resetInput = text => ({ type: RESET_INPUT, text });
export const showTask = text => ({ type: SHOW_TASK, text });
export const deleteTask = text => ({ type: DELETE_TASK, text });
export const loadPhotos = text => ({ type: LOAD_PHOTOS, text });
export const loadUsers = text => ({ type: LOAD_USERS, text });
export const loadAlbums = text => ({ type: LOAD_ALBUMS, text });
export const loadPosts = text => ({ type: LOAD_POSTS, text });
export const setShowModal = text => ({ type: SET_SHOW_MODAL, text });
export const setModalUsers = text => ({ type: SET_MODAL_USERS, text });
export const setActivePage = text => ({ type: SET_ACTIVE_PAGE, text });
export const setCurrentPost = text => ({ type: SET_CURRENT_POST, text });
export const setShow = text => ({ type: SET_SHOW, text });