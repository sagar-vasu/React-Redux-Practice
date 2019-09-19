import React from "react";

const InputPage = (props) => {
  return (
    <div className="form-group">
      <label htmlFor="todo">Add Text</label>
      <input type="text" value={props.value} style={{width:'400px !important'}} id="todo" className="form-control" onChange={props.onChange} />
    </div>
  );
}

export default InputPage;