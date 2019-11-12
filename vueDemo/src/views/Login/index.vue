<template>
  <div class="app-page">
    <particles></particles>
    <index-bg></index-bg>
    <div class="container-fluid">
      <div class="row text-container ">
        <div class="tm-content col-md-6 col-sm-8 col-xs-12 ml-auto section">
          <div class="content-box">
            <header class="mb-5"><h1>网管告警系统</h1></header>
            <div class="subscribe-form">
              <div class="row form-section">
                <div class="col-sm-8 col-xs-10">
                  <input type="text" class="form-control" v-model="userName" placeholder="用户名"/> <br/>
                  <input type="text" class="form-control" v-model="passWord" placeholder="密码"><br/>
                  <button class="tm-btn-subscribe" v-on:click="login" style="width:100%;">登陆 </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <foot />
    </div>
  </div>
</template>

<script>
import indexBg from './backGround'
import particles from './particles'
import foot from './footer'

export default {
  name: 'Login',
  components: {
    indexBg,
    particles,
    foot
  },
  data () {
    return {
      userName: '',
      passWord: ''
    }
  },
  methods: {
    login: function () {
      var _this = this
      console.log(_this.username + _this.password)
      _this.$router.push(
        {path: '/resourceManagement'})
    }
  }
}
</script>

<style lang="scss">
  .app-page {
    width: 100%;
    height: 100%;
    overflow: hidden;
    .dropdown {
      position: fixed;
      z-index: 9999888;
      top: 20px;
      right: 20px;
      color: #fff;
      span {
        padding-right: 15px;
        font-size: 2rem;
        &:after {
          padding-left: 10px;
          content: "▽";
        }
      }
      ul {
        padding: 5px 0;
        margin: 5px 0;
        border: 1px solid #ebeef5;
        border-radius: 4px;
        box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
        li {
          font-size: 1.5rem;
          text-align: center;
          &:hover {
            background: rgba(175, 238, 238, 0.2);
            cursor: pointer;
          }
        }
      }
    }
    .text-container {
      height: 90vh;
      display: flex;
      align-items: center;
      .tm-content {
        z-index: 1001;
        &.ml-auto {
          margin-left: auto !important;
          padding-bottom: 20px;
        }
        .content-box {
          padding: 15px;
          .subscribe-form {
            .form-section {
              color: #ffffff;
              background-color: transparent;
            }
          }

          .mb-5 {
            margin-bottom: 3rem !important;
            color: #ffffff;
            font-size: large;
            h1 {
              color: #ffffff;
              font-size: 4rem;
            }
          }
          .subscribe-form {
            .form-section {
              color: #ffffff;
              background-color: transparent;
              .form-control {
                height: 50px;
                color: #ffffff;
                border-radius: 0.5rem;
                background-color: transparent;
                border: 1px solid #ffffff;
                padding-top: 10px;
                padding-bottom: 10px;
                font-size: 1.5rem;
                font-weight: 300;
                padding: 0.75rem 1.2rem;
                overflow: hidden;
                white-space: nowrap;
                text-overflow: ellipsis;
                &::-webkit-input-placeholder {
                  color: #ffffff;
                  font-size: 1.5rem;
                }
              }
              .tm-btn-subscribe {
                height: 50px;
                background-color: #006699;
                border-radius: 0.5rem;
                border-color: white;
                padding: 0.75rem 1.6rem;
                font-weight: 300;
                font-size: 1.5rem;
                cursor: pointer;
                @media screen and (max-width: 768px) {
                  margin-top: 20px;
                }
              }
              .help-box {
                padding: 10px 0 20px 10px;
                color: #843534;
                font-size: 1.5rem;
                strong {
                  position: absolute;
                  background: #fff;
                  border-radius: 5px;
                  padding: 0 8px 0 8px;
                  font-size: 1.5rem;
                  line-height: 3rem;

                  &:before {
                    z-index: 999;
                    content: "";
                    display: block;
                    position: relative;
                    width: 0;
                    height: 0;
                    border-left: 10px solid transparent;
                    border-right: 10px solid transparent;
                    border-bottom: 10px solid #fff;
                    margin: -9px 0 0 20px;
                  }
                  a {
                    color: #bd2c00;
                  }
                }
                p {
                  color: #fff;
                  button {
                    background: none;
                    color: #e6e6fa;
                    cursor: pointer;
                    border-bottom: 1px solid #e6e6fa;
                  }
                }
              }
            }
          }
        }
      }
    }
  }
</style>
