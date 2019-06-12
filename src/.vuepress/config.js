module.exports = {
  title: "Intro to Git",
  description: "This is a repo made to demonstrate the usage and workflow of git",
  dest: "docs",
  base: "/intro-to-git/",
  plugins: [
    ["@vuepress/back-to-top", true],
    [
      "container",
      {
        type: "vue",
        before: '<pre class="vue-container"><code>',
        after: "</code></pre>"
      }
    ]
  ],
  themeConfig: {
    sidebar: {
      "/": [
        "",
        "creating",
        "contributing"
      ]
    }
  }
};
