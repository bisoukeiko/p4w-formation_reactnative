const Tutorials = (props) => {

    // console.log(props);

    setTimeout(() => {
        props.history.push('/')

    }, 5000);



    return (
        <div className="container mt-3">
          
            <div className="alert alert-warning alert-dismissible fade show mt-3" role="alert">
                <strong>Oups,</strong> this page is under construction.
                You will de redirected to the Docs paage is 5 secondes.
                <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
            </div>



            <h1>Tutorial: Into to React</h1>
        </div>
    )
}

export default Tutorials;