// 渲染首屏
import createApp from "./app";

// context哪来的？
export default constext => {
  return new Promise((resolve, reject) => {
    const { app, router } = createApp();
    // 进入首屏
    router.push(constext.url);
    router.onReady(() => {
      resolve(app);
    }, reject);
  });
};
