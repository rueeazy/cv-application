import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faEdit} from '@fortawesome/free-solid-svg-icons'

class Header extends React.Component {
    constructor(props) {
        super(props)
        this.nameChange = this.nameChange.bind(this)
        this.emailChange = this.emailChange.bind(this)
        this.numberChange = this.numberChange.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
        this.state = {
            showForm: false,
            name: "Christian Name",
            email: "christian@mail.com",
            number: "800-445-6685"
        }
    }

    showForm = () => {
        return (
            <div>
                <form className="header-form" onSubmit={this.onSubmit}>
                    <label>
                        Name:
                        <input type="text" name="name" value={this.state.name} onChange={this.nameChange}/>
                    </label>
                    <label>
                        Email:
                        <input type="text" name="email" value={this.state.email} onChange={this.emailChange} />
                    </label>
                    <label>
                        Number:
                        <input type="text" name="number" value={this.state.number} onChange={this.numberChange}/>
                    </label>
                    <input type="submit" value="Submit" />
                </form>
            </div>
        )
    }

    nameChange(e) {
        this.setState({ name: e.target.value })
    }

    emailChange(e) {
        this.setState({ email: e.target.value })
    }

    numberChange(e) {
        this.setState({ number: e.target.value })
    }

    onSubmit(e) {
        e.preventDefault()
        this.setState(prevState => ({
            name: prevState.name,
            email: prevState.email,
            number: prevState.number,
            showForm: false,
        }))
    }

    render() {
        const edit = <FontAwesomeIcon icon={faEdit} />
        const {name, email, number} = this.state;
        return (
            <div className="header">
                <div className="section">
                    <div className="name">{name}</div>
                    <div className="edit" onClick={() => this.setState({showForm: true})}>{edit}</div>
                </div>
                <div className="email">{email}</div>
                <div className ="phone">{number}</div>
                {this.state.showForm ? this.showForm() : null}
            </div>
        )
    }
}

export default Header;