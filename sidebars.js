// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  cnSidebar: [
    {
      type: 'doc',
      id: 'cn/intro',
      label: 'OLA 使用指南',
    },
    {
      type: 'doc',
      id: 'cn/01-preface',
      label: '1. 前言',
    },
    {
      type: 'category',
      label: '2. 智能助手 AskOLA',
      items: [
        { type: 'doc', id: 'cn/askola/askola-index', label: '概览' },
        { type: 'doc', id: 'cn/askola/search', label: '2.1 查询信息' },
        { type: 'doc', id: 'cn/askola/edit', label: '2.2 修改信息' },
        { type: 'doc', id: 'cn/askola/create', label: '2.3 录入新信息' },
      ],
    },
    { type: 'doc', id: 'cn/channel', label: '3. 通话录音与分析' },
    { type: 'doc', id: 'cn/admin', label: '4. 管理员与老板视角' },
    { type: 'doc', id: 'cn/help', label: '5. 故障与求助' },
  ],

  enSidebar: [
    {
      type: 'doc',
      id: 'en/intro-en',
      label: 'OLA User Guide',
    },
    {
      type: 'doc',
      id: 'en/01-preface-en',
      label: '1. Introduction',
    },
    {
      type: 'category',
      label: '2. AskOLA AI Assistant',
      items: [
        { type: 'doc', id: 'en/askola/askola-index-en', label: 'Overview' },
        { type: 'doc', id: 'en/askola/search-en', label: '2.1 Querying Information' },
        { type: 'doc', id: 'en/askola/edit-en', label: '2.2 Modifying Records' },
        { type: 'doc', id: 'en/askola/create-en', label: '2.3 Creating New Records' },
      ],
    },
    { type: 'doc', id: 'en/channel-en', label: '3. Call Recordings & Analysis' },
    { type: 'doc', id: 'en/admin-en', label: '4. Admin & Manager View' },
    { type: 'doc', id: 'en/help-en', label: '5. FAQ & Troubleshooting' },
  ],
};

export default sidebars;
