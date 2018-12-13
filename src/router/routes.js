import React, { Component } from 'react';
import { Switch, Route, Router, withRouter } from 'react-router-dom'
import { connect } from 'react-redux';


class Routes extends Component {
    constructor(props){
        super(props);
        this.state = { 
            activeLanguage : "kr"
        }
    }
    render(){
        const attachPropsToContainers = (Container, props) => {
            return (
              <Container
                languageConfig = {props}
              />
            );
          }
        const { navLinks, language } = this.props;
        return (
            <Switch>
                {navLinks.map( r => {
                    let container = () => attachPropsToContainers(r.component, language);
                    return <Route key={r.path} exact={true} path={r.path} render={container}/>
                })}
            </Switch>
        )
    }
};

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = (dispatch) => {
    return {

    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Routes));
// export default Routes;