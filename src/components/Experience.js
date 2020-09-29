import React from 'react';
import ExperienceCard from './ExperienceCard';
import ExperienceInput from './ExperienceInput';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faEdit} from '@fortawesome/free-solid-svg-icons'

class Experience extends React.Component {
    constructor(props) {
        super(props)
        this.titleChange = this.titleChange.bind(this)
        this.positionChange = this.positionChange.bind(this)
        this.datesChange = this.datesChange.bind(this)
        this.dutiesChange = this.dutiesChange.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
        this.state = {
            showForm: false,
            experience: [{id: 1, title: "Wells Fargo", position: "Personal Banker", dates: "02/2016 - 02/2018", duties: "Build relationships with current clients"},
            {id: 2, title: "Company Title", position: "Position", dates: "Length of Employment", duties: "Put Duties Here"},
            {id: 3, title: "Company Title", position: "Position", dates: "Length of Employment", duties: "Put Duties Here"}]   
        }
    }

    titleChange(exp) {
        this.setState(prevState => ({
            showForm: prevState.showForm,
            experience: prevState.experience.map(
                obj => (obj.id === exp.id ? Object.assign(obj, {title: exp.title}) : obj)
            )
        }));
    }

    positionChange(exp) {
        this.setState(prevState => ({
            showForm: prevState.showForm,
            experience: prevState.experience.map(
                obj => (obj.id === exp.id ? Object.assign(obj, {position: exp.position}) : obj)
            )
        }));
    }


    datesChange(exp) {
        this.setState(prevState => ({
            showForm: prevState.showForm,
            experience: prevState.experience.map(
                obj => (obj.id === exp.id ? Object.assign(obj, {dates: exp.dates}) : obj)
            )
        }));
    }


    dutiesChange(exp) {
        this.setState(prevState => ({
            showForm: prevState.showForm,
            experience: prevState.experience.map(
                obj => (obj.id === exp.id ? Object.assign(obj, {duties: exp.duties}) : obj)
            )
        }));
    }

    onSubmit(e) {
        e.preventDefault()
        this.setState({showForm: false})
    }

    showForm = () => {
        return (
            <div>
                <form className="experience-form" onSubmit={this.onSubmit}>
                    {this.state.experience.map(item => {
                        return <ExperienceInput key={item.id} id={item.id} title={item.title} position={item.position} dates={item.dates} duties={item.duties}
                        titleChange={this.titleChange} positionChange={this.positionChange} datesChange={this.datesChange} dutiesChange={this.dutiesChange} />
                    })}
                    <input type="submit" value="Submit" />
                </form>
            </div>
        )
    }  

    render() {
        const edit = <FontAwesomeIcon icon={faEdit} />
        return (
            <div className="experience">
                <div className="section">
                    <div className="section-title">Experience</div>
                    <div className="edit" onClick={() => this.setState({showForm: true})}>{edit}</div>
                </div>
                {this.state.showForm ? this.showForm() : null}
                {this.state.experience.map(obj => 
                    <ExperienceCard key={obj.id} title={obj.title} position={obj.position} dates={obj.dates} duties={obj.duties} />
                )}
            </div>
        )
    }
}

export default Experience