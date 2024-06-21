import React from 'react'
import { useSelector } from 'react-redux'

export default function Jobs() {
    // const user = useSelector((state) => )
    const category = useSelector((state) => state.jobs.jobs.jobsForCompany.data.vacancy);
    console.log(category);
    return (
        <div>
            fds
        </div>
    )
}
