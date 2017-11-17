import { combineReducers } from 'redux';
import Task from './task';
import Value from './value';
import Count from './count';
import Photos from './photo';
import Users from './user';
import Posts from './post';
import Albums from './album';

const todoApp = combineReducers({
  Task,
  Value,
  Count,
  Photos,
  Users,
  Posts,
  Albums
})

export default todoApp

