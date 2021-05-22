import React from "react";
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import { 
    RequestFactory,
    IRequest,
    ApiProvider,
    useGet,
    useGetStream,
    usePostJSON,
    usePostJSONStream,
    usePostFormData,
    usePostFormDataStream,
    usePut,
    usePutStream,
    useDelete,
    useDeleteStream,
} from "./core";
import App from "./app";


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

export {
    RequestFactory,
    IRequest,
    ApiProvider,
    useGet,
    useGetStream,
    usePostJSON,
    usePostJSONStream,
    usePostFormData,
    usePostFormDataStream,
    usePut,
    usePutStream,
    useDelete,
    useDeleteStream,
};