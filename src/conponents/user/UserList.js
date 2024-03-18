export default function UserList({ users }) {
    const users = useSelector(state => state.users)
    console.log(users)

    return ( 
        <div className="flex justify-center py-8 px-10">
        <table className="table-auto w-full">
                <thead>
                    <tr>
                        <th className="border border-slate-300 whitespace-nowrap px-1 py-1 font-medium text-blue-800">Name</th>
                        <th className="border border-slate-300 whitespace-nowrap px-1 py-1 font-medium text-blue-800">LastName</th>
                        <th className="border border-slate-300 whitespace-nowrap px-1 py-1 font-medium text-blue-800">Email</th>
                        <th className="border border-slate-300 whitespace-nowrap px-1 py-1 font-medium text-blue-800">Identification</th>
                        <th className="border border-slate-300 whitespace-nowrap px-1 py-1 font-medium text-blue-800">Avatar </th>
                    </tr>
                </thead>
                <tbody className="bg-gray-200">
                {users.map(user => (
                    <tr key={user.id}>
                        <td className="border border-slate-300 whitespace-nowrap px-1 py-1 font-medium text-black-800" >{user.name}</td>
                        <td className="border border-slate-300 whitespace-nowrap px-1 py-1 font-medium text-black-800" >{user.lastname}</td>
                        <td className="border border-slate-300 whitespace-nowrap px-1 py-1 font-medium text-black-800" >{user.email}</td>
                        <td className="border border-slate-300 whitespace-nowrap px-1 py-1 font-medium text-black-800" >{user.id}</td>
                        <td className="border border-slate-300 whitespace-nowrap px-1 py-1 font-medium text-black-800">
                            <img className="size-20 transition-transform duration-300 transform hover:scale-110"
                            src={user.avatar} alt="" />
                        </td>
                        <td className="border-y-2 px-4 py-2 border-indigo-600">
                        <div className="inline-flex rounded-md shadow-sm" role="group">
                        <Link to={`/user/${user._id}`} 
                                className="px-4 py-2 text-sm font-medium text-gray-900 bg-transparent border
                                             border-gray-900 rounded-s-lg hover:bg-gray-900 hover:text-white 
                                             focus:z-10 focus:ring-2 focus:ring-gray-500 focus:bg-gray-900 focus:text-white dark:border-white
                                             dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:bg-gray-700">Edit</Link>
                        <button type="button" className="px-4 py-2 text-sm font-medium text-gray-900 bg-transparent border-t border-b border-gray-900 hover:bg-gray-900 hover:text-white focus:z-10 focus:ring-2 focus:ring-gray-500 focus:bg-gray-900 focus:text-white dark:border-white dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:bg-gray-700">
                            Delete
                        </button>
                        </div>
                        </td>
                    </tr>
                     ))}
                </tbody>
            </table>   
        </div>    
    );
}