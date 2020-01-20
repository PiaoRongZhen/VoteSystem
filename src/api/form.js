
//保存表单信息
export function saveform(parm){
    this.$axios.post("/local/addmuban",parm).then(resp=>{
        this.mubanid = resp.data.id
        console.log(this.mubanid)
    })

}
//增加表单的内容
export function addform(parm){

    this.$axios.post("/local/addform",parm).then(res=>{

    })
}
