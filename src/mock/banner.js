import Mock from "mockjs";
Mock.mock("/api/banner", "get", {
    code: 0,
    msg: "",
    data: [{
            id: "1",
            midImg: "https://img0.baidu.com/it/u=3436577675,4161284916&fm=253&fmt=auto&app=138&f=JPEG?w=888&h=500",
            bigImg: "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fc-ssl.duitang.com%2Fuploads%2Fitem%2F202004%2F10%2F20200410100458_r5uWy.thumb.1000_0.jpeg&refer=http%3A%2F%2Fc-ssl.duitang.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1652776300&t=0d13cf482148a461dc7fb67fe34c811e",
            title: "森林晨光",
            description: "欲觉闻晨钟令人发深省",
        },
        {
            id: "2",
            midImg: "https://img1.baidu.com/it/u=3625448816,562508534&fm=253&fmt=auto&app=138&f=JPEG?w=822&h=500",
            bigImg: "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fc-ssl.duitang.com%2Fuploads%2Fitem%2F201706%2F30%2F20170630154745_zyNGR.thumb.1000_0.jpeg&refer=http%3A%2F%2Fc-ssl.duitang.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1652776385&t=519a759ff999ecd2883d272fb13b64b5",
            title: "蓝天，草原",
            description: "一碧无垠骏马翔，少年鞭响牧歌扬",
        },
        {
            id: "3",
            midImg: "https://img2.baidu.com/it/u=897887763,3189569436&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=313",
            bigImg: "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fwww.2008php.com%2F2017_Website_appreciate%2F2017-08-21%2F20170821010831uXUDpuXUDp.jpg&refer=http%3A%2F%2Fwww.2008php.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1652775571&t=a0e1c12d8fe91d8b8aa68056d55f8b9c",
            title: "天边的晚霞",
            description: "晚霞半天幕， 绝美一瞬无; 问心所探悟， 因果朝夕路",
        },
    ]
})