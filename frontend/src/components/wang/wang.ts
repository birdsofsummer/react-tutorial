const upload_url="/api/upload"
const headers={
   "token":123
}
const wang_config={
    lang: {
         '设置标题': 'title',
         '正文': 'p',
         '链接文字': 'link text',
         '链接': 'link',
         '插入': 'insert',
         '创建': 'init',

         '图片链接': 'pictures linking',
         '图片': 'picture',
//       '设置标题': 'Set title',
//       '正文': 'text',
         '字号': 'Font size',
         '字体': 'Font',
         '设置列表': 'Settings list',
         '有序列表': 'Ordered list',
         '无序列表': 'Unordered list',
         '插入': 'insert ',
         '插入表格': 'insert table',
         '行': 'row',
         '列': 'column',
         '的': ' ',
         '表格': 'table',
         '上传图片': 'Upload picture',
         '网络图片': 'Network picture',
         '插入表格': 'Insert table',
         '插入视频': 'Insert video',
         '插入代码': 'Insert code',
         '文字颜色': 'Text color',
         '背景色': 'Background color',
         '对齐方式': 'Alignment',
         '靠左': 'left',
         '居中': 'Center',
         '靠右': 'right',


     },
    uploadImgShowBase64 : false,
    uploadImgServer : upload_url,
    uploadImgHeaders : headers,
    uploadFileName : 'file',
    uploadImgMaxSize : 10 * 1024 * 1024,
    uploadImgMaxLength : 6 ,
    uploadImgTimeout : 3 * 60 * 1000 ,
    menus : [          // 菜单配置
          'head',  // 标题
          'bold',  // 粗体
          'fontSize',  // 字号
          'fontName',  // 字体
          'italic',  // 斜体
          'underline',  // 下划线
          'strikeThrough',  // 删除线
          'foreColor',  // 文字颜色
          'backColor',  // 背景颜色
          'link',  // 插入链接
          'list',  // 列表
          'justify',  // 对齐方式
          'quote',  // 引用
          //'emoticon',  // 表情
          'image',  // 插入图片
          'table',  // 表格
          //'code',  // 插入代码
          'undo',  // 撤销
          'redo'  // 重复
          ],
          uploadImgHooks:{
              before: function (xhr, editor, files) {
              },
              success: function (xhr, editor, result) {
                   console.log(result)
                  // this.$bvToast.toast(result.message);
              },
              fail: function (xhr, editor, result) {
              },
              error: function (xhr, editor) {
              },
              timeout: function (xhr, editor) {
              },
              customInsert: function (insertImg, result, editor) {
                   if (result.success){
                       let url=result.data // 
                       insertImg(url)
                   }else{

                   }
              },
        }
}



export {
    wang_config,
}
