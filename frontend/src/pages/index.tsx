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


function onChange(date, dateString) {
      console.log(date, dateString);
      message.info(dateString)
}

export default () => {

  return (
    <div>
      <h1 className={styles.title}>hello</h1>


      <ListUser />


      <Divider/>

      <UpdateUser />
 
      <Divider/>
      <AddArticle />

      <Divider/>



      <Space direction="vertical">
        <DatePicker onChange={onChange} />
      </Space>

    </div>
  );
}
