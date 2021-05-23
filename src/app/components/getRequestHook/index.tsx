import React from "react";
import { Row, Col, Spin, List, Button } from "antd";
import { darcula } from "react-syntax-highlighter/dist/esm/styles/hljs";
import SyntaxHighlighter from "react-syntax-highlighter";
import { useGet } from "../../../core";
import { Post } from "../../models/Post";
import { createUseStyles } from "react-jss";
import { prop } from "ramda";

const codeString = `const GetRequestHookComponent: React.FC = () => {

    const [callApi, isLoading, posts] = useGet<{page: number, size: number}, Array<Post>>("/posts", {page: 0, size: 50});
    
    React.useEffect(() => { callApi() }, [])
    
    ...

    return (
        <Row gutter={8}>
            ...
            <Col sm={24} md={8} className="row-gutter">
                <div className={classes.result}>
                    { isLoading && <Spin /> }
                    {!isLoading && posts && (
                        <List
                            bordered
                            dataSource={posts.map(prop("title"))}
                            renderItem={title => <Item> { title } </Item>}
                        />
                    )}
                </div>
                <Button 
                    type="dashed"
                    className={classes.mt10} 
                    onClick={callApi}> 
                    Reload 
                </Button>
            </Col>
        </Row>
    )
};

export default GetRequestHookComponent;`;

const { Item } = List;

const useStyles = createUseStyles({
  result: {
    height: 700,
    overflowY: "auto",
    overflowX: "hidden",
    border: "1px solid #eee",
    padding: 10,
    textAlign: "center",
  },
  mt10: {
    marginTop: 10,
  },
});

const GetRequestHookComponent: React.FC = () => {
  const [callApi, isLoading, posts] = useGet<
    { page: number; size: number },
    Array<Post>
  >("/posts", { page: 0, size: 50 });

  React.useEffect(() => {
    callApi();
  }, []);

  const classes = useStyles();

  return (
    <Row gutter={8}>
      <Col sm={24} md={16} className="row-gutter">
        <SyntaxHighlighter language="typescript" style={darcula}>
          {codeString}
        </SyntaxHighlighter>
      </Col>
      <Col sm={24} md={8} className="row-gutter">
        <div className={classes.result}>
          {isLoading && <Spin />}
          {!isLoading && posts && (
            <List
              bordered
              dataSource={posts.map(prop("title"))}
              renderItem={(title) => <Item> {title} </Item>}
            />
          )}
        </div>
        <Button type="dashed" className={classes.mt10} onClick={callApi}>
          Reload
        </Button>
      </Col>
    </Row>
  );
};

export default GetRequestHookComponent;
