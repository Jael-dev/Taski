// import Vue from 'vue'
// import Vuex from 'vuex'

// Vue.use(Vuex)

// const Order = ({
//   state: {
//     filter: 'all',
//     orders: [],
//   },
//   getters: {
   
//     ordersFiltered(state) {
//       if (state.filter == 0) {
//         return state.orders
//       } else if (state.filter == 1) {
//         return state.orders.filter(order => !order.denied)
//       } else if (state.filter == 2) {
//         return state.orders.filter(order => order.accepted)
//       }
//       return state.orders
//     },
//   },
//   mutations: {
//     addOrder(state, order) {
//         state.orders.push({
//           id: order.id,
//           title: order.title,
//           state: 0,
//           description: order.description,
//           validation_date:order.start_date,
//           start_date:order.start_date,
//           end_date:order.end_date,
//           user_id: user_id,
//         })
//       },
//       updateOrder(state, order) {
//         const index = state.orders.findIndex(item => item.id == order.id)
//         state.orders.splice(index, 1, {
//           'id': order.id,
//           'title': order.title,
//           'completed': order.completed,
//           'editing': order.editing,
//         })
//       },
//       deleteOrder(state, id) {
//         const index = state.orders.findIndex(item => item.id == id)
//         state.orders.splice(index, 1)
//       },
//       checkAll(state, checked) {
//         state.orders.forEach(Order => (order.completed = checked))
//       },
//       updateFilter(state, filter) {
//         state.filter = filter
//       },
//       clearCompleted(state) {
//         state.orders = state.orders.filter(order => !order.completed)
//       },
//       retrieveOrders(state, Orders) {
//         state.orders = orders
//       },
//   },
//   actions: {
//   },
// })
