import app from 'ampersand-app'
import localLinks from 'local-links';
import React from 'react';

export default React.createClass({
    displayName: 'NavHelper',
    handleClick(event) {
        const PATH_NAME = localLinks.getLocalPathname(event)

        if (PATH_NAME) {
            event.preventDefault()
            app.router.history.navigate(PATH_NAME)
        }
    },

    render() {
        return (
            <div {...this.props} onClick={this.handleClick}>
                {this.props.children}
            </div>
        )
    }
})


