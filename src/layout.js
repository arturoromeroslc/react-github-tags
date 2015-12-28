import localLinks from 'local-links'
import React from 'react'

export default React.createClass({
    
    onClick(event) {
        const PATH_NAME = localLinks.getLocalPathname(event)

        if (PATH_NAME) {
            event.preventDefault()
            app.router.history.navigate(PATH_NAME)
        }
    },

    render () {
        return (
            <div onClick={this.onclick}>
                <nav className='top-nav top-nav-light cf' role='navigation'>
                    <input id='menu-toggle' className='menu-toggle' type='checkbox'/>
                    <label htmlFor='menu-toggle'>Menu</label>
                    <ul className='list-unstyled list-inline cf'>
                        <li>Labelr</li>
                        <li><a href='/repos'>Repos</a></li>
                        <li className='pull-right'><a href='/logout'>Logout</a></li>
                    </ul>
                </nav>
                <div className='container'>
                    {this.props.children}
                </div>
            </div>
        )
    }
})