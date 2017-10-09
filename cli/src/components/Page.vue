<template>
  <div>
    <!--对应序号课程的所有视频数据-->
    <!--视频-->
    <video :src="OneVideos.path" controls="controls" :poster="lessons.preview" autoplay="autoplay"></video>
    <!--视频结束-->

    <!--对应序号的标签数据-->
    <h1>{{lessons.title}}</h1>

    <!--对应序号课程的视频数据-->
    <ul id="list">
      <li v-for="v in videos" key="v.id">
        <a href="" @click.prevent="play(v)">{{v.title}}</a>
      </li>
    </ul>


    <!--返回按钮-->
    <a href="" class="iconfont back" @click.prevent="back()">&#xe612;</a>

  </div>
</template>

<script>
    import Vue from 'vue'
    import axios from 'axios'
    import VueAxios from 'vue-axios'

    Vue.use(VueAxios, axios)

export default {
  name: 'page',
  data () {
    return {
        //当前所有视频数据
      videos:[],
        //当前第一条视频
      OneVideos:{},
        //当前课程
      lessons:{},
    }
  },
    mounted() {
        this.getIdVideos();
        this.getIdTLessons();
    },
    methods: {
      //获得所有视频数据
        getIdVideos() {
            var dd = this.$route.params.id;
            var api = 'http://video.huangbaovip.com/api/getIdVideos/'+dd;
            Vue.axios.get(api).then((response) => {
//                console.log(response.data);
                this.videos = response.data;
                this.OneVideos =response.data[0];
            })
        },
        //获得对应id课程数据
        getIdTLessons() {
            var dd = this.$route.params.id;
            var api = 'http://video.huangbaovip.com/api/getIdLessons/'+dd;
            Vue.axios.get(api).then((response) => {
//                console.log(response.data);
                this.lessons = response.data;
            })
        },
        play(video){
            this.OneVideos= video;
        },
        back(){
            this.$router.back();
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  * {
    padding: 0;
    margin: 0;
    color: #31343B;
  }

  a {
    text-decoration: none;
    color: #31343B;
  }

  li {
    list-style: none;
  }

  body {
    font-family: Helvetica Neue, Helvetica, Arial, sans-serif;
    /*padding-bottom: 15%;*/
  }


  /*底部固定导航*/
  #bottom {
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    display: flex;
    background: #FFFFFF;
    margin: 0;
  }

  #bottom li {
    width: 50%;
    box-sizing: border-box;
  }

  #bottom li i.iconfont {
    color: #888;
    font-size: 6vw;
    display: block;
    text-align: center;
  }

  #bottom li span {
    font-size: 2.6vw;
    display: block;
    text-align: center;
    color: #888;
  }

  #bottom li.cur {
    /*background: #333;*/
  }

  #bottom li.cur i.iconfont {
    color: #333;
  }

  #bottom li.cur span {
    color: #333;
  }
  /*底部固定导航结束*/


  video{
    width: 100%;

  }
  h1{
    font-size: 4.5vw;
    line-height: 2em;
    color: #31343B;
    text-indent: 2em;
    margin: 0;
    font-weight: 700;
  }
  #list{
    /*width: 92%;*/
    /*margin: 0 auto;*/
    border-top: #EFEFF4 5px solid;
    padding-top: 2%;
  }
  #list li a{
    font-size: 3.8vw;
    color: #666;
    line-height: 2.8em;
    display: block;
    margin-left: 6%;
    border-left: 1px dotted #999;
    text-indent: 1em;
    position: relative;
  }
  #list li a:before{
    content: '';
    width: 10px;
    height: 10px;
    background: #ccc;
    position: absolute;
    left: -6px;
    top: 50%;
    transform: translateY(-50%);
    border-radius: 50%;


  }
  #list li.cur a{
    color: #333;
    font-weight: 700;

  }

  a.iconfont.back{
    font-size: 9vw;
    /*color: #888;*/
    color: deepskyblue;
    position: fixed;
    right: 6%;
    bottom: 3%;
  }

</style>
