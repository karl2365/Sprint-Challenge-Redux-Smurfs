import React, { Component } from 'react'
import { getSmurfs, addSmurf } from '../actions'
import { defaultCipherList } from 'constants';
import { connect } from 'react-redux';
import Smurf from './Smurf';

class SmurfList extends Component {
    state = {
        newSmurf: {
            name: '',
            age: 0,
            height: '',
            id: 1
        }
    }
    componentDidMount() {
        this.props.getSmurfs();
    }

    handleChanges = e => {
        console.log(this.state)
        this.setState({ newSmurf:{...this.state.newSmurf, [e.target.name]: e.target.value}})
    };

    addSmurf = e => {
        e.preventDefault();
        this.props.addSmurf(this.state.newSmurf);
        this.props.getSmurfs();
        this.setState({
            newSmurf: {
                name:'',
                age:0,
                height:'',
                id: this.state.id +1
            }
        })
    }

    render() {
        console.log('render', this.props.smurfs)
        if(this.props.fetching){
            return(<p>loading...</p>)
        }else{
        return (
            <div>
         
                <p>{this.props.smurfs.map(smurf => <Smurf key={smurf.id} smurf={smurf} />)} </p>
                <form onSubmit={this.addSmurf}>
                    <input type='text' onChange={this.handleChanges} name='name' placeholder='name'></input>
                    <input type='number' onChange={this.handleChanges} name='age' placeholder='age'></input>
                    <input type='text' onChange={this.handleChanges} name='height' placeholder='height'></input>
                        
                    <button >Add Smurf</button>

                </form>
            </div>
        )}
    }
}

const mapStateToProps = state => ({
    fetching: state.fetching,
    smurfs: state.smurfs
})


export default connect(mapStateToProps, { getSmurfs, addSmurf })(SmurfList)