import * as ActionTypes from '../const/ActionTypes';

const initialState = {
    studentList: [],
    CourseTitle: [{
        title: '学员名',
        dataIndex: 'nick',
        key: 'nick',
    }, {
        title: '学员编号/MID',
        dataIndex: 'mid',
        key: 'mid',
        filteredValue: [] || null,
        onFilter: (value, record) =>{console.log(record);return record.mid==value},
    }, {
        title: '入学时间',
        dataIndex: 'enter_time',
        key: 'enter_time',
    }, {
        title: '开课时间',
        dataIndex: 'start_time',
        key: 'start_time',
    }, {
        title: '在学课程',
        dataIndex: 'learning_lessons',
        key: 'learning_lessons',
    },
    {
        title: '负责老师',
        dataIndex: 'teachers',
        key: 'teachers',
    }]
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case `${ActionTypes.FETCH_STUDENT_LIST}_SUC`: {
            const newOnlineCourse = action.data.map((item, index) => {
                return {
                    key: index + 1,
                    nick: item.nick,
                    mid: item.mid,
                    enter_time: item.enter_time,
                    start_time: item.start_time,
                    learning_lessons: item.learning_lessons.length?item.learning_lessons.join(' '):'无',
                    teachers: item.teachers.length?item.teachers.join(' '):'无',
                }
            })
            const newState = { ...state, studentList: newOnlineCourse }
            return newState
        }
        case `${ActionTypes.FETCH_STUDENT_LIST}_FAI`: {
            return state
        }
        case `${ActionTypes.SEARCH_STUDENT}`: {
            const newState={...state}
            action.data?newState.CourseTitle[1].filteredValue=[action.data]:newState.CourseTitle[1].filteredValue=[]
            return newState
        }
        default:
            return state
    }
}
export default reducer