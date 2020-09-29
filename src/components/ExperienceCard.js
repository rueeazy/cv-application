import React from 'react';

class ExperienceCard extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
        }
    }

    render() {
        return (
            <div className="experienceCard">
                <div className="experienceCardContent">
                    <div className="split-content">
                    <div className="left-side">
                        <div className="title">{this.props.title} -</div> 
                        <div className="position">{this.props.position}</div>
                    </div>
                        <div className="dates">{this.props.dates}</div>
                    </div>
                    <div className="duties">{this.props.duties}</div>  
                </div>
            </div>
        )
    }
}

export default ExperienceCard;