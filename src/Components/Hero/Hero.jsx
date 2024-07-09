export default function Hero() {
    return (
        <div className="bg-cover bg-center h-screen flex justify-center items-center text-white relative" style={{ backgroundImage: "url('https://plus.unsplash.com/premium_photo-1679941208910-cdeae091b777?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cHJvZ3JhbW1pbmclMjBsYW5ndWFnZSUyMGxvZ298ZW58MHx8MHx8fDA%3D')" }}>
            <div className="text-center">
                <h1 className="text-5xl font-bold mb-4">30 DAYS OF CODE</h1>
                <p className="text-xl mb-6">Your Pathway To Your Dream Tech Future</p>
                <div className="flex justify-center mb-6">
                    <input type="text" placeholder="Technology" className="p-2 m-2 text-black" />
                    <select className="p-2 m-2 text-black">
                        <option value="type">Type</option>
                        <option value="frontend">Frontend</option>  
                        <option value="backend">Backend</option>
                        <option value="fullstack">Full Stack</option>
                        <option value="devops">DevOps</option>
                        <option value="datascience">Data Science</option>
                    </select>
                    <button className="p-2 m-2 bg-black text-white">Search</button>
                </div>
                <p className="mb-4">Batch Registrations Are Opening Soon</p>
                <button className="p-2 px-4 bg-white text-black font-bold rounded-full">Sign Up Today</button>
            </div>
        </div>
    );
}