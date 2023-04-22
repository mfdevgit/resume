import React from 'react'
import TechstackItem from './components/TechstackItem'
import PortfolioItem from './components/PortfolioItem'
import data from './assets/data.json'

export default function Right() {
    return (
        <div className='right'>
            <div>
                <h2>Вступление</h2>
                <div className='introduction'>
                    <p>
                        Я изучаю веб-программирование на протяжении двух лет и за это время не только обрёл необходимые навыки, но и сделал несколько
                        работ, которые эти навыки демонстрируют.
                    </p>
                    <p>
                        Помимо разработки бэкенда и фронтенда я испытываю интерес к дизайну (векторная графика), а потому довольно свободно пользуюсь
                        Figma и Adobe Illustrator.
                    </p>
                </div>
            </div>
            <div>
                <h2>Технологии</h2>
                <div className='techstack'>
                    {data.techstack.map(element => (
                        <TechstackItem {...element} />
                    ))}
                </div>
            </div>
            <div>
                <h2>Портфолио</h2>
                <div className='portfolio'>
                    {data.portfolio.map(element => (
                        <PortfolioItem {...element} />
                    ))}
                </div>
            </div>
            <div>
                <h2>Увлечения</h2>
                <div className='hobby'>
                    {data.hobby.map(element => (
                        <p dangerouslySetInnerHTML={{ __html: element }} />
                    ))}
                </div>
            </div>
            <a href='/assets/files/resume.pdf' target='_blanc' className='download'>
                Загрузить PDF
            </a>
        </div>
    )
}
