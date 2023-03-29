import React from 'react'

export default function Portfolio() {
    return (
        <div className='portfolio'>
            <div>
                <div>
                    <a className='title' target='_blanc' href='https://mfdevutilities.vercel.app/'>
                        Утилиты
                    </a>
                    <a className='github' href='https://github.com/mfdevgit/utilities' target='_blanc' />
                </div>
                <p>
                    Самостоятельный проект на React (без бэка), где я собираю функционал для личного использования. Выложен на Vercel. На текущий
                    момент есть генератор паролей и собрание градиентов.
                </p>
            </div>
        </div>
    )
}
