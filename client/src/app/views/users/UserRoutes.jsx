import React, { lazy } from 'react'
import Loadable from 'app/components/Loadable/Loadable'
import { authRoles } from 'app/auth/authRoles'

const StudentAdmission = Loadable(lazy(() => import('./students/StudentAdmission')))

const usersRoutes = [
    {
        path: '/users/students',
        element: <StudentAdmission />,
        auth: authRoles.editor,
    },
]

export default usersRoutes
