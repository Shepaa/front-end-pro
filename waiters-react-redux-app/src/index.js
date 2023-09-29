import React from 'react';
import ReactDOM from 'react-dom/client';
import {WaitersApp} from "./main";
import {Provider} from "react-redux";
import {store} from "./store";

ReactDOM.createRoot(document.getElementById('root')).render(
    <Provider store={store}>
        <WaitersApp/>
    </Provider>
);

