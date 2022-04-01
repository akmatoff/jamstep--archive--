import { Provider } from "react-redux"

import Home from "./pages/Home/Home"
import store from './store/store'

import './style.css'

export default function App() {
    return (
        <Provider store={store}>
            <div className="App">
                <Home />
            </div>
        </Provider>
    )
}