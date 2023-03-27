import React from 'react'
import { BarLoader } from 'react-spinners'

const Loader = ({ loading }) => {
    const override = { width: '200px' }
    return (
        <span className='loader'>
            <BarLoader cssOverride={override} />
        </span>
    )
}

export default Loader
