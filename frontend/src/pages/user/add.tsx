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


const { Option, OptGroup } = Select;




import user from "@/api/user"



const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};
const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
};

const validateMessages = {
      required: '${label} is required!',
      types: {
        email: '${label} is not validate email!',
        number: '${label} is not a validate number!',
      },
      number: {
        range: '${label} must be between ${min} and ${max}',
      },
};

const gender=[
    {text:"male",value:0,title:"Mr"},
    {text:"female",value:1,title:"Ms"},
]


export const AddUser= (props)=>{
    const {init,debug}=props
    const [form] = Form.useForm();

//  form.getFieldValue()
//  form.getFieldsValue()
//  form.getFieldsValue(['user','name',])
//  form.getFieldError()
//  form.getFieldsError()
//  form.isFieldsTouched()
//  form.isFieldTouched()
//  form.isFieldValidating()
//  form.isFieldsValidating()
//  form.resetFields()
//  form.setFields()
//  form.setFieldsValue()
//  form.validateFields()
//  form.submit()
//  form.getInternalHooks()
//  form.__INTERNAL__
//  form.scrollToField()
//  form.getFieldInstance

    useEffect(()=>{
        if (init){
            init().then(x=>{
                form.setFieldsValue(x);
            })
         }else{

         }
    },[form])

    const onFinish = values => {
        console.log('add user', values);
        user.add(values)
            .then(x=>{
                console.log(x)
                message.success('add success')
            })
            .catch(e=>{
                message.error("add user fail,try again later")
         })
    };

    const onFinishFailed = errorInfo => {
        console.log('Failed:', errorInfo);
        message.error("plz check input !")
    };

    const onReset = () => {
        form.resetFields();
    };
    
    const onGenderChange=(value)=>{
        let o={
            0:"Mr",
            1:"Ms",
        }
        form.setFieldsValue({ name:{title: o?.[value] ?? "?" }});
    }

    return (

        <Row align="center">

                <Form
                      form={form} 
                      name="control-hooks"
                      {...layout}
                      initialValues={{ remember: true }}
                      onFinish={onFinish}
                      onFinishFailed={onFinishFailed}
                      validateMessages={validateMessages}
                >
                {debug && (
                    <Form.Item shouldUpdate>
                      {() => {
                        return <pre>{JSON.stringify(form.getFieldsValue(), null, 2)}</pre>;
                      }}
                    </Form.Item>
                  )}
                  <Form.Item
                    label="Username"
                    name={['user', 'username']}
                    rules={[{ required: true, message: 'Please input your username!' }]}
                  >
                    <Input />
                  </Form.Item>


                  <Form.Item
                    label="Password"
                    name={['user', 'password']}
                    rules={[{ required: true, message: 'Please input your password!' }]}
                  >
                    <Input.Password />
                  </Form.Item>


                  <Form.Item name={['user', 'gender']} label="Gender" rules={[{ required: true }]}>
                    <Select
                      placeholder="Select a gender"
                      onChange={onGenderChange}
                      allowClear
                    >

                       <OptGroup label="gender">
                        {gender.map((x,i)=>(
                              <Option key={`g_${i}`} value={x.value}>{x.text}</Option>
                         ))}
                      </OptGroup>

                    </Select>

                  </Form.Item>

                  <Form.Item name={['name', 'title']} label="Title" rules={[{ required: true }]}>
                    <Input />
                  </Form.Item>

                  <Form.Item name={['name', 'first']} label="first name" >
                    <Input />
                  </Form.Item>

                  <Form.Item name={['name', 'last']} label="last name" >
                    <Input />
                  </Form.Item>

                  <Form.Item name={['user', 'age']} label="Age" rules={[{ type: 'number', min: 0, max: 99 }]}>
                    <InputNumber />
                  </Form.Item>

                  <Form.Item name={['user', 'email']} label="Email" rules={[{ type: 'email' }]}>
                    <Input />
                  </Form.Item>

                  <Form.Item name={['user', 'website']} label="Website">
                    <Input />
                  </Form.Item>

                  <Form.Item name={['user', 'introduction']} label="Introduction">
                    <Input.TextArea />
                  </Form.Item>

                  <Form.Item {...tailLayout} name="remember" valuePropName="checked">
                    <Checkbox>Remember me</Checkbox>
                  </Form.Item>

                  <Form.Item {...tailLayout}>

                          <Button type="primary" htmlType="submit"> Submit </Button>
                          <Button htmlType="button" onClick={onReset}> Reset </Button>

                  </Form.Item>


                </Form>
        </Row>
  ); 
}


export const UpdateUser=()=>(
    <AddUser 
       init={
            ()=>user.find(123)
            .then(x=>{
                console.log('find user success',x)
                return x.data
             })
            .catch(e=>{
                message.error("get user fail")
            })
        }
        debug={true}
    />
)

export default AddUser

