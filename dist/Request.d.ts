import { AxiosRequestConfig, AxiosInstance } from "axios";
import { Observable } from "rxjs";
export declare type HeaderType = any | null | undefined;
export interface IRequest {
    get<PARAMS, RESPONSE_BODY>(url: string, params: PARAMS, headers: HeaderType): Promise<RESPONSE_BODY>;
    getStream<T>(url: string, params: any, headers: HeaderType): Observable<T>;
    postJSON<BODY, RESPONSE_BODY>(url: string, body: BODY, headers: HeaderType): Promise<RESPONSE_BODY>;
    postJSONStream<BODY, RESPONSE_BODY>(url: string, body: BODY, headers: HeaderType): Observable<RESPONSE_BODY>;
    postFormData<BODY, RESPONSE_BODY>(url: string, body: BODY, headers: HeaderType): Promise<RESPONSE_BODY>;
    postFormDataStream<BODY, RESPONSE_BODY>(url: string, body: BODY, headers: HeaderType): Observable<RESPONSE_BODY>;
    put<BODY, RESPONSE_BODY>(url: string, body: BODY, headers: HeaderType): Promise<RESPONSE_BODY>;
    putStream<BODY, RESPONSE_BODY>(url: string, body: BODY, headers: HeaderType): Observable<RESPONSE_BODY>;
    delete<PARAMS, RESPONSE_BODY>(url: string, params: PARAMS, headers: HeaderType): Promise<RESPONSE_BODY>;
    deleteStream<PARAMS, RESPONSE_BODY>(url: string, params: PARAMS, headers: HeaderType): Observable<RESPONSE_BODY>;
    getInstance(): AxiosInstance;
}
export declare class RequestFactory {
    static createInstance(config: AxiosRequestConfig): IRequest;
}
//# sourceMappingURL=Request.d.ts.map