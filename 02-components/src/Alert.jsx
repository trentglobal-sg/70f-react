// React components can be in their own file
function Alert(props) {
  return (<div className="alert alert-danger">
      {props.msg}
    </div>)
}

// have to export for other JS files to use
export default Alert;