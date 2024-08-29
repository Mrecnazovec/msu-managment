import GlobalHook from "use-global-hook";
import * as actions from "./actions";

const initialState = {
  
  user_login: "",
  user_fullName: "",
	user_role: "Пользователь",
  user_roleLevel: "0",


};

const useGlobal = GlobalHook( initialState, actions );

export default useGlobal;