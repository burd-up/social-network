import React from 'react';
import Paginator from "../common/Paginator/Paginator";
import User from "./User";

let Users = ( {totalUsersCount, pageSize, currentPage, onPageChange, users, followingInProgress, unfollow, follow, ...props}) => {

    return <div>
        <Paginator totalUsersCount={totalUsersCount} pageSize={pageSize} currentPage={currentPage} onPageChange={onPageChange}/>
        {users.map(u => <User user={u} key={u.id}
                              followingInProgress={followingInProgress}
                              unfollow={unfollow}
                              follow={follow}/>)
        } </div>
};

export default Users;