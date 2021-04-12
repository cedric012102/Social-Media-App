// import createDataContext from '../context/CreateDataContext';



// const appReducer = (state, action) => {
//     switch(action.type) {
//         case 'delete_mediapost':
//             return state.filter((mediaPost) => mediaPost.id !== action.payload);
//         case 'add_mediapost':
//             return [...state, { id: Math.floor(Math.random() * 99999), title: `Media Post #${state.length + 1}`}];
//             default: 
//             return state;
//     }
// };




//     const addMediaPost = (dispatch) => {
//         return () => {
//         dispatch({ type: 'add_mediapost'});
//         };
//     };

//     const deleteMediaPost = (dispatch) => {
//         return id => {
//             dispatch({ type: 'delete_mediapost', payload: id });
//         };
//     };


// export const { Context, Provider } = createDataContext(appReducer, 
//     { addMediaPost, deleteMediaPost},
//     []
//      );