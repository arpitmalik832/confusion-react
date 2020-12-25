import * as ActionTypes from './ActionTypes';
import { baseUrl } from '../shared/baseUrl'

export const postComment = (dishId, rating, author, comment) => (dispatch) => {
    const newComment = {
        dishId: dishId,
        rating: rating,
        author: author,
        comment: comment
    }
    newComment.date = new Date().toISOString();

    return fetch(baseUrl + 'comments', {
        method: 'POST',
        body: JSON.stringify(newComment),
        headers: {
            'Content-Type': 'application/json'
        },
        credentials: 'same-origin'
    })
    .then(response => {
        if(response.ok) {
            return response
        }
        var err = new Error('Error '+response.status+': '+response.statusText)
        err.response = response
        throw err
    }, 
    err => {
        var error = new Error(err.message)
        throw error
    })
    .then(response => response.json())
    .then(comment => dispatch(addComment(comment)))
    .catch(err => {
        console.log('Post comments', err.message)
        alert('Your comment could not be posted\nError: '+err.message)
        dispatch(commentsFailed(err.message))
    })
}

export const addComment = (comment) => ({
    type: ActionTypes.ADD_COMMENT,
    payload: comment
})


export const fetchDishes = () => (dispatch) => {
    dispatch(dishesLoading(true));

    return fetch(baseUrl + 'dishes')
        .then(response => {
            if(response.ok) {
                return response
            }
            var err = new Error('Error '+response.status+': '+response.statusText)
            err.response = response
            throw err
        }, 
        err => {
            var error = new Error(err.message)
            throw error
        })
        .then(response => response.json())
        .then(dishes => dispatch(addDishes(dishes)))
        .catch(err => dispatch(dishesFailed(err.message)))
}

export const dishesLoading = () => ({
    type:ActionTypes.DISHES_LOADING
})

export const dishesFailed = (err) => ({
    type: ActionTypes.DISHES_FAILED,
    payload: err
})

export const addDishes = (dishes) => ({
    type:ActionTypes.ADD_DISHES,
    payload: dishes
})

export const fetchcomments = () => (dispatch) => {
    return fetch(baseUrl + 'comments')
        .then(response => {
            if(response.ok) {
                return response
            }
            var err = new Error('Error '+response.status+': '+response.statusText)
            err.response = response
            throw err
        }, 
        err => {
            var error = new Error(err.message)
            throw error
        })
        .then(response => response.json())
        .then(comments => dispatch(addComments(comments)))
        .catch(err => dispatch(commentsFailed(err.message)))
}

export const commentsFailed = (err) => ({
    type: ActionTypes.COMMENTS_FAILED,
    payload: err
})

export const addComments = (comments) => ({
    type:ActionTypes.ADD_COMMENTS,
    payload: comments
})

export const fetchPromos = () => (dispatch) => {
    dispatch(promosLoading(true));

    return fetch(baseUrl + 'promotions')
        .then(response => {
            if(response.ok) {
                return response
            }
            var err = new Error('Error '+response.status+': '+response.statusText)
            err.response = response
            throw err
        }, 
        err => {
            var error = new Error(err.message)
            throw error
        })
        .then(response => response.json())
        .then(promos => dispatch(addPromos(promos)))
        .catch(err => dispatch(promosFailed(err.message)))
}

export const promosLoading = () => ({
    type:ActionTypes.PROMOS_LOADING
})

export const promosFailed = (err) => ({
    type: ActionTypes.PROMOS_FAILED,
    payload: err
})

export const addPromos = (promos) => ({
    type:ActionTypes.ADD_PROMOS,
    payload: promos
})