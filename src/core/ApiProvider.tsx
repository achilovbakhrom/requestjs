import React from "react";
import { AxiosRequestConfig } from "axios";
import { RequestFactory, IRequest } from "./";
import { omit } from "ramda";

export let requestClient: IRequest;

export const ApiProvider: React.FC<AxiosRequestConfig> = (props) => {
  if (!requestClient) {
    requestClient = RequestFactory.createInstance(omit(["children"], props));
  }
  return <> {props.children} </>;
};
