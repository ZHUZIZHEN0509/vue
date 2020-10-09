export default {
  addCart(context , payload){
      return new Promise((resolve,reject) =>{

        //*
        //payLoad新添加的商品
        //1.查找之前数组中是否有该商品
        let oldProduct = context.state.cartList.find( item => item.iid === payload.iid);
        //2.判断oldProduct
        if (oldProduct){
          // oldProduct.count += 1;
          context.commit('addCounter',oldProduct);
          resolve('当前商品数量+1');
        }else {
          payload.count = 1
          // context.state.cartList.push(payload);
          context.commit('addToCart',payload);
          resolve('添加了新的商品');
        }

      })

  },
  addCollect(context , payload){
    return new Promise((resolve,reject) =>{
      let oldCollect = context.state.collectList.find( item => item.iid === payload.iid);
      if (oldCollect){
        context.commit('collectCounter',oldCollect);
        resolve('已收藏本商品');
      }else {
        payload.count = 1;
        context.commit('collectAdd',payload);
        resolve('收藏商品成功');
      }
    })
  }


}
