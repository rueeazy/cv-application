import React from 'react';

class ExperienceInput extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            id: this.props.id,
            title: this.props.title,
            position: this.props.position,
            dates: this.props.dates,
            duties: this.props.duties
        }
    }

    passState = () => {
        this.props.titleChange(this.state)
        this.props.positionChange(this.state)
        this.props.datesChange(this.state)
        this.props.dutiesChange(this.state)
    }

    editState = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        }, () => this.passState())
    }

    render() {
        const { title, position, dates, duties } = this.state
        return (
            <div className="form-chunk">
            <label>
                Company:
                <input type="text" name="title" value={title} onChange={this.editState}/>
            </label>
            <label>
                Job Title:
                <input type="text" name="position" value={position} onChange={this.editState} />
            </label>
            <label>
                Job Tenure:
                <input type="text" name="dates" value={dates} onChange={this.editState}/>
            </label>
            <label>
                Job Duties:
                <textarea name="duties" rows="4" cols="50" value={duties} onChange={this.editState}/>
            </label>
        </div>
        )
    }
}

export default ExperienceInput;