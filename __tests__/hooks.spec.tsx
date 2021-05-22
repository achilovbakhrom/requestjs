import React from "react";
import { render } from "@testing-library/react";
import { renderHook } from "@testing-library/react-hooks";
import { act } from "react-dom/test-utils";
import { ApiProvider, useGet, usePostJSON, usePut, useDelete, } from "../src/core";
import { Post } from "../src/app/models/Post";
import faker from "faker";
import { isEmpty } from "ramda";

let savingPost: Post;

describe("Testing Hooks", () => {

    beforeAll(() => {
        savingPost = {
            title: faker.lorem.word(7),
            body: faker.lorem.words(10),            
        }
        render(
            <ApiProvider
                timeout={60000}
                baseURL="https://jsonplaceholder.typicode.com"                
            >
            </ApiProvider>
        )
    });
    
    it("useGetHook", async () => {        
        const { result, waitForNextUpdate } = renderHook(() => useGet<null, Array<Post>>("/posts", null));
        const [,isLoading1] = result.current;
        expect(isLoading1).toEqual(false); 
        const [callApi] = result.current;
        act(() => { callApi() })
        const [,isLoading2] = result.current;
        expect(isLoading2).toEqual(true);
        await waitForNextUpdate();
        const [,isLoading3] = result.current;
        expect(isLoading3).toEqual(false);
        const [,,response] = result.current;
        expect(response.length).toBeGreaterThan(0)        
    });

    it("usePostJSONHook", async () => {
        const { result, waitForNextUpdate } = renderHook(() => usePostJSON<Post, Post>("/posts", savingPost));
        const [callApi] = result.current;
        act(() => callApi());        
        const [, isLoading1] = result.current        
        expect(isLoading1).toEqual(true);
        await waitForNextUpdate();
        const [,isLoading2, response] = result.current;
        expect(isLoading2).toEqual(false);
        expect(isEmpty(response)).toEqual(false);
    });

    it("usePutHook", async () => {
        const { result, waitForNextUpdate } = renderHook(() => usePut<Post, Post>("/posts/1", savingPost));
        const [callApi] = result.current;
        act(() => callApi());        
        const [, isLoading1] = result.current        
        expect(isLoading1).toEqual(true);
        await waitForNextUpdate();
        const [,isLoading2, response] = result.current;
        expect(isLoading2).toEqual(false);
        expect(isEmpty(response)).toEqual(false);
    });

    it("useDeleteHook", async () => {        
        const { result, waitForNextUpdate } = renderHook(() => useDelete<null, Post>("/posts/1", null));
        const [,isLoading1] = result.current;
        expect(isLoading1).toEqual(false); 
        const [callApi] = result.current;
        act(() => { callApi() })
        const [,isLoading2] = result.current;
        expect(isLoading2).toEqual(true);
        await waitForNextUpdate();
        const [,isLoading3] = result.current;
        expect(isLoading3).toEqual(false);
        const [,,response] = result.current;        
        expect(isEmpty(response)).toBeTruthy()
    });

});