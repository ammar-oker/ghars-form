export const ADD_PROPERTY = 'ADD_PROPERTY';

export const ddProperty = property => ({
    type: ADD_PROPERTY,
    property
});


export function addProperty(property) {
    return function (dispatch) {
        return dispatch(addProperty(property));
    }
}