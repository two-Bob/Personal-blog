<template>
  <ul class="contact-container">
    <li>
      <a href="https://gitee.com/twoBob" title="前往gitee个人主页" target="_blank">
        <div class="icon">
          <Icon type="github" />
        </div>
        <span>twoBob</span>
      </a>
    </li>
    <li>
      <a href="mailto:zeroTwobob8@gmail.com" title="点击发送邮件">
        <div class="icon">
          <Icon type="mail" />
        </div>
        <span>wmbbll@163.com</span>
      </a>
    </li>
    <li>
      <a
        href="tencent://message/?Menu=yes&uin=1758138054&Service=300&sigT=45a1e5847943b64c6ff3990f8a9e644d2b31356cb0b4ac6b24663a3c8dd0f8aa12a595b1714f9d45" title="点击发送信息"
      >
        <div class="icon">
          <Icon type="qq" />
        </div>
        <span>1758138054</span>
      </a>
      
    </li>
    <li>
      <a>
        <div class="icon weixin">
          <Icon type="weixin" />
        </div>
        <span>two-Bob</span>
      </a>
      <div class="pop">
        <img
          src="http://r.photo.store.qq.com/psc?/V14KUL8R4TRssk/45NBuzDIW489QBoVep5mccA3GBsXlqRPgLsZR*RiX79jlttTtqioeO23YZC1Ay9bhW0NTy7K6vwQRgj4P2VqSyV1mpYPz1D.swhtuHZsB1Q!/r"
          alt=""
        />
      </div>
    </li>
  </ul>
</template>

<script>
import Icon from "@/components/Icon";
export default {
  components: {
    Icon,
  },
};
</script>

<style scoped lang="less">
@import "~@/styles/var.less";
.contact-container {
  list-style: none;
  padding: 20px;
  margin: 0;
  color: @gray;
  @itemHeight: 30px;
  li {
    height: @itemHeight;
    line-height: 30px;
    margin: 14px 0;
    position: relative;
    &:hover {
      .pop {
        transform: scaleY(1);
      }
    }
  }
  a {
    cursor: pointer;
    display: flex;
    align-items: center;
    font-size: 14px;
  }
  .icon {
    font-size: 26px;
    width: 36px;
    &.weixin {
      font-size: 32px;
      text-indent: -3px;
    }
  }
  .pop {
    position: absolute;
    left: 0;
    bottom: @itemHeight + 5px;
    padding: 10px 15px;
    background: #fff;
    border-radius: 5px;
    transform: scaleY(0);
    transform-origin: center bottom;
    transition: 0.3s;
    img {
      width: 150px;
      height: 150px;
    }
    &::after {
      content: "";
      position: absolute;
      left: 50%;
      transform: translateX(-50%) rotate(45deg);
      width: 8px;
      height: 8px;
      background: #fff;
      bottom: -4px;
    }
  }
}
</style>
