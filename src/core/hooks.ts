import { useCallback, useState } from "react";
import { Observable } from "rxjs";
import { requestClient } from "./ApiProvider";
import { HeaderType } from "./Request";

type HookReturnType<T> = [
  callApi: () => void,
  isLoading: boolean,
  response: T | undefined
];

export const useGet = <PARAMS, RESPONSE_BODY>(
  url: string,
  params: PARAMS,
  headers: HeaderType = null
): HookReturnType<RESPONSE_BODY> => {
  if (!requestClient) {
    throw Error("Please provide ApiProvider!");
  }

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [response, setResponse] = useState<RESPONSE_BODY>();

  const callApi = useCallback<(params: PARAMS) => void>(
    (params) => {
      setIsLoading(true);
      requestClient
        .get<PARAMS, RESPONSE_BODY>(url, params, headers)
        .then(setResponse)
        .then(() => setIsLoading(false));
    },
    [params]
  );

  return [() => callApi(params), isLoading, response];
};

export const useGetStream = <PARAMS, RESPONSE_BODY>(
  url: string,
  params: PARAMS,
  headers: HeaderType = null
): Observable<RESPONSE_BODY> => {
  if (!requestClient) {
    throw Error("Please provide ApiProvider!");
  }
  return requestClient.getStream(url, params, headers);
};

export const usePostJSON = <BODY, RESPONSE_BODY>(
  url: string,
  body: BODY,
  headers: HeaderType = null
): HookReturnType<RESPONSE_BODY> => {
  if (!requestClient) {
    throw Error("Please provide ApiProvider!");
  }
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [response, setResponse] = useState<RESPONSE_BODY>();

  const callApi = useCallback<(body: BODY) => void>(
    (body) => {
      setIsLoading(true);
      requestClient
        .postJSON<BODY, RESPONSE_BODY>(url, body, headers)
        .then(setResponse)
        .then(() => setIsLoading(false));
    },
    [body]
  );

  return [() => callApi(body), isLoading, response];
};

export const usePostFormData = <BODY, RESPONSE_BODY>(
  url: string,
  body: BODY,
  headers: HeaderType = null
): HookReturnType<RESPONSE_BODY> => {
  if (!requestClient) {
    throw Error("Please provide ApiProvider!");
  }

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [response, setResponse] = useState<RESPONSE_BODY>();

  const callApi = useCallback<(body: BODY) => void>(
    (body) => {
      setIsLoading(true);
      requestClient
        .postFormData<BODY, RESPONSE_BODY>(url, body, headers)
        .then(setResponse)
        .then(() => setIsLoading(false));
    },
    [body]
  );

  return [() => callApi(body), isLoading, response];
};

export const usePostJSONStream = <BODY, RESPONSE_BODY>(
  url: string,
  body: BODY,
  headers: HeaderType = null
): Observable<RESPONSE_BODY> => {
  if (!requestClient) {
    throw Error("Please provide ApiProvider!");
  }
  return requestClient.postJSONStream(url, body, headers);
};

export const usePostFormDataStream = <BODY, RESPONSE_BODY>(
  url: string,
  body: BODY,
  headers: HeaderType = null
): Observable<RESPONSE_BODY> => {
  if (!requestClient) {
    throw Error("Please provide ApiProvider!");
  }
  return requestClient.postFormDataStream(url, body, headers);
};

export const usePut = <BODY, RESPONSE_BODY>(
  url: string,
  body: BODY,
  headers: HeaderType = null
): HookReturnType<RESPONSE_BODY> => {
  if (!requestClient) {
    throw Error("Please provide ApiProvider!");
  }

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [response, setResponse] = useState<RESPONSE_BODY>();

  const callApi = useCallback<(body: BODY) => void>(
    (body) => {
      setIsLoading(true);
      requestClient
        .put<BODY, RESPONSE_BODY>(url, body, headers)
        .then(setResponse)
        .then(() => setIsLoading(false));
    },
    [body]
  );

  return [() => callApi(body), isLoading, response];
};

export const usePutStream = <BODY, RESPONSE_BODY>(
  url: string,
  body: BODY,
  headers: HeaderType = null
): Observable<RESPONSE_BODY> => {
  if (!requestClient) {
    throw Error("Please provide ApiProvider!");
  }
  return requestClient.putStream(url, body, headers);
};

export const useDelete = <PARAMS, RESPONSE_BODY>(
  url: string,
  params: PARAMS,
  headers: HeaderType = null
): HookReturnType<RESPONSE_BODY> => {
  if (!requestClient) {
    throw Error("Please provide ApiProvider!");
  }
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [response, setResponse] = useState<RESPONSE_BODY>();

  const callApi = useCallback<(params: PARAMS) => void>(
    (params) => {
      setIsLoading(true);
      requestClient
        .delete<PARAMS, RESPONSE_BODY>(url, params, headers)
        .then(setResponse)
        .then(() => setIsLoading(false));
    },
    [params]
  );

  return [() => callApi(params), isLoading, response];
};

export const useDeleteStream = <PARAMS, RESPONSE_BODY>(
  url: string,
  params: PARAMS,
  headers: HeaderType = null
): Observable<RESPONSE_BODY> => {
  if (!requestClient) {
    throw Error("Please provide ApiProvider!");
  }
  return requestClient.deleteStream(url, params, headers);
};
