import * as ActionType from '../const/actionType'

// 显示更改项目模板
    export const showChangeDialog = () => ({
        type:ActionType.Show_ChangeDialog
})
// 显示添加项目模板
    export const showAddDialog = () => ({
    type:ActionType.Show_AddDialog
})
//  關閉模板
    export const closeDialog = () => ({
    type:ActionType.Close_Dialog
})
// 显示多选按钮
    export const showMulSelect = () => ({
    type:ActionType.Show_MulSelect
})
// 更改当前点击索引
    export const putCurrrentIndex = currentIndex => ({
    type:ActionType.Put_CurrrentIndex,
    currentIndex
})
// 添加项目
    export const addItem = (title,description,time) => ({
    type:ActionType.Add_Item,
    title,
    description,
    time
})
// 置顶项目
    export const topItem = () => ({
    type:ActionType.Top_Item
})
// 删除项目
    export const deleteItem = () => ({
    type:ActionType.Delete_Item
})
// 多选删除项目
    export const deleteMoreItem = () => ({
    type:ActionType.Delete_MoreItem
})
// 添加删除项
    export const pushDeleteItem = (eventIdex) => ({
    type:ActionType.Push_DeleteItem,
    eventIdex
})
// 去除删除项
    export const spliceDeleteItem = (eventIdex) =>({
    type:ActionType.Splice_DeleteItem,
    eventIdex
    })
