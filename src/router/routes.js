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
            console.log("Component for Route ----> ", Container)
            return (
              <Container
                {...props}
              />
            );
          }
        const { navLinks, language } = this.props;
        console.log("IN ROUTES --> ", language);
        console.log("navLinks IN ROUTES --> ", navLinks);
        return (
            // <Router>
                <Switch>
                    {navLinks.map( r => {
                        let container = () => attachPropsToContainers(r.component, language);
                        // return <Route key={r.path} languages={languagesConfig} exact path={r.path} component={r.component}/>
                        return <Route key={r.path} language={language} exact path={r.path} render={container}/>
                    })}
                </Switch>
            // </Router>
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