import  React ,{
  Children, // { map, forEach, count, toArray, only, },
  Component,
  Fragment,
  Profiler,
  PureComponent,
  StrictMode,
  Suspense,
  cloneElement,
  createContext,
  createElement,
  createFactory,
  createRef,
  forwardRef,
  isValidElement,
  lazy,
  memo,

  useCallback,
  useContext,
  useDebugValue,
  useEffect,
  useImperativeHandle,
  useLayoutEffect,
  useMemo,
  useReducer,
  useRef,
  useState,
} from 'react'



import {
    Affix,
    Anchor,
    AutoComplete,
    Alert,
    Avatar,
    BackTop,
    Badge,
    Breadcrumb,
    Button,
    Calendar,
    Card,
    Collapse,
    Carousel,
    Cascader,
    Checkbox,
    Col,
    Comment,
    ConfigProvider,
    DatePicker,
    Descriptions,
    Divider,
    Dropdown,
    Drawer,
    Empty,
    Form,
    Grid,
    Input,
    InputNumber,
    Layout,
    List,
    message,
    Menu,
    Mentions,
    Modal,
    Statistic,
    notification,
    PageHeader,
    Pagination,
    Popconfirm,
    Popover,
    Progress,
    Radio,
    Rate,
    Result,
    Row,
    Select,
    Skeleton,
    Slider,
    Space,
    Spin,
    Steps,
    Switch,
    Table,
    Transfer,
    Tree,
    TreeSelect,
    Tabs,
    Tag,
    TimePicker,
    Timeline,
    Tooltip,
    Typography,
    Upload,
    //version,

}  from 'antd'



import user from "@/api/user"
const count = 3;

export default class ListUser extends React.Component {

  state = {
    initLoading: true,
    loading: false,
    data: [],
    list: [],
  };

  componentDidMount() {

    user.list(count).then(res => {

      this.setState({
        initLoading: false,
        data: res.results,
        list: res.results,
      });


    });
  }

  onLoadMore = () => {
    this.setState({
      loading: true,
      list: this.state.data.concat([...new Array(count)].map(() => ({ loading: true, name: {} }))),
    });


    user.list(count).then(res => {
      const data = this.state.data.concat(res.results);
      this.setState(
        {
          data,
          list: data,
          loading: false,
        },
        () => { window.dispatchEvent(new Event('resize')) },
      );
    });
  };



  render() {
    const { initLoading, loading, list } = this.state;
    const loadMore =
      !initLoading && !loading ? (
        <div
          style={{
            textAlign: 'center',
            marginTop: 12,
            height: 32,
            lineHeight: '32px',
          }}
        >
          <Button onClick={this.onLoadMore}>loading more</Button>
        </div>
      ) : null;

    return (
      <List
        className="demo-loadmore-list"
        loading={initLoading}
        itemLayout="horizontal"
        loadMore={loadMore}
        dataSource={list}
        renderItem={item => (

          <List.Item

            actions={[
                <a 
                   key="list-loadmore-del" 
                    onClick={
                        ()=>user.del(item.email)
                                .then(x=>{
                                        message.success("del %s sucess",Object.values(item.name).join(' '))
                                        const data = this.state.data
                                        let data1= data.filter(d=>d.email!=item.email)
                                        console.log(1111111111,data,data1)
                                        this.setState( 
                                           { data:data1, list: data1, loading: false, },
                                           () => { window.dispatchEvent(new Event('resize')) },
                                        ) 
                                })
                                .catch(e=>{
                                        message.error("del fail, plz try again later")
                                })
                    }
                >del</a>,
                <a key="list-loadmore-edit">edit</a>,
                <a key="list-loadmore-more">more</a>,
            ]}
          >
            <Skeleton avatar title={false} loading={item.loading} active>
              <List.Item.Meta
                avatar={
                  <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                }
                title={<a href="https://github.com/birdsofsummer/react-tutorial">{item.name.last}</a>}
                description="cccc"
              />
              <div>content</div>
            </Skeleton>
          </List.Item>

        )}
      />
    );
  }
}

