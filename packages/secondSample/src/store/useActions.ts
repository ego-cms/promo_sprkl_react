import { useDispatch } from 'react-redux'
import { bindActionCreators } from 'redux'

export const useActions = actions => {
  const dispatch = useDispatch()

  if (Array.isArray(actions)) {
    return actions.map(a => bindActionCreators(a, dispatch))
  }
  return bindActionCreators(actions, dispatch)
}
