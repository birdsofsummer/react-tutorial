# [react-tutorial](https://react-tutorial-1252957949.cos-website.ap-beijing.myqcloud.com)

+ [antd](https://ant.design/components/overview-cn/)
+ [umi](https://umijs.org/docs/getting-started#change-setting)
+ [mobx-react](https://github.com/mobxjs/mobx-react)
+ [wangeditor](https://github.com/wangfupeng1988/wangEditor/blob/master/example/demo/in-react/src/App.js)
+ [axios](https://www.npmjs.com/package/axios)




## 安装

```bash
cnpm i umi -g
npx @umijs/create-umi-app
cnpm i
cnpm install antd --save
cnpm install wangeditor --save
cnpm install axios --save

npm run start

#  > @ start /tmp/1
#  > umi dev
#  
#  Starting the development server...
#  [info] [webpackbar] Compiling Webpack
#  [success] [webpackbar] Webpack: Compiled successfully in 13.47s
#   DONE  Compiled successfully in 13479ms                                                                                                                      6:52:27 PM
#  
#  
#    App running at:
#    - Local:   http://localhost:8000 (copied to clipboard)
#    - Network: http://192.168.0.101:8000


tree src/pages
# src/pages
# ├── index.less
# └── index.tsx
# 
# 0 directories, 2 files

#build
```


## 打包

```bash
npm run build
tree ./dist
```






## 部署

```bash

cp env.example .env

# 修改.env 里的腾讯云id/秘钥 配置区域

sls --debug

#  DEBUG ─ Resolving the template's static variables.
#  DEBUG ─ Collecting components from the template.
#  DEBUG ─ Downloading any NPM components found in the template.
#  DEBUG ─ Analyzing the template's components dependencies.
#  DEBUG ─ Creating the template's components graph.
#  DEBUG ─ Syncing template state.
#  DEBUG ─ Executing the template's components graph.
#  DEBUG ─ Preparing website Tencent COS bucket react-tutorial-1252957949.
#  DEBUG ─ Deploying "react-tutorial-1252957949" bucket in the "ap-beijing" region.
#  DEBUG ─ "react-tutorial-1252957949" bucket was successfully deployed to the "ap-beijing" region.
#  DEBUG ─ Setting ACL for "react-tutorial-1252957949" bucket in the "ap-beijing" region.
#  DEBUG ─ Ensuring no CORS are set for "react-tutorial-1252957949" bucket in the "ap-beijing" region.
#  DEBUG ─ Ensuring no Tags are set for "react-tutorial-1252957949" bucket in the "ap-beijing" region.
#  DEBUG ─ Configuring bucket react-tutorial-1252957949 for website hosting.
#  DEBUG ─ Running npm run build in /q/web/code/js/react/editor/frontend.
#  DEBUG ─ Uploading website files from /q/web/code/js/react/editor/frontend/dist to bucket react-tutorial-1252957949.
#  DEBUG ─ Starting upload to bucket react-tutorial-1252957949 in region ap-beijing
#  DEBUG ─ Uploading directory /q/web/code/js/react/editor/frontend/dist to bucket react-tutorial-1252957949
#  DEBUG ─ Website deployed successfully to URL: https://react-tutorial-1252957949.cos-website.ap-beijing.myqcloud.com.
#
#  frontend: 
#    url: https://react-tutorial-1252957949.cos-website.ap-beijing.myqcloud.com
#    env: 
#
#  125s › frontend › done

```

