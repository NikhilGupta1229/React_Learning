function AddToDo() {
    return(
        <div className="kg-row row">
          <div className="col-sm-6">
            <input type="text" placeholder="Enter TODO here" />
          </div>
          <div className="col-sm-4">
            <input type="date" placeholder="" />
          </div>
          <div className="col-sm-2">
            <button type="button" class="btn btn-success kg-button">
              ADD
            </button>
          </div>
        </div>
    )
}

export default AddToDo;