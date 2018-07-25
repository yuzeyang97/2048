// 显示更改项目模板
    export const showChangeDialog = currentIndex => ({
        type:'showChangeDialog',
        currentIndex
})
// 显示添加项目模板
    export const showAddDialog = () => ({
    type:'showAddDialog'
})
//  關閉模板
    export const closeDialog = () => ({
    type:'closeDialog'
})
// 显示多选按钮
    export const showMulSelect = () => ({
    type:'showMulSelect'
})
// 添加项目
    export const addItem = (title,description,time) => ({
    type:'addItem',
    title,
    description,
    time
})
// 置顶项目
    export const topItem = () => ({
    type:'topItem'
})
// 删除项目
    export const deleteItem = () => ({
    type:'deleteItem'
})
// 多选删除项目
    export const deleteMoreItem = () => ({
    type:'deleteMoreItem'
})
// 添加删除项
    export const pushDeleteItem = (eventIdex) => ({
    type:'pushDeleteItem',
    eventIdex
})
// 去除删除项
    export const spliceDeleteItem = (eventIdex) =>({
    type:'spliceDeleteItem',
    eventIdex
    })
