import React from "react";
import { createUseStyles } from "react-jss";
import { Collapse, Card, } from "antd";
import GetRequestHookComponent from "./components/getRequestHook";

const { Panel } = Collapse;

const useGlobalStyles = createUseStyles({
    "@global": {
        "*": {
            padding: 0,
            margin: 0,
            boxSizing: "border-box",
        },
        body: {
            backgroundColor: "thistle"
        },
    },
});

const App: React.FC = () => {
    
    useGlobalStyles()
    
    return (
        <div style={{padding: 10}}>
            <Card title={<strong>Examples with Request JS</strong>}>
                <Collapse defaultActiveKey={["1"]}>
                    <Panel key="1" header={<strong>Get Request Hook</strong>}>
                        <GetRequestHookComponent />
                    </Panel>

                    <Panel key="2" header={<strong>Get Request Hook</strong>}>
                        <GetRequestHookComponent />
                    </Panel>
                </Collapse>                
            </Card>      
        </div>          
    )
}

export default App;