/*
 * @Author: Lin
 * @Date: 2019-11-13 22:42:18
 * @LastEditTime: 2019-12-07 11:34:49
 * @Description: 修改原简历内容
 * @FilePath: \resume\config\render\section.js
 */
/**
 * 对文段的一个简单封装
 */
const p = (left = '', right = '') => {
  return { left, right }
}
/**
 * header
 * 默认将内容转为h4
 */
const h = (left = '', right = '') => {
  return { left: `#### ${left}`, right: `#### ${right}` }
}

/**
 * 正文部分
 * 说明：本模版在pc端和打印端采用两栏式显示，手机端采用单栏
 * 请自己判断并适应页面尺寸
 */
export default [
  /**
   * 每一个小模块，都有以下几个配置项：
   * title： 顶部名称栏
   * content: 里面的内容，需要注意的是每一条内容都会换行
   */
  {
    title: '实践经历',
    content: [
      p(),
      p(
        '## 重庆邮电大学 · 红岩网校工作站',
        '(2022.9 - 至今)[Link](https://redrock.team/#/)'
      ),
      p(),
      p('隶属校团委的学生互联网组织，成立于2000年，共有成员90余人，包含产品、视觉、运维、移动、前端、后端部门，拥有PRD-UI-开发-运营-迭代的完整开发流程。'),
      p(),
      p(`*红岩网校工作站 · Android学员<small>（2022.9 - 2023.8）</small>* `),
      p(),
      p(`*红岩网校工作站 · Android干事<small>（2023.9 - 至今）</small>* `),
      p(),
      p('- 负责掌上重邮Android端代码开发与维护', '[Link](https://github.com/RedrockMobile/CyxbsMobile_Android)'),
      p(),
      p('- 负责了掌上重邮 ufield 模块的开发', '[Link](https://github.com/RedrockMobile/CyxbsMobile_Android/tree/develop/module_ufield)'),
      p(),
      p('- 负责了掌上重邮 mine、login 和 protocol 模块部分重构工作')
    ]
  },
  {
    title: '个人能力',
    content: [
      p(),
      p(`- *掌握基本技能:* 掌握 Java、Kotlin、Git 等基础，熟悉Java/Kotlin语言进行Android开发。`),
      p(),
      p(`- *掌握 Android 常用组件:* 熟悉使用 Activity、Fragment、RecyclerView 等常见组件。`),
      p(),
      p('- *熟悉 Jetpack 常用组件:* 熟悉使用Jetpack框架常用组件如 LiveData、ViewModel 编写MVVM架构的应用。'),
      p(),
      p('- *熟悉消息机制:* 了解 Handler、 Looper、Message 和 MessageQueue 等核心类，理解消息机制原理和流程。'),
      p(),
      p('- *掌握常见框架使用:* 掌握常见框架， 如Retrofit、 OkHttp、 RxJava等第三方库的使用。')
    ]
  },
  {
    title: '自我评价',
    content: [
      p(),
      p(`- *代码风格良好* 具备较好的代码风格，注重代码的质量，追求代码的可读性和健壮性。`),
      p(),
      p(`- *学习能力强* 对Android开发充满热情，愿意主动投入时间学习新技术。`),
      p(),
      p(`- *善于团队合作* 具备良好的团队协作能力，能与团队的其他成员进行高效的沟通和协作。`)
    ]
  },
  {
    title: '项目经历',
    content: [
      p(`## 掌上重邮 APP`, '(2023.8 - 至今)[Link](https://github.com/RedrockMobile/CyxbsMobile_Android)'),
      p(),
      p(`重庆邮电大学首款整合校园与生活的 App。`),
      p('该项目自 15 年维护至今，日活最高可达上万次，代码总行数超过百万行，采用 Kotlin 语言 编写，应用 MVVM 架构模式。'),
      p(),
      p('*负责模块*'),
      p(' 在该项目中负责 ufield 模块的活动主界面、搜索板块和后台管理相关业务开发'),
      p('- 使用框架及三方库： 使用Jetpack库（如LiveData， ViewModel） 提高开发效率。 使用RxJava操作数据流。'),
      p('- 项目架构： 模块使用了MVVM架构进行开发， 将数据操作与视图操作解耦。')
    ]
  },
  {
    title: '获奖经历',
    content: [
      p('*2022 - 2023年度 国家励志奖学金*'),
      p('*2022 - 2023年度 学业奖学金三等奖*')
    ]
  }

]
