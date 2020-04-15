const express = require("express");
const Vue = require("vue");

// 创建express实例和vue实例
const app = express();

// 创建渲染器
const render = require("vue-server-renderer").createRenderer();

// 将来用渲染器渲染page可以得到html内容
const page = new Vue({
  data: { title: "新数据" },
  template: "<div>{{title}}我是模版数据</div>"
});

app.get("*", async (req, res) => {
  try {
    const html = await render.renderToString(page);
    res.send(html);
  } catch (error) {
    res.status(500).send("服务器错误");
  }
});

app.listen(3000, () => {
  console.log("服务开启成功");
});
