import _ from 'lodash';
import { FETCH_POSTS } from '../actions';

export default function(state = {}, action) {
  switch(action.type) {
    case FETCH_POSTS:    
    const data = _.mapKeys(action.payload.data, 'id');
    console.log('reducer_posts returning:', data);
      return data;
    default:
      return state;
  }
}
