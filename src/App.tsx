import { Provider } from "react-redux"
import Header from "./pages/Home/components/Header/Header"

import Home from "./pages/Home/Home"
import store from './store/store'

import './style.css'

export default function App() {
    return (
        <Provider store={store}>
            <div className="App">
                <Header />
                <Home />
            </div>
        </Provider>
    )
}