import React from 'react'
import { HashRouter } from 'react-router-dom'
import { Layout } from './layout/Layout'
import Pages from './Pages'

function HW5() {
    return (
        <HashRouter>
            {/*в gh-pages лучше работает HashRouter, с BrowserRouter скорее всего не пройдёт тест*/}
            <Layout>
                <Pages />
            </Layout>
        </HashRouter>
    )
}

export default HW5
