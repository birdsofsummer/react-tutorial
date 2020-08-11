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

import {
    get_article,
    add_article,
}  from "@/api/index"


function onChange(date, dateString) {
      console.log(date, dateString);
}

function save(c=""){
    add_article({data:c})
    .then(x=>{
        message.success("submit success")
    }).catch(e=>{
        message.error("submit fail")
    })
}

function say(x=""){
    console.log("father recv:",x)
}

import {Wang}  from "@/components/wang"

export default () => {

  return (
    <div>
      <h1 className={styles.title}>hello</h1>
      <Wang 
        init={get_article}
        save={save}
        debug={true}
        change={say}
      />
      <Divider/>

      <Space direction="vertical">
        <DatePicker onChange={onChange} />
      </Space>

    </div>
  );
}
