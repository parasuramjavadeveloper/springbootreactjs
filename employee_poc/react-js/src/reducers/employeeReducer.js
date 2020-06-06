import ApiService from "../api/ApiService";

export const employeeReducer = (state = [], action) => {
  switch(action.type) {
    case 'GET_ALL':
      state = action.data;
      return state;
    case 'ADD_POST':
      ApiService.addEmployee(action.data);
      return state.concat([action.data]);
    case 'DELETE_POST':
      ApiService.deleteEmployee(action.id);
      return state.filter((post)=>post.id !== action.id);
    case 'EDIT_POST':
      ApiService.updateEmployee(action.data);
      console.log(state)
      console.log(action.data)
      return state.map((post)=>post.id == action.data.id ? action.data : post)
    case 'UPDATE':
      return state.map((post)=>{
        if(post.id === action.id) {
          return {
             ...post,
             title:action.data.newTitle,
             message:action.data.newMessage,
             editing: !post.editing
          }
        } else return post;
      })
    case 'GET_COUNTRIES':
      state = action.countries;
      return state;
    case 'SETEMPLOYEE':
    state.editEmployeeById = action.editEmployeeById;
    return state;
    default:
      return state;
  }
}