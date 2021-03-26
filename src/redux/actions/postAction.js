import {
    ADD_POST,

  } from "../types/postTypes";


  export const addPost = (data) => {
    return {
      type: ADD_POST,
      data,
    };
  };
  
  export const editPost = (id, data) => {
    return {
      type: EDIT_POST,
      id,
      data,
    };
  };

  export const deletePost = (id) => {
    return {
      type: DELETE_POST,
      id,
    };
  };