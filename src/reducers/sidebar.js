
const initialState = {
  sidebarShow: 'responsive'
}

export default function (state = initialState, payload) {
  console.log(payload)
  switch (payload.type) {
    case 'set':
      return {sidebarShow: payload.sidebar }
    default:
      return state
  }
}
