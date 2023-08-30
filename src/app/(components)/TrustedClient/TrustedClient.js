import React from 'react'
import TrustedClientcard from '../TrustedClientCard/TrustedClientcard'

export default function TrustedClient() {
    return (
        <center> <div className='grid grid-cols-2 gap-4'>
            <TrustedClientcard tittle="Mina Whatson" text="CONSULTANT" />
            <TrustedClientcard tittle="Edward Hunter" text="IT SPECIALIST" />
        </div></center>
    )
}
