export default function UserForm() {

    const dispatch = useDispatch();
    const navigate = useNavigate(); 
    const params = useParams(); 

    const handleSubmit = (e) => {
        e.preventDefault();
        const newUser = {
            name: e.target.name.value,
            lastname: e.target.lastname.value,
            email: e.target.email.value,
            id: e.target.id.value,
            password: e.target.password.value,
        }
        dispatch(addUser(newUser)) 
        
        navigate('/user') 
    }
   
    useEffect(() => {
        console.log(params.id)
    })

    return (
        <div className="max-w-md mx-auto px-5 py-5">
            <form action={handleSubmit} className="border-b border-gray-900/10 pb-12">
                <div className="mb-4">
                    <label className="block text-gray-700 font-bold mb-2">Name</label>
                    <input type="text" name="name" placeholder="Name" className="shadow apperance-none border w-full focus:shadow-outline " />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 font-bold mb-2">LastName</label>
                    <input type="text" name="lastname" placeholder="Lastname" className="shadow apperance-none border w-full focus:shadow-outline " />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 font-bold mb-2">Email</label>
                    <input type="text" name="email" placeholder="Email" className="shadow apperance-none border w-full focus:shadow-outline " />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 font-bold mb-2">Identificacion</label>
                    <input type="text" name="id" placeholder="Id" className="shadow apperance-none border w-full focus:shadow-outline " />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 font-bold mb-2">Password</label>
                    <input type="text" name="password" placeholder="Password" className="shadow apperance-none border w-full focus:shadow-outline " />
                </div>
                <div  className=" flex items-center justify-end gap-x-6">
                <button type="button" class="text-sm font-semibold leading-6 text-gray-900">Cancel</button>
                <button type="button" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Save</button>
                </div>
            </form>
        </div>
    );
}