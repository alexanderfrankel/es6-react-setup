import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      input: '/* add your jsx here */',
      output: '',
      err: ''
    }
    this.update = this.update.bind(this);
  }
  update(e){
    let code = e.target.value;
    console.log(code)
    try {
      this.setState({
        output: babel.transform(code, {
          stage: 0,
          loose: 'all'
        }).code,
        err: ''
      })
    }
    catch(err){
      this.setState({err: err.message})
    }
  }
  render(){
    return (
      <div>
        <header>{this.state.err}</header>
        <div className="container">
          <textarea
            onChange={this.update}
            defaultValue={this.state.input}>
          </textarea>
          <pre>
            {this.state.output}
          </pre>
        </div>
      </div>
    )
  }
}

export default App

// class App extends React.Component {
//   constructor(){
//     super();
//     this.state = {data: [
//       {id: 1, name: "Simon Bailey"}, {id: 2, name: "Thomas Burleson"},
//       {id: 3, name: "Will Button"}, {id:4, name: "Ben Clink"},
//       {id: 5, name: "Will Button"}, {id:6, name: "Ben Clink"},
//       {id: 7, name: "Will Button"}, {id:8, name: "Ben Clink"},
//       {id: 9, name: "Will Button"}, {id:10, name: "Ben Clink"},
//       {id: 11, name: "Will Button"}, {id:12, name: "Ben Clink"},
//       {id: 13, name: "Will Button"}, {id:14, name: "Ben Clink"},
//       {id: 15, name: "Will Button"}, {id:16, name: "Ben Clink"},
//     ]}
//   }
//   render(){
//     let rows = this.state.data.map(person => {
//       return <PersonRow key={person.id} data={person} />
//     })
//     return <table>
//       <tbody>{rows}</tbody>
//     </table>
//   }
// }
//
// const PersonRow = (props) => {
//   return <tr>
//     <td>{props.data.id}</td>
//     <td>{props.data.name}</td>
//   </tr>
// }
//
// export default App
// let Mixin = InnerComponent => class extends React.Component {
//   constructor(){
//     super();
//     this.update = this.update.bind(this);
//     this.state = {val: 0}
//   }
//   update(){
//     this.setState({val: this.state.val + 1})
//   }
//   componentWillMount(){
//     console.log('will mount')
//   }
//   render(){
//     return <InnerComponent
//       update={this.update}
//       {...this.state}
//       {...this.props} />
//   }
//   componentDidMount(){
//     console.log('mounted')
//   }
// }
//
// const Button = (props) => <button onClick={props.update}> {props.txt} - {props.val} </button>
//
// const Label = (props) => <label onMouseMove={props.update}> {props.txt} - {props.val} </label>
//
// let ButtonMixed = Mixin(Button)
// let LabelMixed = Mixin(Label)
//
// class App extends React.Component {
//   render(){
//     return (
//       <div>
//         <ButtonMixed txt="Button" />
//         <LabelMixed txt="Label" />
//       </div>
//     )
//   }
// }
//
// export default App

// class App extends React.Component {
//   constructor(){
//     super();
//     this.update = this.update.bind(this);
//     this.state = {increasing: false}
//   }
//   update(){
//     ReactDOM.render(
//       <App val={this.props.val+1} />,
//       document.getElementById('app')
//     );
//   }
//   componentWillReceiveProps(nextProps){
//     this.setState({increasing: nextProps.val > this.props.val})
//   }
//   shouldComponentUpdate(nextProps, nextState) {
//     return nextProps.val % 5 === 0;
//   }
//   render(){
//     console.log(this.state.increasing)
//     return (
//       <button onClick={this.update}>
//         {this.props.val}
//       </button>
//     )
//   }
//   componentDidUpdate(prevProps, prevState) {
//     console.log('prevProps', prevProps)
//   }
// }
//
// App.defaultProps = { val: 0 }
//
// export default App

// class App extends React.Component {
//   constructor(){
//     super();
//     this.state = { val: 0 };
//     this.update = this.update.bind(this);
//   }
//   update(){
//     this.setState({val: this.state.val + 1})
//   }
//   componentWillMount(){
//     this.setState({m: 2})
//   }
//   render(){
//     console.log('rendering!')
//     return (
//       <button onClick={this.update}>
//         {this.state.val * this.state.m}
//       </button>
//     )
//   }
//   componentDidMount(){
//     this.inc = setInterval(this.update, 500)
//   }
//   componentWillUnmount(){
//     clearInterval(this.inc)
//   }
// }
//
// class Wrapper extends React.Component {
//   constructor(){
//     super();
//   }
//   mount(){
//     ReactDOM.render(<App />, document.getElementById('a'))
//   }
//   unmount(){
//     ReactDOM.unmountComponentAtNode(document.getElementById('a'))
//   }
//   render(){
//     return (
//         <div>
//           <button onClick={this.mount.bind(this)}>Mount!</button>
//           <button onClick={this.unmount.bind(this)}>Unmount!</button>
//           <div id="a"></div>
//         </div>
//
//     )
//   }
// }


// class App extends React.Component {
//   constructor(){
//     super();
//     this.state = {
//       red: 0,
//     }
//     this.update = this.update.bind(this)
//   }
//   update(e){
//     this.setState({
//       red: ReactDOM.findDOMNode(this.refs.red.refs.inp).value,
//     })
//   }
//   render(){
//     return (
//       <div>
//         <NumInput
//           ref="red"
//           min={0}
//           max={255}
//           step={6}
//           val={+this.state.red}
//           type="number"
//           label="Red"
//           update={this.update} />
//       </div>
//     );
//   }
// }
//
// class NumInput extends React.Component {
//   render() {
//     let label = this.props.label !== '' ?
//       <label>{this.props.label} - {this.props.val}</label> : ''
//     return (
//       <div>
//       <input ref="inp"
//         type={this.props.type}
//         min={this.props.min}
//         max={this.props.max}
//         step={this.props.step}
//         defaultValue={this.props.val}
//         onChange={this.props.update} />
//         {label}
//       </div>
//     );
//   }
// }
//
// NumInput.propTypes = {
//   min: React.PropTypes.number,
//   max: React.PropTypes.number,
//   step: React.PropTypes.number,
//   val: React.PropTypes.number,
//   label: React.PropTypes.string,
//   update: React.PropTypes.func.isRequired,
//   type: React.PropTypes.oneOf(['number', 'range'])
// }
//
// NumInput.defaultProps = {
//   min: 0,
//   max: 0,
//   step: 1,
//   val: 0,
//   label: '',
//   type: 'range'
// }
//
// export default App

// App.propTypes = {
//   txt: React.PropTypes.string,
//   cat: React.PropTypes.number.isRequired
// }

// App.defaultProps = {
//   txt: 'this is the default txt'
// }

