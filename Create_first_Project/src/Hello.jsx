function Hello() {

    let myname = 'NIKHIL';

    let fullname=() => {
        return "Nikhil Gupta"
    }
    return <h3>
        Hello this is the future Speaking.I am here {fullname()}.
    </h3>
}

export default Hello;