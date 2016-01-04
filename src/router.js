import Layout from './layout'
import Public from './pages/public'
import qs from 'qs'
import React from 'react'
import Repos from './pages/repo'
import Router from 'ampersand-router'

export default Router.extend({
    renderPage(page, options = {layout: true}) {
        if (options.layout) {
            page = (
                <Layout>
                    {page}
                </Layout>
            )
        }
        React.render(page, document.body)        
    },

    routes: {
        '':'public',
        'repos' : 'repos',
        'login' : 'login',
        'auth/callback?:query' : 'authCallback'
    },

    public () {
        this.renderPage(<Public/>, {layout: false})
    },

    repos () {
        this.renderPage(<Repos/>)
    },

    login () {
        window.location = 'https://github.com/login/oauth/authorize?' + qs.stringify({
            client_id: '973e07f89bc3905b8ecd',
            redirect_uri: window.location.origin + '/auth/callback',
            scope: 'user, repo'
        })
    },

    authCallback (query) {
        query = qs.parse(query)
        console.log(query);
    }
})