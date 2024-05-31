function Settings (){
    return(
        <form>
            <div>Profile Pic</div>
            <button>Edit Picture</button>
            <br />
            <label>Name: <input placeholder='New Name'></input></label>
            <br/>
            <label>Bio: <input placeholder='New Bio'></input></label>
            <br>
            </br><button>Save Changes</button>
        </form>
    )
}

export default Settings