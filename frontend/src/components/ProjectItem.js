import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'
import axios from 'axios'


export class ProjectItem extends Component {
    state = {
        imgUrl: '',
        isLoaded: false
    }
    static propTypes = {
        project: PropTypes.object.isRequired
    }
    componentDidMount() {
        const {featured_media} = this.props.project
        const getImageUrl = axios.get(`http://localhost:8000/wp-json/wp/v2/media/${featured_media}`)
        
        // add more infos if wanted
        Promise.all([getImageUrl]).then(res => {
            this.setState({
                imgUrl: res[0].data.media_details.sizes.full.source_url,
                isLoaded: true
            })
        })
    }
    render() {
        const {title, excerpt, id} = this.props.project
        const {imgUrl, isLoaded} = this.state
        if (isLoaded) {
            return (
                <div>
                    <h2>{title.rendered}</h2>
                    <img src={imgUrl} alt={title.rendered} />
                    <div dangerouslySetInnerHTML={{__html: excerpt.rendered}} />
                    <Link to={`/projet/${id}`}>Découvrir le projet</Link>
                </div>
            )
        }

        return null
            
    }
}

export default ProjectItem
