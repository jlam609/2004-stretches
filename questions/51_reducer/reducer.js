//Redux Practice
//You will be expanding on the reducer function

//types are defined here.
const types = {
  ADD_TODO: 'ADD_TODO',
  DELETE_TODO: 'DELETE_TODO',
  COMPLETE_TODO: 'COMPLETE_TODO',
};

const initialState = [
  {
    item: 'Use Redux',
    completed: false,
    id: 0,
  },
];

const reducer = (state = initialState, action) => {
  //ADD YOUR CODE HERE
  switch (action.type) {
    case types.ADD_TODO:
      return[{
      text: action.text,
      completed:false,
      id: state.length},
     ...state]
    case types.DELETE_TODO:
      return (
      state.filter(todo => todo.id !== action.id)
      )
    case types.COMPLETE_TODO:{
      state.map(todo => todo.id === action.id ? todo.completed = !todo.completed : null)
    }
    default:
      return state
  }
};

module.exports = { types, initialState, reducer };
