import React from 'react';
import styles from './index.less';
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


import AddArticle from "./article/add"
import ListUser from "./user/index"
import {UpdateUser,AddUser} from "./user/add"



const Links=()=>{
    const links=[
      {name:"umi",url:"https://umijs.org/docs/getting-started#change-setting"},
      {name:"antd",url:"https://ant.design/components/overview-cn/"},
      {name:"mobx",url:"https://mobx.js.org/README.html"},
      {name:"editor",url:"https://github.com/wangfupeng1988/wangEditor/blob/master/example/demo/in-react"},

    ]
    return (
               <Row align="center">
                 <Timeline>
                 {links.map((x,i)=>(
                    <Timeline.Item color="green">
                        <a href={x.url} target="_blank" > {x.name} </a>
                    </Timeline.Item>
                 ))}
                 </Timeline>
               </Row>
          )

}


const Pick=()=>{
     function onChange(date, dateString) {
          console.log(date, dateString);
          message.info(dateString)
    }

    return (
            <Row align="center" gutter={[16, 16]}>
              <Space direction="vertical">
                <DatePicker onChange={onChange} />
              </Space>
            </Row>
    )
}






export default () => {

  return (
            <div>
                 <h1 className={styles.title}>hello</h1>

              <Pick />
              <Links />

              <ListUser />

              <Divider/>
              <UpdateUser />

              <Divider/>
              <AddArticle />

              <Divider/>

            </div>




  );
}
