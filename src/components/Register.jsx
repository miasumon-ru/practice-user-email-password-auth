


const Register = () => {

    const handleRegister = (e) => {
        e.preventDefault()
        console.log('working')

        const name = e.target.name.value
        const password = e.target.password.value
        const email = e.target.email.value

        console.log(name, password, email)
    }


    return (
        <div className="hero  bg-base-200 p-5 mt-16">
            <div className="hero-content flex-col">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Login now!</h1>
                    
                </div>
                <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleRegister} className="card-body">

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="name" name="name" placeholder="Name" className="input input-bordered" required />
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name="email" placeholder="Email" className="input input-bordered" required />
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name="password" placeholder="Password" className="input input-bordered" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>

                        <div className="form-control mt-6">
                            <input className="border  btn btn-primary  py-2 px-4 font-bold rounded-3xl" type="submit" value="Submit" />
                        </div>

                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;