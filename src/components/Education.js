import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faEdit} from '@fortawesome/free-solid-svg-icons'

class Education extends React.Component {
    constructor(props) {
        super(props)
        this.schoolChange = this.schoolChange.bind(this)
        this.majorChange = this.majorChange.bind(this)
        this.graduationChange = this.graduationChange.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
        this.state = {
            school: "The King's College",
            major: "Business",
            graduation: "06/2022",
            showForm: false
        }
    }

    showForm = () => {
        return (
            <div>
                <form className="education-form" onSubmit={this.onSubmit}>
                    <label>
                        School:
                        <input type="text" name="school" value={this.state.school} onChange={this.schoolChange}/>
                    </label>
                    <label>
                        Major:
                        <input type="text" name="major" value={this.state.major} onChange={this.majorChange} />
                    </label>
                    <label>
                        Graduation Date:
                        <input type="text" name="graduation" value={this.state.graduation} onChange={this.graduationChange}/>
                    </label>
                    <input type="submit" value="Submit" />
                </form>
            </div>
        )
    }

    schoolChange(e) {
        this.setState({ school: e.target.value })
    }

    majorChange(e) {
        this.setState({ major: e.target.value })
    }

    graduationChange(e) {
        this.setState({ graduation: e.target.value })
    }

    onSubmit(e) {
        e.preventDefault()
        this.setState(prevState => ({
            school: prevState.school,
            major: prevState.major,
            graduation: prevState.graduation,
            showForm: false,
        }))
    }


    render() {
        const edit = <FontAwesomeIcon icon={faEdit} />
        const { school, major, graduation } = this.state
        return (
            <div className="education">
                <div className="section">
                    <div className="section-title">Education</div>
                    <div className="edit" onClick={() => this.setState({showForm: true})}>{edit}</div>
                </div>
                {this.state.showForm ? this.showForm() : null}
                <div className="education-content">
                <div className="leftside">
                    <div className="school">{school} -</div>
                    <div className="major">{major}</div>
                </div>
                    <div className="graduation">{graduation}</div>
                </div>
            </div>
        )
    }
}

export default Education;