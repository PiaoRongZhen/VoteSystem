<template>
    <div class="fillcontain" ref="fillcontain">
        <div class="info_container" ref="info_container">
            <h1>{{this.title[this.type-1]}}</h1>
            <el-card v-if="note" class="box-card " style="width: 960px;margin: 5px auto;font-size: 15px;color:gray " >
                {{this.note}}
            </el-card>
            <el-card class="box-card" style="width: 960px;margin: 5px auto;">
                <div style="width: 960px;height: 20px;margin: 0 auto">
                    <span style="float: left">部门:{{this.department}}</span>
                    <span style="float:right;padding-right: 30px;" >
                    <div class="block">
                    <span class="demonstration">时间:</span>
                    {{this.date}}
                    </div>
                </span>
                </div>
            </el-card>
            <el-card class="box-card" style="width: 960px;margin: 5px auto;"><img style="width: 900px;height: 150px;padding-top: 10px;" :src="muban_Img[type-1]" /></el-card>

            <el-card v-if="type===1" class="box-card" v-for="(o,i) in namelist" style="width: 960px;min-height: 60px;margin: 2px auto;">
                <div  style="float:left; width:300px;">{{o.name}}</div>
                <div style="float:left; width:500px;">
                    <el-input-number size="medium" :min="0" :max="20" v-model="num1[i]"></el-input-number>
                </div>
            </el-card>

            <el-card v-if="type===3" class="box-card" v-for="(o,i) in namelist" style="width: 960px;min-height: 60px;margin: 2px auto;">
                <div  style="float:left; width:500px;padding-left: 15px;">
                    <div style="float:left; width: 50px;" >{{o.xuhao}}</div>
                    <div style="float:left; width: 90px;">{{o.bumen}}</div>
                    <div style="float:left; width: 100px;">{{o.name}}</div>
                    <div style="float:left; width: 120px;">{{o.now_ji}}</div>
                    <div style="float:left; width: 120px;">{{o.next_ji}}</div>
                </div>
                <div style="float:left; width:280px;">
                    <el-radio-group v-model="radio1[i-1]" size="small">
                        <el-radio-button label="优秀"></el-radio-button>
                        <el-radio-button label="良好"></el-radio-button>
                        <el-radio-button label="一般"></el-radio-button>
                        <el-radio-button label="差"></el-radio-button>
                    </el-radio-group>

                </div>
                <div style="float: left;width: 120px;">
                    <el-radio-group v-model="radio2[i-1]" size="small">
                        <el-radio-button label="是"></el-radio-button>
                        <el-radio-button label="否"></el-radio-button>
                    </el-radio-group>
                </div>
            </el-card>

            <el-card v-if="type===4||type===2" class="box-card" v-for="(o,i) in namelist" style="width: 960px;min-height: 60px;margin: 2px auto;">
                <div  style="float:left; width:70px;">
                    {{o.name}}
                </div>
                <div style="float:left;">
                    <el-radio-group v-model="de[i-1]"  size="mini">
                        <el-radio-button label="好"></el-radio-button>
                        <el-radio-button label="较好"></el-radio-button>
                        <el-radio-button label="一般"></el-radio-button>
                        <el-radio-button label="较差"></el-radio-button>
                    </el-radio-group>|
                </div>
                <div style="float:left;">
                    <el-radio-group v-model="neng[i-1]"  size="mini">
                        <el-radio-button label="好"></el-radio-button>
                        <el-radio-button label="较好"></el-radio-button>
                        <el-radio-button label="一般"></el-radio-button>
                        <el-radio-button label="较差"></el-radio-button>
                    </el-radio-group>|
                </div>
                <div style="float:left;">
                    <el-radio-group v-model="qin[i-1]"  size="mini">
                        <el-radio-button label="好"></el-radio-button>
                        <el-radio-button label="较好"></el-radio-button>
                        <el-radio-button label="一般"></el-radio-button>
                        <el-radio-button label="较差"></el-radio-button>
                    </el-radio-group>|
                </div>
                <div style="float:left;">
                    <el-radio-group v-model="ji[i-1]"  size="mini">
                        <el-radio-button label="好"></el-radio-button>
                        <el-radio-button label="较好"></el-radio-button>
                        <el-radio-button label="一般"></el-radio-button>
                        <el-radio-button label="较差"></el-radio-button>
                    </el-radio-group>|
                </div>
                <div style="float:left;">
                    <el-radio-group v-model="lian[i-1]"  size="mini">
                        <el-radio-button label="好"></el-radio-button>
                        <el-radio-button label="较好"></el-radio-button>
                        <el-radio-button label="一般"></el-radio-button>
                        <el-radio-button label="较差"></el-radio-button>
                    </el-radio-group>|
                </div>
                <div style="float:left;">
                    <el-radio-group v-model="zong[i-1]"  size="mini">
                        <el-radio-button label="优秀"></el-radio-button>
                        <el-radio-button label="称职"></el-radio-button>
                        <el-radio-button label="基本称职"></el-radio-button>
                        <el-radio-button label="不称职"></el-radio-button>
                    </el-radio-group>
                </div>
            </el-card>
            <el-card v-if="type===5||type===6" class="box-card" v-for="(o,i) in namelist" style="width: 960px;min-height: 60px;margin: 2px auto;">
                <div  style="float:left; width:300px;">{{o.name}}</div>
                <div style="float:left; width:500px;">
                    <el-input-number size="medium" :min="0" :max="30" v-model="num1[i]"></el-input-number>
                </div>
            </el-card>


            <div style="text-align: center;padding-top: 20px;">
                <el-button type="primary" @click="publish()">确认提交</el-button>
            </div>


        </div>
    </div>
</template>

<script>
    import muban1_Img from "@/assets/img/muban_1.png"
    import muban2_Img from "@/assets/img/muban_2.png"
    import muban3_Img from "@/assets/img/muban_3.png"
    import muban4_Img from "@/assets/img/muban_4.png"
    import muban5_Img from "@/assets/img/muban_5.png"
    import muban6_Img from "@/assets/img/muban_6.png"
    export default {
        name: "TouPiao",
        data(){
            return{
                // ceping_type:'',
                type:null,//测评票类别
                title:["民主测评评分表","选调生基层锻炼期满考核测评票（勾选）","拟晋升职级人选部门民主测评票（勾选）","中层领导干部考核民主测评表",
                    "派遣人员考核民主测评票","法官助理、书记员工作完成情况综合评价表",""],
                muban_Img:[muban1_Img,muban2_Img,muban3_Img,muban4_Img,muban5_Img,muban6_Img,''],
                note:'',//备注说明
                department:'',
                date:'',
                namelist:[],//姓名列表

                num1:[],//保存评分的列表
                radio1:[],
                radio2:[],
                de:[],//德
                neng:[],
                qin:[],
                ji:[],
                lian:[],
                zong:[],

            }
        },
        mounted() {
            //下面内容进行测试
            this.type = this.$route.query.type
            if(this.type==1){
                this.note = "坚持公平公正的原则，为每个人打分"
                this.department ="秘书处";
                this.date = "2019年10月05日";
                this.namelist = [{"name":"张三"},{"name":"李四"},{"name":"王五"}];
            }
            if(this.type==2){
                this.note = "坚持公平公正的原则，投上您珍贵的一票"
                this.department ="信息部";
                this.date = "2019年10月28日";
                this.namelist = [{"name":"朴荣振"},{"name":"武剑"},{"name":"张耀威"},{"name":"李白"}];
            }
            if(this.type==3){
                this.note = "坚持公平公正的原则，为每个人打分"
                this.department ="信息部";
                this.date = "2019年10月28日";
                this.namelist =[{"xuhao":"1","bumen":"保卫处","name":"李白","now_ji":"小保安","next_ji":"大保安"},{"xuhao":"2","bumen":"秘书处","name":"张三","now_ji":"小秘书","next_ji":"大秘书"},{"xuhao":"3","bumen":"民事庭","name":"李四","now_ji":"小法官","next_ji":"大法官"}];
            }




        },
        methods:{
            toback(){
                this.$router.push({path:'/mubanManage/mubanShow/mubanShow'+this.type,query:{}})
            },
            publish(){

            }

        }
    }
</script>

<style>
    .info_container{
        padding: 20px;
        background: #fff;
        box-sizing: border-box;
        overflow: auto;
        width: 1100px;
        margin: 0 auto;
        text-align: center;
    }
    .el-radio-button--mini .el-radio-button__inner {
        padding: 8px 5px;
        font-size: 10px;
        border-radius: 0;
    }
</style>
