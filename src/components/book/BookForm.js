import React from 'react';

class BookForm extends React.Component{
  
  
  constructor(props){
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  

  handleSubmit(e) {
    e.preventDefault();

    let loginInput = {title: this.refs.titleInput.value,
      author: this.refs.authorInput.value,
      price: this.refs.priceInput.value,
      year: this.refs.yearInput.value
    };
    this.props.submitBook(loginInput);
    // Reset form
    e.target.reset();

  }

  render(){
    // Collector variables
    return (
      <form ref="form" onSubmit={this.handleSubmit}
            className="form-horizontal"
      >
        <div className="input-group">
          <label className="col-sm-2 control-label">Title: </label>
          <div className="col-sm-10">
            <input
              type="text"
              name="title"
              ref="titleInput"
              className="form-control" />
          </div>
        </div>
        <br/>
        <div className="input-group">
          <label className="col-sm-2 control-label">Author: </label>
          <div className="col-sm-10">
            <input
              type="text"
              name="author"
              ref="authorInput"
              className="form-control" />
          </div>
        </div>
        <br/>
        <div className="input-group">
          <label className="col-sm-2 control-label">Price: </label>
          <div className="col-sm-10">
            <input
              type="number"
              name="price"
              ref="priceInput"
              className="form-control" />
          </div>
        </div>
        <br/>
        <div className="input-group">
          <label className="col-sm-2 control-label">Year: </label>
          <div className="col-sm-10">
            <input
              type="text"
              name="year"
              ref="yearInput"
              className="form-control" />
          </div>
        </div>
        <br/>
        <div className="input-group">
          <div className="col-sm-offset-2 col-sm-10">
            <input type="submit" className="btn btn-default"/>
          </div>
        </div>
      </form>
    );
  }
  
}

export default BookForm;