import PersonMessage from '../components/PersonMessage/index.js'
import StudentMessage from '../components/StudentMessage/index.js'
import ClassInfo from '../components/ClassInfo/index.js'
import Container from '../container/container';

export default  [
    {
      path: '/',
      component: Container,
      indexRoute: { component: StudentMessage },
      childRoutes: [
        { path: 'class/:id', component: ClassInfo },
        { path: 'person/:id', component: PersonMessage }
      ]
    }
  ]