<template>
    <div class="fillcontain" ref="fillcontain">
        <div class="info_container" ref="info_container">
            <h1>民主测评评分表</h1>
            <el-card class="box-card" style="width: 860px;margin: 5px auto;">
            <div style="width: 860px;height: 20px;margin: 0 auto">
                <span style="float: left">部门:<el-input v-model="bumen" placeholder="请输入部门" clearable style="width: 200px;"></el-input></span>
                <span style="float:left;padding-left: 350px;" >
                    <div class="block">
                    <span class="demonstration">时间:</span>
                    <el-date-picker
                            v-model="create_time"
                            type="date"
                            style="width: 200px; "
                            placeholder="选择日期">
                    </el-date-picker>
                    </div>
                </span>
            </div>
            </el-card>
            <el-card class="box-card" style="width: 860px;margin: 5px auto;"><img style="width: 800px;height: 150px;padding-top: 10px;" :src="muban1_Img" /></el-card>
            <el-card class="box-card" v-for="i in input_num" style="width: 860px;min-height: 60px;margin: 2px auto;">
                <el-input v-model="bumen" placeholder="请输入被测评人姓名" size="large" clearable style="width: 300px;padding-left:10px;float:left;" ></el-input>
            </el-card>
            <div style="text-align: right;width:80%;margin-left: 10%;margin-top: 10px;">
                <el-tooltip class="item" effect="light" content="添加新组件" placement="top">
                    <el-button type="text" @click="adddiv" style="font-size: 30px;"><i class="el-icon-circle-plus"></i>
                    </el-button>
                </el-tooltip>

                <el-tooltip class="item" effect="light" content="删除组件" placement="top">
                    <el-button type="text" @click="delectdiv" style="font-size: 30px;"><i class="el-icon-remove"></i>
                    </el-button>
                </el-tooltip>
            </div>
            <div style="text-align: center;padding-bottom: 20px;">
                <el-button type="primary" @click="">预览发布</el-button>
            </div>
        </div>
    </div>
</template>

<script>
    import muban1_Img from "@/assets/img/muban_1.png"
    export default {
        name: "mubanShow7",
        data(){
            return{
                muban1_Img:muban1_Img,
                bumen:'',
                create_time:'',
                input_num:1,

            }
        },
        methods:{
            adddiv(){
                this.input_num+=1;
            },
            delectdiv(){
                this.input_num-=1;
            }

        }
    }
</script>

<style scoped>
    .info_container{
        padding: 20px;
        background: #fff;
        box-sizing: border-box;
        overflow: auto;
        width: 1100px;
        margin: 0 auto;
        text-align: center;
    }

</style>
