import{_ as e}from"./plugin-vue_export-helper.21dcd24c.js";import{o as p,c as o,a as n,b as t,e as s,d as l,r as c}from"./app.dd4c22c0.js";const i={},r=n("p",null,"\u8FF7\u4E0A IFTTT \u540E\u6025\u9700 RSS \u6765\u76D1\u6D4B\u7F51\u9875\uFF0C\u627E\u5230\u514D\u8D39\u7684 FEED43\u3002\u7F51\u4E0A\u6709\u5F88\u591A\u6559\u7A0B\uFF0C\u4F46\u5BF9\u65B0\u624B\u90FD\u4E0D\u591F\u53CB\u597D\uFF0C\u5C31\u91CD\u65B0\u6574\u7406\u4E86\u4E00\u4EFD\u3002",-1),u=n("p",null,[n("strong",null,"\u25BA \u5F00\u59CB\u70E7\u5236\u5C5E\u4E8E\u81EA\u5DF1\u7684 feed")],-1),d=n("h2",{id:"_1-\u8FDB\u5165\u7F51\u9875",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_1-\u8FDB\u5165\u7F51\u9875","aria-hidden":"true"},"#"),s(" 1. \u8FDB\u5165\u7F51\u9875")],-1),h={href:"http://www.feed43.com/",target:"_blank",rel:"noopener noreferrer"},_=s("FEED43"),g=s(" \u65E0\u9700\u6CE8\u518C\uFF0C\u70B9\u51FB Create your own feed \u76F4\u63A5\u4F7F\u7528\u3002"),k=l(`<p><img src="https://pic1.zhimg.com/v2-b5da0b08f632376fad3925a779e373b4_r.jpg" alt="" loading="lazy"></p><h2 id="_2-\u9009\u5B9A-rss-\u7F51\u9875" tabindex="-1"><a class="header-anchor" href="#_2-\u9009\u5B9A-rss-\u7F51\u9875" aria-hidden="true">#</a> 2. \u9009\u5B9A RSS \u7F51\u9875</h2><p>\u5C06\u76EE\u6807\u7F51\u5740\u6DFB\u5165 Step1. Specify source page address (URL)\uFF0C\u5C06\u8F93\u5165\u7684\u6E90\u4EE3\u7801\u590D\u5236\u5230 txt \u6587\u6863\u4E2D\uFF08\u65B9\u4FBF\u4E4B\u540E\u5199\u6293\u53D6\u89C4\u5219\uFF09</p><p><img src="https://pic1.zhimg.com/v2-1b687a5b1c325ba6d04fbdcc13b95668_r.jpg" alt="" loading="lazy"></p><p>\u5982\u679C Page Source \u663E\u793A\u4E3A\u4E71\u7801\uFF0CEncoding \u53EF\u8BBE\u4E3A <strong>UTF-8</strong> \u3002</p><h2 id="_3-\u5B9A\u5236-rss-\u6293\u53D6\u89C4\u5219" tabindex="-1"><a class="header-anchor" href="#_3-\u5B9A\u5236-rss-\u6293\u53D6\u89C4\u5219" aria-hidden="true">#</a> 3. \u5B9A\u5236 RSS \u6293\u53D6\u89C4\u5219</h2><p>Global Search Pattern \u662F\u9009\u62E9\u4F60\u8981\u641C\u7D22\u7684\u8303\u56F4\u3002\u53EF\u4EE5\u4E0D\u586B\uFF0C\u8FD9\u6837\u4F1A\u641C\u7D22\u6574\u4E2A\u9875\u9762\uFF0C\u4E00\u822C\u65B0\u624B\u90FD\u9009\u62E9\u6574\u4E2A\u9875\u9762\uFF0C\u5373\u7A7A\u767D\u3002Item (repeatable) Search Pattern \u8FD9\u90E8\u5206\u6700\u91CD\u8981\uFF0C\u662F\u6211\u4EEC\u8981\u6293\u53D6\u7684\u5185\u5BB9\u3002</p><p><img src="https://pic1.zhimg.com/v2-b1fa90c59739bddc0c27134cd36ba6bc_r.jpg" alt="" loading="lazy"></p><p>\u4ED4\u7EC6\u67E5\u770B Step1 \u4E2D\u7684\u6E90\u4EE3\u7801\uFF0C\u627E\u5230\u533A\u9700\u8981\u6293\u53D6\u7684\u90E8\u5206\uFF0C\u8F93\u5165\u5230 Item (repeatable) Search Pattern\u3002</p><p>\u6D4B\u8BD5\u7F51\u5740\uFF1A<code>http://news.163.com/special/0001386F/rank_whole.html</code>\u3002</p><p>\u9700\u8981\u6293\u53D6\u7684\u6E90\u4EE3\u7801\uFF1A</p><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>tr</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>td</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>red<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span><span class="token punctuation">&gt;</span></span>2<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span>
    <span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>\u66F4\u65F6\u5C1A\u66F4\u8FD0\u52A8 \u8F66\u5C55\u5B9E\u62CD\u89E3\u6790\u7EA2\u65D7 H5<span class="token punctuation">&quot;</span></span>
      <span class="token punctuation">&gt;</span></span>\u66F4\u65F6\u5C1A\u66F4\u8FD0\u52A8 \u8F66\u5C55\u5B9E\u62CD\u89E3\u6790\u7EA2\u65D7 H5<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span>
    <span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>td</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>td</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>cBlue<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>11211615<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>td</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>tr</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="https://pic2.zhimg.com/v2-cf6dbf2c09189f7517ec63abdc80c50d_r.jpg" alt="" loading="lazy"></p><p><strong>\u6293\u53D6\u89C4\u5219</strong>\uFF1A</p><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>tr</span><span class="token punctuation">&gt;</span></span>
  {*}
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>td</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>{*}<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span><span class="token punctuation">&gt;</span></span>{*}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>{%}<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>{%}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>td</span><span class="token punctuation">&gt;</span></span>
  {*}
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>td</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>cBlue<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>{*}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>td</span><span class="token punctuation">&gt;</span></span>
  {*}
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>tr</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u70B9\u51FB Extract\uFF0C\u8FDB\u884C\u6293\u53D6\u3002</p><p><img src="https://pic4.zhimg.com/v2-e9486741a6229ab258a95147f584571b_r.jpg" alt="" loading="lazy"></p><h2 id="_4-\u6574\u7406-rss-\u8F93\u5165\u683C\u5F0F" tabindex="-1"><a class="header-anchor" href="#_4-\u6574\u7406-rss-\u8F93\u5165\u683C\u5F0F" aria-hidden="true">#</a> 4. \u6574\u7406 rss \u8F93\u5165\u683C\u5F0F</h2><p>Define output format\uFF0C\u4E00\u822C\u60C5\u51B5\u4E0B\u524D\u9762\u4E09\u4E2A\u4F1A\u5DF2\u7ECF\u5199\u597D\uFF0C\u540E\u4E09\u4E2A\u5C31\u5C06\u524D\u9762\u5F97\u51FA\u7684 item \u91CC\u9762\u7684\u5143\u7D20\u586B\u5165\u5373\u53EF\uFF0C\u6211\u8FD9\u91CC{%1}\u5BF9\u5E94\u7684\u662F\u94FE\u63A5\u6240\u4EE5\u586B\u5165 Link\uFF0C{%2}\u5BF9\u4E8E\u6807\u9898\u5C31\u586B\u5165 Title\u3002</p><p><img src="https://pic1.zhimg.com/v2-b4614f5c46090f2eb762aac87d604350_r.jpg" alt="" loading="lazy"></p><p>\u7136\u540E\u70B9\u51FB preview\uFF0C\u5B8C\u6210\u5236\u4F5C\uFF0C\u540C\u65F6\u51FA\u73B0\u9884\u89C8\u3002</p><p><img src="https://pic2.zhimg.com/v2-498bf1f1c0b14da172498b58f59e39b9_r.jpg" alt="" loading="lazy"></p><p>\u5982\u679C\u6CE8\u518C\u4E86 FEED43 \u7684\u8D26\u53F7\uFF0C\u53EF\u4EE5\u4FEE\u6539 rss \u5730\u5740\uFF0C\u4F46\u4E0D\u80FD\u6539\u4E3A\u4E2D\u6587\uFF0C\u5426\u5219\u4F1A rss \u51FA\u9519\u3002</p><h2 id="_5-\u83B7\u53D6-rss-\u5730\u5740" tabindex="-1"><a class="header-anchor" href="#_5-\u83B7\u53D6-rss-\u5730\u5740" aria-hidden="true">#</a> 5. \u83B7\u53D6 RSS \u5730\u5740</h2>`,24),m=s("\u70B9\u51FB Feed URL \u53EF\u5F97 rss \u5730\u5740\uFF0C\u6211\u8FD9\u91CC\u662F "),f={href:"https://www.feed43.com/dianji.xml",target:"_blank",rel:"noopener noreferrer"},b=s("https://www.feed43.com/dianji.xml"),v=n("p",null,[n("img",{src:"https://pic1.zhimg.com/v2-f3b00e876d8df136f7d354b4fc22f900_r.jpg",alt:"",loading:"lazy"})],-1),S=n("p",null,"\u5728 RSS reader \u4E2D\u5C55\u793A\u4E3A",-1),x=n("p",null,[n("img",{src:"https://pic4.zhimg.com/v2-6d8f503ff3da16eb985ca1d3ae2de98f_r.jpg",alt:"",loading:"lazy"})],-1),w=n("h2",{id:"_6-\u5168\u6587\u6293\u53D6",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_6-\u5168\u6587\u6293\u53D6","aria-hidden":"true"},"#"),s(" 6. \u5168\u6587\u6293\u53D6")],-1),R=n("p",null,[s("feed43 \u5BFC\u51FA\u7684\u6761\u76EE\u5FC5\u987B\u70B9\u51FB\u94FE\u63A5\u624D\u80FD\u770B\u5230\u5185\u5BB9\u3002\u5728 rss \u5C55\u793A\u5168\u6587\uFF0C\u9700\u8981\u901A\u8FC7 FeedEx \u518D\u8F6C\u4E00\u6B21\u3002\u6CE8\u610F\uFF1Afeed43 \u514D\u8D39\u7528\u6237\u8FC7\u591A\uFF0C"),n("strong",null,"\u9700\u5728\u6D4F\u89C8\u5668\u4E2D\u6253\u5F00\u4E00\u6B21\u624D\u80FD\u5F97\u5230\u771F\u5B9E\u94FE\u63A5"),s(" (\u4E00\u822C\u4E3A "),n("code",null,"http://node2.feed43.com"),s(")\uFF0CFeedEx \u9700\u4F7F\u7528\u771F\u5B9E\u94FE\u63A5\uFF0C\u4E00\u822C 3 \u5206\u949F\u5185\u8F6C\u6362\u597D\u3002")],-1),z=s("FeedEx\uFF1A"),E={href:"https://feedex.net/",target:"_blank",rel:"noopener noreferrer"},q=s("https://feedex.net/"),F=n("p",null,[n("img",{src:"https://pic4.zhimg.com/v2-8e3701adffa1d6fb4ea10dda2704988b_r.jpg",alt:"",loading:"lazy"})],-1),y=n("p",null,"feeds43 \u514D\u8D39\u7248\u6BCF 6 \u5C0F\u65F6\u6293\u53D6\u4E00\u6B21\uFF0C\u663E\u793A\u6700\u65B0\u7684 20 \u6761\u5185\u5BB9\u3002",-1),j=n("p",null,"\u5982\u679C\u7F51\u9875\u6E90\u66F4\u65B0\u8F83\u9891\u7E41\u7684\u8BDD\uFF0C\u53EF\u4F7F\u7528 RSSHub \u548C Huginn\u3002",-1),H=n("h2",{id:"rss-\u5408\u96C6",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#rss-\u5408\u96C6","aria-hidden":"true"},"#"),s(" RSS \u5408\u96C6")],-1),D=n("p",null,"\u6C47\u603B\u7684 RSS \u6C38\u4E45\u8BA2\u9605 feeds\uFF0C\u5747\u901A\u8FC7 RSSHub \u548C Huginn \u5236\u4F5C\u3002\u5982\u679C\u6709\u5174\u8DA3\u81EA\u5236 RSS\uFF0C\u53EF\u53C2\u8003\u4EE5\u4E0B\u6559\u7A0B\u3002",-1),T={href:"https://newzone.top/_posts/2017-04-22-rss_feed43_feedex.html",target:"_blank",rel:"noopener noreferrer"},B=s("RSS \u5165\u95E8\u7BC7\uFF1AFEED43&FeedEx-\u4E3A\u9759\u6001\u7F51\u9875\u5B9A\u5236 RSS \u6E90"),I={href:"https://newzone.top/_posts/2018-10-07-huginn_scraping_any_website.html",target:"_blank",rel:"noopener noreferrer"},L=s("RSS \u8FDB\u9636\u7BC7\uFF1AHuginn - \u771F\xB7\u4E3A\u4EFB\u610F\u7F51\u9875\u5B9A\u5236 RSS \u6E90\uFF08PhantomJs \u6293\u53D6\uFF09"),N={href:"https://newzone.top/_posts/2019-04-01-rsshub_noob.html",target:"_blank",rel:"noopener noreferrer"},P=s("RSS \u901F\u6210\u7BC7\uFF1ARSSHub \u6361\u73B0\u6210\u7684\u8F6E\u5B50"),V={href:"https://newzone.top/_posts/2020-03-25-rsshub_on_vps.html",target:"_blank",rel:"noopener noreferrer"},U=s("RSS \u901F\u6210\u7BC7 2\uFF1ARSSHub \u81EA\u90E8\u7F72"),C={href:"https://newzone.top/_posts/2021-10-23-nas_with_rsshub_and_huginn.html",target:"_blank",rel:"noopener noreferrer"},A=s("RSS \u5B8C\u7ED3\u7BC7\uFF1A\u8282\u7701\u5343\u5143\u670D\u52A1\u8D39\uFF0CRSSHub\u3001Huginn \u8F6C\u79FB NAS"),G={href:"https://newzone.top/_posts/2022-03-17-rss_persistent_link_collection.html",target:"_blank",rel:"noopener noreferrer"},J=s("RSS \u6C47\u603B\u7BC7\uFF1ARSS \u6C38\u4E45\u94FE\u63A5\u5408\u96C6\uFF0C\u62D2\u7EDD RSS \u5931\u6548"),K=n("p",null,[n("strong",null,"\u53C2\u8003\u8D44\u6599"),s("\uFF1A")],-1),M={href:"http://www.appinn.com/feed43/",target:"_blank",rel:"noopener noreferrer"},O=s("FEED43 \u2013 \u4E3A\u6CA1\u6709 Feed \u7684\u7F51\u9875\u751F\u6210 RSS \u683C\u5F0F\u8BA2\u9605\u6E90 [\u6559\u7A0B]"),Q={href:"https://www.douban.com/note/199431341/",target:"_blank",rel:"noopener noreferrer"},W=s("\u559C\u6B22\u7684\u7F51\u7AD9\uFF0C\u6CA1\u6709 rss \u600E\u4E48\u529E\uFF0C\u81EA\u5DF1\u505A\uFF01\uFF01\u7528 FEED43 \u81EA\u5DF1\u70E7\u5236\u559C\u6B22\u7F51\u9875 rss \u6559\u7A0B -- \u5C0F\u4F51 (\u5176\u5B9E\u5185\u9644\u53CC\u6559\u7A0B)");function X(Y,Z){const a=c("ExternalLinkIcon");return p(),o("div",null,[r,u,d,n("p",null,[n("a",h,[_,t(a)]),g]),k,n("p",null,[m,n("a",f,[b,t(a)])]),v,S,x,w,R,n("p",null,[z,n("a",E,[q,t(a)])]),F,y,j,H,D,n("ul",null,[n("li",null,[n("p",null,[n("a",T,[B,t(a)])])]),n("li",null,[n("p",null,[n("a",I,[L,t(a)])])]),n("li",null,[n("p",null,[n("a",N,[P,t(a)])])]),n("li",null,[n("p",null,[n("a",V,[U,t(a)])])]),n("li",null,[n("p",null,[n("a",C,[A,t(a)])])]),n("li",null,[n("p",null,[n("a",G,[J,t(a)])])])]),K,n("ul",null,[n("li",null,[n("p",null,[n("a",M,[O,t(a)])])]),n("li",null,[n("p",null,[n("a",Q,[W,t(a)])])])])])}var sn=e(i,[["render",X],["__file","2017-04-22-rss_feed43_feedex.html.vue"]]);export{sn as default};
