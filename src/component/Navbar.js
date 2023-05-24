import React from 'react'
const Navbar = (props) => {

    const [usermode,setUserMode] = props.modeUserState;
    const toggleMode = () => {
        if (usermode.color === 'black') {
            
            setUserMode(
                {
                    backgroundColor: 'black',
                    color: 'white'
                }
            )
            props.showAlert("Light Mode has been Activated","primary");
            
        }
        else {
            setUserMode(
                {
                    backgroundColor: 'white',
                    color: 'black'
                }
                )
                props.showAlert("Dark Mode has been Activated","primary");
        }
    }

    return (
        <>
            
            <nav className={ ` ${usermode.color==="white" ?  "navbar navbar-light bg-light  navbar-expand-lg" : "navbar  navbar-expand-lg navbar-dark bg-dark"}`} >
                <div className={`container-fluid`}>
                    <a className={"navbar-brand"} href="#">ToDo List</a>
                    <button className={`"navbar-toggler" ${usermode.color === 'white' ? document.body.style.backgroundColor ="white" :  document.body.style.backgroundColor ="grey" }`} type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">  
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item text-start">
                                <a className="nav-link active" aria-current="page" href="/">Home</a>
                            </li>
                        </ul>

                        <form className="d-flex" role="search">
                            {
                                <label className="switch">
                                    <input type="checkbox" onClick={toggleMode} />
                                    <span className="slider round"></span>
                                </label>
                            }
                        </form>
                    </div>
                </div>
            </nav>
        </>
    )
};


export default Navbar;

