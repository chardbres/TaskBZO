import React, { Fragment } from 'react'
import { Header, Menu } from '../components/molecules'

const Dashboard = () => {
    return (
        <Fragment>
            <Header title='Dashboard' />
            <Menu title='TaskBZO' />
        </Fragment>
    )
}

export default Dashboard