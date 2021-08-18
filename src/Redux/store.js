import { createStore ,applyMiddleware} from "redux";
import { rootReducer  } from "./rootreducer";
import { composeWithDevTools } from 'redux-devtools-extension';
import thunkMiddleware from 'redux-thunk'


// const middleware=[composeWithDevTools(),thunk]

const composedEnhancer = composeWithDevTools(applyMiddleware(thunkMiddleware))


export const store = createStore(rootReducer,composedEnhancer );