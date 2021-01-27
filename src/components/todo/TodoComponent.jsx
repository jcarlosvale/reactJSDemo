import React, {Component} from 'react'
import moment from 'moment'
import {ErrorMessage, Field, Form, Formik} from 'formik'
import TodoDataService from '../api/todo/TodoDataService.js'
import AuthenticationService from './AuthenticationService.js'


class TodoComponent extends Component {

    constructor(props) {
        super(props)
        this.state = {
            id : this.props.match.params.id,
            description: '',
            targetDate: moment(new Date()).format('YYYY-MM-DD')
        }
        this.onSubmit = this.onSubmit.bind(this)
        this.validate = this.validate.bind(this)
    }

    componentDidMount() {

        if (this.state.id ===-1) {
            return 
        }

        let name = AuthenticationService.getLoggedInUserName()
        let id = this.state.id
        TodoDataService.retrieveTodo(name, id)
            .then(response => this.setState({
                description: response.data.description,
                targetDate: moment(response.data.targetDate).format('YYYY-MM-DD')
            }))
    }
    
    onSubmit(values) {
        let name = AuthenticationService.getLoggedInUserName()
        let idValue = this.state.id
        let todo = {
            id: idValue,
            description: values.description,
            targetDate: values.targetDate
        }

        if (this.state.id ===-1) {
            TodoDataService
                .createTodo(name, todo)
                .then(() => {
                    this.props.history.push('/todos')
                })
        } else {
            TodoDataService
                .updateTodo(name, idValue, todo)
                .then(() => {
                    this.props.history.push('/todos')
                })
        }
        console.log(values)
    }

    validate(values) {
        let errors = {}
        if (!values.description) {
            errors.description = 'Enter a Description'
        } else if (values.description.length < 5) {
            errors.description = 'Enter at least 5 Characters in Description'
        }

        if (!moment(values.targetDate).isValid()) {
            errors.targetDate = 'Enter a valid Target Date'
        }

        return errors
    }

    render() {
        let {description, targetDate} = this.state
        return (
            <div>
                <h1>Todo</h1>
                <div className="container">
                    <Formik
                        initialValues={{description,targetDate}}
                        onSubmit={this.onSubmit}
                        validateOnChange={false}
                        validateOnBlur={false}
                        validate={this.validate}
                        enableReinitialize={true}
                    >
                        {
                            (props) => (
                                <Form>
                                    <ErrorMessage name="description" component="div" className="alert alert-warning"/>
                                    <ErrorMessage name="targetDate" component="div" className="alert alert-warning"/>
                                    <fieldset className="form-group">
                                        <label>Description</label>
                                        <Field className="form-control" type="text" name="description"/>
                                    </fieldset>
                                    <fieldset className="form-group">
                                        <label>Target Date</label>
                                        <Field className="form-control" type="date" name="targetDate"/>
                                    </fieldset>
                                    <button className="btn btn-success" type="submit">Save</button>
                                </Form>
                            )
                        }
                    </Formik>
                </div>
            </div>                
        )
    }
}

export default TodoComponent