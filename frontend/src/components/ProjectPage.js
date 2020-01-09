import React, { Component, Fragment } from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'

export class ProjectPage extends Component {
    state = {
        project: {},
        isLoaded: false
    }

    componentDidMount() {
        axios.get(`http://localhost:8000/wp-json/wp/v2/projects/${this.props.match.params.id}`)
            .then(res => this.setState({
                project: res.data,
                isLoaded: true
            }))
            .catch(err => console.log(err))
    }
    render() {
        const {project, isLoaded} = this.state
        if(isLoaded) {
            return (
                <Fragment>
                    <Link to="/">Retour</Link>
                    <h1>{project.title.rendered}</h1>
                    <div dangerouslySetInnerHTML={{ __html: project.content.rendered }}></div>
                </Fragment>
            )
        }
        return <h3>Loading...</h3>
    }
}

export default ProjectPage
