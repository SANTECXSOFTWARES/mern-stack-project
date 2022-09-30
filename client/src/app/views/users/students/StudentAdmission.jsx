import React from 'react'
// import LineChart from './LineChart'
// import AreaChart from './AreaChart'
import { useTheme, Box, styled } from '@mui/system'
// import DoughnutChart from './Doughnut'
// import ComparisonChart from './ComparisonChart'
import SimpleCard from 'app/components/cards/SimpleCard'
import Breadcrumb from 'app/components/Breadcrumb/Breadcrumb'
import StudentAdmissionForm from './StudentAdmissionForm'
import { Paper } from '@mui/material'
import { makeStyles } from '@mui/styles'

const useStyles = makeStyles(theme => ({
    pageContent: {
        margin: theme.spacing(5),
        padding: theme.spacing(3)
    }
}))

// const Container = styled('div')(({ theme }) => ({
//     margin: '30px',
//     [theme.breakpoints.down('sm')]: {
//         margin: '16px',
//     },
//     '& .breadcrumb': {
//         marginBottom: '30px',
//         [theme.breakpoints.down('sm')]: {
//             marginBottom: '16px',
//         },
//     },
// }))

const StudentAdmission = () => {
    const theme = useTheme();
    const classes = useStyles();

    return(
        <>
        <Paper className={classes.pageContent}>
        <StudentAdmissionForm/>
        </Paper>
        </>
    )
        // <Container>
        //     {/* <div className="breadcrumb">
        //         <Breadcrumb
        //             routeSegments={[
        //                 { name: 'Charts', path: '/charts' },
        //                 { name: 'Echarts' },
        //             ]}
        //         />
        //     </div> */}
        //     <SimpleCard title="Student Admission">
        //         <StudentAdmissionForm />
        //     </SimpleCard>
        // </Container>
    
}

export default StudentAdmission
