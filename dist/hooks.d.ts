import { Observable } from "rxjs";
import { HeaderType } from "./Request";
declare type HookReturnType<T> = [
    callApi: () => void,
    isLoading: boolean,
    response: T | undefined
];
export declare const useGet: <PARAMS, RESPONSE_BODY>(url: string, params: PARAMS, headers?: HeaderType) => HookReturnType<RESPONSE_BODY>;
export declare const useGetStream: <PARAMS, RESPONSE_BODY>(url: string, params: PARAMS, headers?: HeaderType) => Observable<RESPONSE_BODY>;
export declare const usePostJSON: <BODY, RESPONSE_BODY>(url: string, body: BODY, headers?: HeaderType) => HookReturnType<RESPONSE_BODY>;
export declare const usePostFormData: <BODY, RESPONSE_BODY>(url: string, body: BODY, headers?: HeaderType) => HookReturnType<RESPONSE_BODY>;
export declare const usePostJSONStream: <BODY, RESPONSE_BODY>(url: string, body: BODY, headers?: HeaderType) => Observable<RESPONSE_BODY>;
export declare const usePostFormDataStream: <BODY, RESPONSE_BODY>(url: string, body: BODY, headers?: HeaderType) => Observable<RESPONSE_BODY>;
export declare const usePut: <BODY, RESPONSE_BODY>(url: string, body: BODY, headers?: HeaderType) => HookReturnType<RESPONSE_BODY>;
export declare const usePutStream: <BODY, RESPONSE_BODY>(url: string, body: BODY, headers?: HeaderType) => Observable<RESPONSE_BODY>;
export declare const useDelete: <PARAMS, RESPONSE_BODY>(url: string, params: PARAMS, headers?: HeaderType) => HookReturnType<RESPONSE_BODY>;
export declare const useDeleteStream: <PARAMS, RESPONSE_BODY>(url: string, params: PARAMS, headers?: HeaderType) => Observable<RESPONSE_BODY>;
export {};
//# sourceMappingURL=hooks.d.ts.map