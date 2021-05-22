import axios, { AxiosRequestConfig, AxiosInstance } from "axios";
import { prop } from "ramda";
import { Observable } from "rxjs";
import { toObservable } from "./utils";
import { safeParseObject } from "./utils/parseUtils";

export type HeaderType = any | null | undefined;

export interface IRequest {
    get<PARAMS, RESPONSE_BODY>(url: string, params: PARAMS, headers: HeaderType): Promise<RESPONSE_BODY>
    getStream<T>(url: string, params: any, headers: HeaderType): Observable<T>    
    postJSON<BODY, RESPONSE_BODY>(url: string, body: BODY, headers: HeaderType): Promise<RESPONSE_BODY>
    postJSONStream<BODY, RESPONSE_BODY>(url: string, body: BODY, headers: HeaderType): Observable<RESPONSE_BODY>
    postFormData<BODY, RESPONSE_BODY>(url: string, body: BODY, headers: HeaderType): Promise<RESPONSE_BODY>
    postFormDataStream<BODY, RESPONSE_BODY>(url: string, body: BODY, headers: HeaderType): Observable<RESPONSE_BODY>
    put<BODY, RESPONSE_BODY>(url: string, body: BODY, headers: HeaderType): Promise<RESPONSE_BODY>
    putStream<BODY, RESPONSE_BODY>(url: string, body: BODY, headers: HeaderType): Observable<RESPONSE_BODY>
    delete<PARAMS, RESPONSE_BODY>(url: string, params: PARAMS, headers: HeaderType): Promise<RESPONSE_BODY>
    deleteStream<PARAMS, RESPONSE_BODY>(url: string, params: PARAMS, headers: HeaderType): Observable<RESPONSE_BODY>
    getInstance(): AxiosInstance    
};

class Request implements IRequest {
    
    instance: AxiosInstance;
    
    constructor(config: AxiosRequestConfig) {        
        this.instance = axios.create(config);
    };

    get<PARAMS, RESPONSE_BODY>(url: string, params: PARAMS, headers: HeaderType = null): Promise<RESPONSE_BODY> {
        return this.instance.get(url, {
            params,
            headers,
        }).then(prop("data"))
    };

    getStream<PARAMS, RESPONSE_BODY>(url: string, params: any, headers: HeaderType = null): Observable<RESPONSE_BODY> {
        return toObservable(this.get<PARAMS, RESPONSE_BODY>(url, params, headers));
    };
    
    private post<BODY, RESPONSE_BODY>(url: string, body: BODY, headers: HeaderType = null): Promise<RESPONSE_BODY> {
        return this.instance.post(url, body, { headers }).then(prop("data"));
    };

    postJSON<BODY, RESPONSE_BODY>(url: string, body: BODY, headers: HeaderType = null): Promise<RESPONSE_BODY> {
        return this.post(url, body, { 
            headers: {...safeParseObject(headers), "Content-Type": "application/json"},            
        });
    };

    postJSONStream<BODY, RESPONSE_BODY>(url: string, body: BODY, headers: HeaderType = null): Observable<RESPONSE_BODY> {
        return toObservable(this.postJSON(url, body, headers));
    };

    postFormData<BODY, RESPONSE_BODY>(url: string, body: BODY, headers: HeaderType = null): Promise<RESPONSE_BODY> {
        if (body) {
            let formData = new FormData();
            for (var key in body) {
                formData.append(key, body[key] as never as string)
            }
            return this.post(url, formData, {
                headers: {...safeParseObject(headers), "Content-Type": "multipart/form-data"},
            });
        } else {
            return this.post(url, null, {
                headers: {...safeParseObject(headers), "Content-Type": "multipart/form-data"},
            });
        }
    };

    postFormDataStream<BODY, RESPONSE_BODY>(url: string, body: BODY, headers: HeaderType = null): Observable<RESPONSE_BODY> {
        return toObservable(this.postFormData(url, body, headers));
    };

    put<BODY, RESPONSE_BODY>(url: string, body: BODY, headers: HeaderType = null): Promise<RESPONSE_BODY> {
        return this.instance.put(url, body, { headers }).then(prop("data"));
    };

    putStream<BODY, RESPONSE_BODY>(url: string, body: BODY, headers: HeaderType = null): Observable<RESPONSE_BODY> {
        return toObservable(this.put(url, body, headers));
    };

    delete<PARAMS, RESPONSE_BODY>(url: string, params: PARAMS, headers: HeaderType = null): Promise<RESPONSE_BODY> {
        return this.instance.delete(url, { params, headers, }).then(prop("data"));
    };

    deleteStream<PARAMS, RESPONSE_BODY>(url: string, params: PARAMS, headers: HeaderType = null): Observable<RESPONSE_BODY> {
        return toObservable(this.delete(url, params, headers));
    };

    getInstance(): AxiosInstance {
        return this.instance;
    };

}

export class RequestFactory {
    static createInstance(config: AxiosRequestConfig): IRequest {
        return new Request(config)
    }
};