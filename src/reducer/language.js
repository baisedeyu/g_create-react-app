

const language = (state = "zh-CN", action = {}) => {
  switch (action.type) {
    case "change":
      return action.language
    default:
      return state
  }
}


export default language