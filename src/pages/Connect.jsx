export default function Login() {
    return (
        <div className="flex justify-center items-center min-h-screen">
            <div className="card bg-base-100 p-6 shadow-lg w-96">
                <h2 className="text-xl font-bold mb-4">Login</h2>
                <input type="email" placeholder="Email" className="input input-bordered w-full mb-3" />
                <input type="password" placeholder="Password" className="input input-bordered w-full mb-3" />
                <button className="btn btn-primary w-full">Login</button>
            </div>
        </div>
    );
}
