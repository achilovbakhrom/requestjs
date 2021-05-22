import React from "react";
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import { ApiProvider } from "./core";
import App from "./app";

export const add = (a: number, b: number) => a + b;

ReactDOM.render(
    <ApiProvider
        timeout={60000}
        baseURL="https://jsonplaceholder.typicode.com"
        withCredentials={true}        
    >
        <App />
    </ApiProvider>,     
    document.getElementById("root"),
);
