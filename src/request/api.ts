interface apiType{
    [name:string]:string
}
/* 存放api */
const planApi:apiType={
    'ToTopPlan':'/PlanInfo/ToTopPlan',// 计划置顶
    'DeletePlanByPlanIds':'/PlanInfo/DeletePlanByPlanIds',// 删除计划(可批量)
    'GetDeparMentTree':'/Common/GetDeparMentTree', // 部门树
    'GetAllProjectTree': '/Common/GetAllProjectTree', // 项目树
    'GetMangePlanItems':'/PlanInfo/GetMangePlanItems', // 计划列表
    'GetEnumInfoByEnumStr': '/Common/GetEnumInfoByEnumStr', // 根据枚举类型获取枚举
    'GetDepartOrProjectByQuary':'/Common/GetDepartOrProjectByQuary', // 模糊搜 部门
    'AddPlanInfo':'/PlanInfo/AddPlanInfo', // 新增计划
    'UpdatePlanInfo':'/PlanInfo/UpdatePlanInfo', // 计划编辑
    'GetPlanDetailByPalnId':'/PlanInfo/GetPlanDetailByPalnId', // 计划详情
    'GetPlanListBySearchKey':'/PlanInfo/GetPlanListBySearchKey', // 搜索计划列表
    'GetProcessLogList':'/PlanInfo/GetProcessLogList', // 计划流程日志（分页）
    'GetFeedbackLogList':'/PlanInfo/GetFeedbackLogList', // 计划反馈日志记录
    'InsertPlanFeedback':'/PlanInfo/InsertPlanFeedback', // 新增计划反馈
    'GetMyLoopPlanList':'/PlanInfo/GetMyLoopPlanList', // 循环计划列表
    'UpdatePlanLoopState':'/PlanInfo/UpdatePlanLoopState', // 循环计划设置启用停用
    'GetPlanQuickSeachConditionList':'/PlanInfo/GetPlanQuickSeachConditionList', // 获取快捷筛选条件（人员计划周期等）
    'GetTimeConditionData':'/PlanInfo/GetTimeConditionData',//筛选条件-时间项
    'PlanSubmitWithConfirm':'PlanInfo/PlanSubmitWithConfirm', // 计划提交及确认
    'BatchSubmitPlan':'PlanInfo/BatchSubmitPlan',  // 批量提交
    'AuditPlans_V2':'PlanInfo/AuditPlans_V2', // 批量审批
    'CopyPlanInfo':'PlanInfo/CopyPlanInfo', // 复制计划
    'PlanUpdateWithStop':'PlanInfo/PlanUpdateWithStop', // 计划申请修改、申请中止
    'GetUserOrgInfoById':'User/GetUserOrgInfoById', // 获取登录人信息
    'UploadFile':'Common/UploadFile', // 附件上传
    'GetUserCard':'User/GetUserCard', // 模糊搜 用户
    'GetMangeSubPlanItems':'PlanInfo/GetMangeSubPlanItems' // 获取子计划
}
const  login :apiType ={
       'Login': '/User/Login'
}

const api:apiType={
    ...planApi,
    ...login
}


export default api
