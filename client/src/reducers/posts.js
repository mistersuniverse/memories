// const reducer = (state, action) => {
//     switch (action.type) {
//         case 'FETCH_ALL':
//             return state; 
//         case 'CREATE':
//             return state;

//     }
// }

// reducer are functions which takes state and action
import { FETCH_ALL, FETCH_BY_SEARCH, FETCH_POST, CREATE, UPDATE, DELETE, START_LOADING, END_LOADING, COMMENT } from '../constants/actionTypes';

export default (state = { isLoading: true, posts: []}, action) => {
    switch (action.type) {
            
        case START_LOADING :
            return {...state, isLoading: true };

        case END_LOADING :
            return {...state, isLoading: false };

        case DELETE:
            return { ...state, posts: state.posts.filter((post) => post._id !== action.payload)};
            
        case UPDATE: // same for LIKE
            return { ...state, posts: state.posts.map((post) => (action.payload._id === post._id ? action.payload : post))};

        case FETCH_ALL:
            return { ...state, posts: action.payload.data, currentPage: action.payload.currentPage, numberOfPages: action.payload.numberOfPages };

        case FETCH_BY_SEARCH:
            return { ...state, posts: action.payload };
            
        case CREATE:
            return { ...state, posts: [...state.posts, action.payload]};

        case FETCH_POST:
            return {...state, post: action.payload};

        case COMMENT: 
            return {...state, posts: state.posts.map((post) =>{
                if ( post._id === action.payload._id ) return action.payload;

                return post;
            })};

        default :
            return state;

    }
}