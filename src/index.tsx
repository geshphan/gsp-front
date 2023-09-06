/** @jsxImportSource @emotion/react */
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Global } from "@emotion/react";
import { reset } from "./style/reset";
import {
    createBrowserRouter,
    Link,
    Navigate,
    redirect,
    Route,
    RouterProvider,
    Routes,
} from "react-router-dom";
import ErrorPage from "./component/page/Error/ErrorPage";
import { getCookie } from "./utils/cookieUtils";
import LoginTemplate from "./component/template/Login/LoginTemplate";
import styled from "@emotion/styled";
import Button from "./component/atom/Button/Button";
import InputTest, { TestInput } from "./component/atom/Input/InputTest";
import LoginPage from "./component/page/Login/LoginPage";
import { Provider } from "jotai";
import TodoListPage from "./component/page/Todo/TodoListPage";

const queryClient = new QueryClient();
const root = ReactDOM.createRoot(
    document.getElementById("root") as HTMLElement
);

const ROOT_PATH = "gsp-front";

const ContainerWrap = styled.div({
    width: 'calc(100% - 4vw)',
    height: 'calc(100vh - 4vh)',
    overflow: 'hidden',
    margin: '0',
    padding: '0'
})

const Container = styled.div({
    maxWidth: '1240px',
    minWidth: '320px',
    width: '100%',
    height: '100%',
    overflowX: 'hidden',
    overflowY: 'scroll',
    margin: '0 auto',
    padding: '2vh 2vw',
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    alignItems: 'center',
})

const authCheck = (children: any) => {

    // 로그인 시 세션 체크 로직 생성

    const isLogin = getCookie("isLogin");
    console.log(isLogin);
    if (isLogin === 'Y')
        return (
            <ContainerWrap>
                <Container>
                    {children}
                </Container>
            </ContainerWrap>
        );
    else
        return <Navigate to={`/login`} replace={true} />
};

const router = createBrowserRouter([
    {
        path: "/",
        errorElement: <ErrorPage />,
    },
    {
        path: "/login",
        element: (
            <ContainerWrap>
                <Container>
                    <LoginPage />
                </Container>
            </ContainerWrap>
        ),
    },
    {
        // todo list
        path: ROOT_PATH + "/",
        element: authCheck(<TodoListPage />),
    },
    {
        path: ROOT_PATH + "/App",
        element: <App />,
    },
    {
        path: ROOT_PATH + "/refTest",
        element: <TestInput />,
    },
]);

root.render(
    // <React.StrictMode>
    <>
        {/* React-query provider */}
        <Provider>
            <QueryClientProvider client={queryClient}>
                {/* emotion Global CSS */}
                <Global styles={reset} />
                {/* react-router-dom provider */}
                <RouterProvider router={router} fallbackElement={null} />
            </QueryClientProvider>
        </Provider>
    </>
    // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
