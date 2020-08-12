import {Wang}  from "@/components/wang"

import {
    get_article,
    add_article,
}  from "@/api"

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


function add(c=""){
    add_article({data:c})
    .then(x=>{
        console.log('zzzzzzzzz',x)
        message.success("submit success")
    }).catch(e=>{
        message.error("submit fail")
    })
}

function say(x=""){
    console.log("father recv:",x)
}

const Add=()=>(
      <Wang 
        init={get_article}
        save={add}
        debug={true}
        change={say}
      />
)

export default  Add
