import {useDispatch} from "react-redux";
import {bindActionCreators} from "redux";
import ActionCreators from "../store/action-creators";
export const useAppActions = () => {
  const dispatch = useDispatch();
  return bindActionCreators(ActionCreators, dispatch)
}