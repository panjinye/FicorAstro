// 文件名：talkingData.js（可根据你的项目目录重命名，如 ./src/data/talkingData.js）
export default {
  // API 接口请求优先，后续有接口时填写接口地址即可（如 "/api/getTalkingList"）
  // 接口返回数据格式需和下方 data 数组的每条数据结构一致
  api: '',
  
  // api 为空则使用以下静态数据 
  // 注意：图片请用 vh-img-flex 类包裹（对应 ToolLayout.astro 中的渲染样式）
  data: [
    {
      // 动态日期（可修改为自己的记录日期）
      "date": "2026-01-09 10:00:00",
      // 动态标签（可增删、修改标签内容）
      "tags": [
        "日常",
        "Astro 学习"
      ],
      // 动态核心内容（替换为自己想记录的内容）
      "content": "终于搞定了 Astro 项目的作者和头像渲染，样式也调整到位啦！",
      // 博主（作者）昵称（修改为你自己的昵称/网名）
      "author": "Ficor",
     
      // 博主头像（二选一即可，推荐本地头像，更稳定）
      // 选项1：本地头像（Astro public 文件夹下 -> images/avatar.png，直接放入图片即可）
       "avatar": "/images/avatar.webp",
      // 选项2：在线头像（替换为你的在线图片 URL，直接复制使用）
      // "avatar": "https://picsum.photos/200/200"
    },
    {
      "date": "2026-01-08 18:30:00",
      "tags": [
        "生活",
        "记录"
      ],
      "content": "今天尝试了 Astro 的 Layout 组件，比想象中更好用～",
      // 统一博主信息（和上一条保持一致，实现全局统一的博主效果）
      "author": "Ficor",
      "avatar": "/images/avatar.webp"
    },
    {
      // 新增一条动态（可直接复制、修改，扩展自己的动态列表）
      "date": "2026-01-07 20:15:00",
      "tags": [
        "技术",
        "前端"
      ],
      "content": "Source Map 真的太实用了，F12 能直接定位到源文件，排错效率翻倍！",
      "author": "Ficor",
      "avatar": "/images/avatar.webp"
    }
  ]
}