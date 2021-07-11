import React from 'react';
import profileReducer, {deletePost} from "./profile-reducer";

// Test data
const state = {
    postData: [
        {id: 1, post: 'hi, how are you?', likesCount: 1},
        {id: 2, post: 'i`me fine?', likesCount: 34},
        {id: 3, post: 'Yo Yo YO?', likesCount: 5}
    ],
};

it('the number of posts should decrease', () => {
    const action = deletePost (1);
    //action
    const newState = profileReducer(state, action);
    // check the result of action
    expect(newState.postData.length).toBe(2);
});

it('deletion with invalid id', () => {
    const action = deletePost (10000);
    //action
    const newState = profileReducer(state, action);
    // check the result of action
    expect(newState.postData.length).toBe(3);
})

