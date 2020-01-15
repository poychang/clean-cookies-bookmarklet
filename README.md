# 快速清除網站 Cookies

Cookies 很好吃，但有些情況很討厭，例如掉屑屑，透過此 Bookmarklet 快速清除網站 Cookies。

## 安裝方式

1. 開啟瀏覽器，並打開瀏覽器的**書籤工具列**或**我的最愛列**：
   * Google Chrome 瀏覽器請按下 `Ctrl+Shift+B` 進行切換。
   * Internet Explorer 瀏覽器請點選主選單的 `[檢視]` / `[工具列]` / `[我的最愛列]` 進行切換。
2. 建立一個書籤
3. 請你手動修改這個書籤，將將下列程式碼貼上該書籤的網址欄為即可！

```js
javascript:!function(){["medium.com"].forEach(function(o){-1!==location.href.indexOf(o)&&(document.cookie.split(";").forEach(function(o){document.cookie=o.replace(/^ +/,"").replace(/=.*/,"=;expires="+(new Date).toUTCString()+";path=/")}),location.reload())});}();
```

## 使用方式

直接點選書籤，將會刪除符合**適用網站**的 Cookies。

## 適用網站

- [Medium](https://medium.com/)

## 建置方式

```bash
npm run build
```

建置完成後，將 `dist\clean-cookies-bookmarklet.min.js` 檔案的內容前面加上 `javascript:` 即是 Bookmarklet 瀏覽器書籤小工具。
