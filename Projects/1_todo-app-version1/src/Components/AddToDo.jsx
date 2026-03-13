function AddToDo() {
    return(
        <div class="kg-row row">
          <div class="col-sm-6">
            <input type="text" placeholder="Enter TODO here" />
          </div>
          <div class="col-sm-4">
            <input type="date" placeholder="" />
          </div>
          <div class="col-sm-2">
            <button type="button" class="btn btn-success kg-button">
              ADD
            </button>
          </div>
        </div>
    )
}

export default AddToDo;