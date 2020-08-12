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




import {
    find,
    add,
    del,
    list,
}  from "@/api/article"




export default ()=>{
    const [d, setd] = useState([]);

        useEffect(()=>{
                list().then(x=>{
                     console.log("list article",x)
                     setd(x.data)
                })
                .catch(e=>{
                    message.error("???")
                })
         },[])

        const columns = [
          {
            title: 'Id',
            dataIndex: 'id',
            key: 'id',
            render: text => <a>{text}</a>,
          },

          {
            title: 'Title',
            dataIndex: 'title',
            key: 'title',
            render: text => <a>{text}</a>,
          },
          {
            title: 'content',
            dataIndex: 'content',
            key: 'content',
            render: text => <span>{text.slice(0,20)+"..."}</span>,
          },
          {
            title: 'Action',
            key: 'action',
            render: (text, record) => (
              <Space size="middle">


              <a onClick={()=>{
                  console.log("edit",text, record)


              }}>Edit</a>


              <a onClick={()=>{
                  console.log("del",text, record)
                  del(text.id).then(x=>{
                      message.success("deleted")
                      let d1=d.filter(x=>x.id!=text.id)
                      setd(d1)
                  })
                  .catch(e=>{
                      message.error("???")
                 })

              }}>Delete</a>


              <a onClick={()=>{
                  console.log("view",text, record)
              }}>Show</a>



              </Space>
            ),
          },
        ];

    return (
        <Table columns={columns} dataSource={d} />
    )
}
