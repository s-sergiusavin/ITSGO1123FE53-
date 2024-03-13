const FeaturesForm = () => {

    const [isFormValid, setFormValid] = useState();
    
    const submitHandler = () => {

    }
    return (
        <form className="form" onSubmit={submitHandler}>
            <div className="control">
                <label htmlFor="">Feature title</label>
                <input type="text" id="title" required />
            </div>
        </form>
    )
}

export default FeaturesForm;