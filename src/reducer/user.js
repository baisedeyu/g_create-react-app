

const data={
  username:'admin',
  password:'11111'
}

const user=(state=data,action={})=>{
  switch(action.type){
    case 'login':
      return {
        ...state,
        username:action.value
      }
    default :
      return state
  }
}

export default user