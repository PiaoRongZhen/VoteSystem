<template>
    <div class="fillcontain" ref="fillcontain">
        <div class="info_container" ref="info_container">
            <h1>拟晋升职级人选部门民主测评票（勾选）</h1>
            <el-card class="box-card" style="width: 960px;margin: 5px auto;">
                <el-input class="textarea"
                          type="textarea"
                          :rows="2"
                          placeholder="请输入说明或备注"
                          v-model="note"
                          style="width: 100%;font-size: 16px;margin-top: 10px;">
                </el-input>
            </el-card>
            <el-card class="box-card" style="width: 960px;margin: 5px auto;">
                <div style="width: 960px;height: 20px;margin: 0 auto">
                    <span style="float: left">部门:<el-input v-model="department" placeholder="请输入部门" clearable style="width: 200px;"></el-input></span>
                    <span style="float:left;padding-left: 450px;">
                    <div class="block">
                    <span class="demonstration">时间:</span>
                    <el-date-picker
                            v-model="date"
                            type="date"
                            style="width: 200px; "
                            placeholder="选择日期"
                            format="yyyy-MM-dd"
                            value-format="yyyy年MM月dd日">
                    </el-date-picker>
                    </div>
                </span>
                </div>
            </el-card>
            <el-card class="box-card" style="width: 960px;margin: 1px auto;"><img style="width: 900px;height: 150px;padding-top: 10px;" :src="muban3_Img" /></el-card>
            <el-card class="box-card" v-for="i in input_num" style="width: 960px;min-height: 60px;margin: 0px auto;">
                <el-input
                        v-model="namelist[i-1].xuhao"
                        placeholder="序号"
                        clearable
                        style="width: 100px;padding-left:10px;float:left;" >
                </el-input>
                <el-input
                        v-model="namelist[i-1].bumen"
                        placeholder="部门"
                        clearable
                        style="width: 150px;padding-left:10px;float:left;" >
                </el-input>
                <el-input
                        v-model="namelist[i-1].name"
                        placeholder="姓名"
                        clearable
                        style="width: 150px;padding-left:10px;float:left;" >
                </el-input>
                <el-input
                        v-model="namelist[i-1].now_ji"
                        placeholder="现职级"
                        clearable
                        style="width: 200px;padding-left:10px;float:left;" >
                </el-input>
                <el-input
                        v-model="namelist[i-1].next_ji"
                        placeholder="拟晋升职级"
                        clearable
                        style="width: 200px;padding-left:10px;float:left;" >
                </el-input>
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
                <el-button type="primary" @click="submit()">预览发布</el-button>
            </div>
        </div>
    </div>
</template>

<script>
    import muban3_Img from "@/assets/img/muban_3.png"
    export default {
        name: "mubanShow3",
        data(){
            return{
                muban3_Img:muban3_Img,
                department:'',
                note:'',
                date:'',
                input_num:1,

                namelist:[
                    {
                        xuhao:'',
                        bumen:'',
                        name:'',
                        now_ji:'',
                        next_ji:'',
                    },
                ]

            }
        },
        methods:{
            adddiv(){
                this.input_num+=1;
                this.namelist.push({
                    xuhao:'',
                    bumen:'',
                    name:'',
                    now_ji:'',
                    next_ji:'',
                },)
            },
            delectdiv(){
                if(this.input_num>1){
                    this.input_num-=1;
                    this.namelist.pop();
                }
            },
            save_store(){
                this.$store.commit('SET_CEPING_TYPE',3)
                this.$store.commit('SET_NOTE',this.note)
                this.$store.commit('SET_DEPARTMENT',this.department)
                this.$store.commit('SET_DATE',this.date)
                this.$store.commit('SET_NAMELIST',this.namelist)

            },

            submit(){
                this.save_store()
                // console.log(JSON.stringify(this.namelist))
                this.$router.push({
                    path: '/mubanManage/mubanShow/mubanShow0',
                    query: {type:3}
                })


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
