import React from 'react'
import Introduction from './Introduction'
import Techstack from './Techstack'
import Portfolio from './Portfolio'
import Hobby from './Hobby'

export default function Right() {
    return (
        <div className='right'>
            <div>
                <h2>Вступление</h2>
                <Introduction />
            </div>
            <div>
                <h2>Технологии</h2>
                <Techstack />
            </div>
            <div>
                <h2>Портфолио</h2>
                <Portfolio />
            </div>
            <div>
                <h2>Увлечения</h2>
                <Hobby />
            </div>
            <a href='./resume.pdf' target='_blanc' className='download'>
                Загрузить PDF
            </a>
        </div>
    )
}
