const initialState = { counter: 0 };

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "INC":
      return {
        ...state,
        counter: state.counter + 1
      };
    case "DEC":
      return {
        ...state, // разворачиваем предыдущий стейт (делаем копию)
        counter: state.counter - 1 // изменяем новый стейт
      };
    case "RND":
      return {
        ...state,
        counter: state.counter * action.payload
      };
    default:
      return state;
  }
}
export default reducer;