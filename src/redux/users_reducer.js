
const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';

let initialState = {
  users: [
    /* {id: 1, photoUrl: 'https://dota2.ru/img/heroes/kunkka/portrait.jpg', followed: false, fullname: 'VASYAN', status: 'active', location: {city:'DONETSK', country: 'DPR'}},
    {id: 2, photoUrl: 'https://dota2.ru/img/heroes/kunkka/portrait.jpg', followed: true, fullname: 'CTACYAH', status: 'online', location: {city:'4epenoBets', country: 'Russia'}},
    {id: 3, photoUrl: 'https://dota2.ru/img/heroes/kunkka/portrait.jpg', followed: false, fullname: 'KASYAN', status: 'offline', location: {city:'Lipeck', country: 'Russia'}},
    {id: 4, photoUrl: 'https://dota2.ru/img/heroes/kunkka/portrait.jpg', followed: true, fullname: 'VALERYAN', status: 'e6etcya', location: {city:'Bigcity', country: 'CTpaHa'}} */ 
],
  pageSize: 5,
  totalUsersCount: 0,
  currentPage: 5

}
const  usersReducer = (state = initialState, action) => {
    switch(action.type) {
      case FOLLOW:
        return {
          ...state,
          users: state.users.map(u => {
            if(u.id === action.userId) {
              return {...u, followed: true}
            }
            return u;
          })
        }
      case UNFOLLOW:
        return {
          ...state,
          users: state.users.map(u => {
            if(u.id === action.userId) {
              return {...u, followed: false}
            }
            return u;
          })
        }
      case SET_USERS: {
        return {...state, users: action.users}
      }  
      case SET_CURRENT_PAGE: {
        return {...state, currentPage: action.currentPage}
      }
      case SET_TOTAL_USERS_COUNT: {
        return {...state, totalUsersCount: action.count}
      }            
      default: return state;

    }
  }

export const  followAC = (userId) => {
    return {
      type: FOLLOW,
      userId
    }
  }
  
  export const unfollowAC = (userId) => {
    return {
      type:  UNFOLLOW, 
      userId
    }
  }

  export const setUsersAC = (users) => {
    return {
      type:  SET_USERS, 
      users
    }
  }

  export const setCurrentPageAC = (currentPage) => {
    return {
      type: SET_CURRENT_PAGE,
      currentPage
    }
  }

  export const setUsersTotalCountAC = (totalUsersCount) => {
    return {
      type: SET_TOTAL_USERS_COUNT,
      count: totalUsersCount
    }
  }

  

  export default usersReducer;

