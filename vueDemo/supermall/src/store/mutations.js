export default {
  addCounter(state,payload){
    payload.count++;
  },
  addToCart(state,payload){
    payload.checked = true;
    state.cartList.push(payload);
  },

  collectCounter(state, payload) {
    payload.count++;
  },
  collectAdd(state,payload){
    state.collectList.push(payload);
  },

  heardShow(state){
      state.vshow = false;
      // state.nshow = true;
      },
  exitShow(state){
     state.vshow = true;
     // state.nshow = false;

  },

  loginMessage(state,payload){
    state.userMessage = payload.obj;
    state.code = payload.code;
    console.log(state.userMessage);
    console.log(state.code)
  },

  // changeMessage(state){
  //
  // }
}

