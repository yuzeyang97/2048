import { schema } from 'normalizr';

// 满意度反馈
const classes = new schema.Entity('classes', {}, {
  idAttribute: 'id'
});
const teacher = new schema.Entity('teachers',{},{
  idAttribute:'id'
})

const satisfiled = new schema.Entity('satisfiled',{
  class_info:classes,
  teacher_info:teacher
},{
  idAttribute:'time'
})
// 学生列表
const students = new schema.Entity('students', {}, {
  idAttribute: 'mid'
});
// 个人档案列表
const currentLessonsList = new schema.Entity('currentLessonsList', {
  classInfo:classes,
  teacherInfo:teacher
}, {
  idAttribute: 'id'
});

const historyLessonsList = new schema.Entity('historyLessonsList',{
  classInfo:classes,
  teacherInfo:teacher
},{
  idAttribute:'id'
})


// homework
const classList = new schema.Entity('classList',{},{
  idAttribute:'time'
})

const comments = new schema.Entity('comments', {}, {
  idAttribute: 'id'
});
const teacherInfo = new schema.Entity('teacherInfo',{},{
  idAttribute:'id'
})
const classInfo = new schema.Entity('classInfo',{},{
    idAttribute:'id'
  })
const author = new schema.Entity('author',{},{
    idAttribute:'mid'
  })
const currentUnreview = new schema.Entity('homework',{
    comments:[comments],
    teacherInfo,
    classInfo,
    author
},{
  idAttribute:'id'
})

export const SATISFILEDLIST = [ satisfiled ];
export const STUDENTLIST = [ students ];
export const CURRENTLESSONSLIST= [ currentLessonsList ];
export const HISTORYLESSONSLIST= [ historyLessonsList ];
export const CLASSLIST= [ classList ];
export const CURRENTUNREVIEW= [ currentUnreview ];
