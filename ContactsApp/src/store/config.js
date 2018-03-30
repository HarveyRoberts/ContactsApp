import { createStore, compose, applyMiddleware } from "redux";
import reduxThunk from "redux-thunk";
import { rootReducer } from "./reducers";

let composeEnhancers = compose;

if (__DEV__) {
	composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
}

const configureStore = () => {
	return createStore(
		rootReducer,
		composeEnhancers(applyMiddleware(reduxThunk))
	);
};

export default configureStore;
