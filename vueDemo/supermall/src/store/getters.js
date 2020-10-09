export default {
  cartLength(state) {
    return state.cartList.length;
  },
  cartList(state){
    return state.cartList;
  },

  collectLength(state){
    return state.collectList.length;
  },
  collectList(state){
    return state.collectList;
  },


}
