module.exports = [
  {
    path: "/",
    component: "Home",
    title: "首页",
    exact: true,
  },
  {
    path: "/hooks",
    component: "Hooks",
    title: "hooks",
  },
  {
    path: '/cropper',
    component: 'Main',
    title: '裁剪',
  },
  {
    path: '/scroll',
    component: 'Scroll',
    title: '滚动和高度',
  },
  {
    path: '/modal',
    component: 'FloatModal',
    title: '手写弹框',
  },
  {
    path: '/width',
    component: 'WidthHeight',
    title: '宽高'
  },
  {
    path: '/layout',
    component: 'Layout',
    title: '布局'
  },
  {
    path: '/life',
    component: 'LifeCycle',
  }
];
