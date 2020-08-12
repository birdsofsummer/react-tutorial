import {wang_config} from "./wang"
import E from 'wangeditor'

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
} from 'antd';

const Wang=(props, ref)=>{

    const {init,save,debug,change}=props

    const [c, setc] = useState("");
    const elem =  useRef(null); 
    useEffect(()=>{
            const editor = new E(elem.current)
            editor.customConfig.onchange = html => {
                console.log('write',html)
                setc(html)
                change(html)
            }

            for (let k in wang_config){
                editor.customConfig[k]=wang_config[k]
            }

            editor.create()

           //window.editor=editor

            init()
            .then(x=>{
                console.log('get article 1 success',x)
                // { ok: true, data: "hello", msg: "ok" }
                let d=x.data 
               // let d="dddd"  //假的
                setc(d)
                editor.txt.html(d)
                change(d)
            })
            .catch(e=>{
                message.error("get article fail")
            })

    },[elem])


    return (
         <div>
              <Row justify="center" gutter={[16, 16]}>
                  <Col span={18} >
                      <div id="editor" ref={elem} style={{textAlign: 'left'}} />
                  </Col>
              </Row>
              {debug &&  (
                 <Row justify="center">
                      <p>{c}</p>
                 </Row>
              )}

              <Row justify="center" gutter="{ xs: 8, sm: 16, md: 24}">
                  <Button onClick={(e)=>save(c)}> 提交</Button>
              </Row>
         </div>
   )
}

export {Wang} 
