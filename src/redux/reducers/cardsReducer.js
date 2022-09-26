import { 
    TYPE_CARDS
} from '../types';


const initialState = {
    typeCards: localStorage.getItem('type')
};

const cardsReducer = ( state = initialState,action) => {
  switch (action.type) {
    case TYPE_CARDS:
      return {
        ...state,
        typeCards: action.typeCards,
      };
    default:
      return state;
  }
};


export default cardsReducer;
