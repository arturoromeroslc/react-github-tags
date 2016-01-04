import NavHelper from './components/nav-helper'
import React from 'react'

export default React.createClass({
    displayName: 'Layout',

    render () {
        return (
            <NavHelper>
                <div onClick={this.handleClick}>
                    <nav className='top-nav top-nav-light cf' role='navigation'>
                        <input id='menu-toggle' className='menu-toggle' type='checkbox'/>
                        <label htmlFor='menu-toggle'>Menu</label>
                        <ul className='list-unstyled list-inline cf'>
                            <li>Labelr</li>
                            <li><a href='/repos'>Repos</a></li>
                            <li className='pull-right'><a href='/'>Logout</a></li>
                        </ul>
                    </nav>
                    <div className='container'>
                        {this.props.children}
                    </div>
                </div>
            </NavHelper>
        )
    }
})