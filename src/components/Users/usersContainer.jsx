import React from 'react';
import { connect } from 'react-redux';

import { follow, unfollow, setUsers, setCurrentPage, setTotalUsersCount, toggleIsFetching, toggleFollowingProgress, getUsers } from '../../redux/users_reducer';
import Users from './User'
import Preloader from '../common/preloader/preloader'


class UsersAPIComponent extends React.Component {
              
    componentDidMount () {
       this.props.getUsers(this.props.currentPage, this.props.pageSize)
  }

    onPageChanged = (pageNumber) => {
        this.props.getUsers(pageNumber, this.props.pageSize)
       /*  this.props.setCurrentPage(pageNumber);
        this.props.toggleIsFetching(true)
        usersAPI.getUsers(pageNumber, this.props.pageSize)
                .then (data => {
                    this.props.toggleIsFetching(false)
                    this.props.setUsers(data.items)
            }) */
        
    }
    
    render() {

      
        return <>
                {this.props.isFetching ? <Preloader/> : null}
                <Users totalUsersCount={this.props.totalUsersCount}
                      pageSize={this.props.pageSize}
                      currentPage={this.props.currentPage}
                      onPageChanged={this.onPageChanged}
                      users={this.props.users}
                      follow={this.props.follow}
                      unfollow={this.props.unfollow}
                      followingInProgress={this.props.followingInProgress} /> 
                </>
    }
}

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress
    }
}

export default connect (mapStateToProps, {
    
        follow,
        
        unfollow,
        
        setCurrentPage,

        toggleFollowingProgress,

        getUsers
        
    }) (UsersAPIComponent)
 