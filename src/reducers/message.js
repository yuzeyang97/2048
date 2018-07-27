import {Put_CurrrentIndex,Add_Item,Top_Item,Delete_Item,Delete_MoreItem,Push_DeleteItem,Splice_DeleteItem}  from '../const/actionType'
const initialState = {
    listItem: [
        { img: require("../img/1.jpg"), title: "小年糕前端大拿群", description: "欧文:真理惟一可靠的标准就是永远自相符合", time: "上午11:35" },
        { img: require("../img/2.jpg"), title: "小年糕后端大拿群", description: "习近平:我最挂念的还是困难群众", time: "上午10:25" },
        { img: require("../img/3.jpg"), title: "小年糕前端训练营", description: "德奥弗拉斯多:时间是一切财富中最宝贵的财富", time: "上午8:37" },
        { img: require("../img/4.jpg"), title: "小年糕后端训练营", description: "爽哥:加油~~~", time: "上午2:35" },
        { img: require("../img/5.jpg"), title: "小年糕大数据大拿群", description: "袁中道:人生贵知心，定交无暮早", time: "上午00:26" },
        { img: require("../img/6.jpg"), title: "小年糕平面设计", description: "魏磊:生死看淡不服就干", time: "上午1:11" },
        { img: require("../img/7.jpg"), title: "欢乐一家亲", description: "爽哥:加油~~~", time: "上午12:35" },
        { img: require("../img/8.jpg"), title: "东北一家人", description: "于泽洋:加油加油加油", time: "上午3:35" },
        { img: require("../img/9.jpg"), title: "天南海北各地群", description: "宝宝:爱你呦", time: "上午2:35" }
    ],
    data: [
        { img: require("../img/aburimochi.png"), btnName: "小年糕" },
        { img: require("../img/list.png"), btnName: "通讯录" },
        { img: require("../img/search.png"), btnName: "发现" },
        { img: require("../img/user.png"), btnName: "我" }
    ],
    changeItemBtn: [
        { method: 'topItem', context: '置顶' },
        { method: 'deleteItem', context: '删除' },
        { method: 'showMulSelect', context: '多选删除' }
    ],
    topItemList: [],
    currentIndex: null,
    appTitle: '小年糕',
    deleteItemArray: []
}


const reducer = (state = initialState, action) => {
    switch (action.type) {
        case Put_CurrrentIndex: {
            return { ...state, currentIndex: action.currentIndex }
        }
        case Add_Item: {
            const newState = { ...state };
            const { title, description, time } = action;
            newState.listItem.unshift({
                img: require("../img/1.jpg"),
                title: title,
                description: description,
                time: time
            });
            const spliceLength = newState.topItemList.length;
            newState.listItem.splice(1, spliceLength);
            newState.listItem = newState.topItemList.concat(newState.listItem);
            return newState
        }
        case Top_Item: {
            const newState = { ...state };
            if (newState.currentIndex < newState.topItemList.length) {
                var topView = newState.topItemList.splice(newState.currentIndex, 1);
                newState.topItemList.unshift(topView[0]);
                newState.listItem.splice(newState.currentIndex, 1);
                const spliceLength = newState.topItemList.length - 1;
                newState.listItem.splice(0, spliceLength);
            }
            else {
                var topView = newState.listItem.splice(newState.currentIndex, 1);
                const spliceLength = newState.topItemList.length;
                newState.listItem.splice(0, spliceLength);
                newState.topItemList.unshift(topView[0]);
            }
           
            newState.listItem = newState.topItemList.concat(newState.listItem);
            return newState
        }
        case Delete_Item: {
            const newState = { ...state };
            newState.listItem.splice(newState.currentIndex, 1);
            if (newState.currentIndex < newState.topItemList.length) {newState.topItemList.splice(newState.currentIndex, 1);}
            return newState
        }
        case Delete_MoreItem: {
            const newState = { ...state };
            newState.deleteItemArray.map((item) => {
                if (item < newState.topItemList.length) {newState.topItemList.splice(item, 1);}
                delete newState.listItem[item]
            })
            const newList = newState.listItem.filter((n) => { return n });
            return {
                ...newState,
                deleteItemArray: [],
                listItem: newList
            }
        }
        case Push_DeleteItem: {
            const newState = { ...state };
            newState.deleteItemArray.push(action.eventIdex)
            return newState
        }
        case Splice_DeleteItem: {
            const newState = { ...state };
            let cancelItem = newState.deleteItemArray.indexOf(action.eventIdex)
            newState.deleteItemArray.splice(cancelItem, 1)
            return newState
        }
        default:
            return state

    }
}

export default reducer
