import React from 'react'
import { Paper, Button, Input } from '../../Components'
import Grid from '@material-ui/core/Grid';
import { connect } from 'react-redux'
import { addList, editValue, deleteValue, cancelValue, updateValue, getData } from '../../Store/Action'


class Home extends React.Component {
    constructor() {
        super()
        this.state = {
            name: '',
            disabled: true,
        }
    }

    componentDidMount() {
        this.props.getData()
    }


    add = () => {
        this.props.addList(this.state.name)
        this.setState({
            name: ''
        })
    }





    render() {
        let { todos } = this.props
        return (
            <div style={{ marginTop: '50px' }}>
                <Grid justify='center' container spacing={3}>
                    <Grid item xs={12} sm={12} lg={5}>
                        <Paper>
                            <Input value={this.state.name} onChange={(e) => this.setState({ name: e.target.value, disabled: false })} />
                            <Button disabled={this.state.disabled} color='mdb-color' onclick={this.add} > Add </Button>
                        </Paper>
                    </Grid>
                </Grid>
                <Grid justify='center' container spacing={3}>
                    <Grid item xs={12} sm={12} lg={5}>
                        {
                            todos.map((val, ind) => {
                                return <div key={ind}>
                                    {
                                        val.edit ?
                                            <div key={ind} style={{textAlign:"center"}}>
                                                <input style={{width:'300px',padding:'10px'}} disabled={val.edit} value={val.value} />
                                                <Button color='dark-green'   onclick={() => {
                                                    this.setState({ update: val.value })
                                                    this.props.editValue(ind, val)
                                                }
                                                }
                                                > Edit </Button>
                                                <Button color="danger"  onclick={() => this.props.deleteValue(ind, val)}> Delete </Button>
                                            </div> :
                                            <div key={ind} style={{textAlign:'center'}}>
                                                <input style={{width:'280px',padding:'10px'}} disabled={val.edit} value={this.state.update} onChange={(e) => this.setState({ update: e.target.value })} />
                                                <Button color='dark-green'  onclick={() => this.props.updateValue(ind, this.state.update, val)}> update </Button>
                                                <Button color="danger" onclick={() => this.props.cancelValue(ind, val)}> cancel </Button>
                                            </div>
                                    }

                                </div>
                            })

                        }
                    </Grid>
                </Grid>

            </div>
        )
    }
}


const mapStateToProps = data => {
    return {
        todos: data.list
    }
}

const mapDispatchToProps = dispatch => {
    return {
        addList: (name) => dispatch(addList(name)),
        editValue: (ind, val) => dispatch(editValue(ind, val)),
        deleteValue: (ind, val) => dispatch(deleteValue(ind, val)),
        cancelValue: (ind, val) => dispatch(cancelValue(ind, val)),
        updateValue: (ind, updateval, val) => dispatch(updateValue(ind, updateval, val)),
        getData: () => dispatch(getData()),
    }
}





export default connect(mapStateToProps, mapDispatchToProps)(Home)




