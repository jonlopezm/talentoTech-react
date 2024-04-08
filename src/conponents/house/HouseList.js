import { useGetHousesQuery, useDeleteHouseMutation } from "../../features/api/apiHousesSlice";
import { Link } from "react-router-dom";
import Swal from 'sweetalert2';


export default function HouseList() {

    const { data: houses, isLoading, isFetching, isError, error } = useGetHousesQuery();
    const [deleteHouse] = useDeleteHouseMutation();
    const handleDelete = (house) => {
        Swal.fire({
            title: `Are you sure you want to delete this House${house.code}?`,
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: `Yes`,
            denyButtonText: `No`,
        }).then((result) => {
            if (result.isConfirmed) {
                deleteHouse(house._id)
            } else if (result.isDenied) {
                Swal.fire('Changes are not saved', '', 'info')
            }
        })
    }
    if (isLoading) return <div role="status" className='flex justify-center'>
        <svg aria-hidden="true" className="w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
            <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
        </svg>
        <span className="sr-only">Loading...</span>
    </div>;
    else if (isError) return (<div>Error: {error.message} </div>)

    console.log(houses);

    return (
        <div className="flex justify-center py-8 px-10">
            <table className="table-auto w-full">
                <thead>
                    <tr>
                        <th className="border border-slate-300 whitespace-nowrap px-1 py-1 font-medium text-blue-800">Code</th>
                        <th className="border border-slate-300 whitespace-nowrap px-1 py-1 font-medium text-blue-800">Address</th>
                        <th className="border border-slate-300 whitespace-nowrap px-1 py-1 font-medium text-blue-800">City</th>
                        <th className="border border-slate-300 whitespace-nowrap px-1 py-1 font-medium text-blue-800">State</th>
                        <th className="border border-slate-300 whitespace-nowrap px-1 py-1 font-medium text-blue-800">Size</th>
                        <th className="border border-slate-300 whitespace-nowrap px-1 py-1 font-medium text-blue-800">Type </th>
                        <th className="border border-slate-300 whitespace-nowrap px-1 py-1 font-medium text-blue-800">ZipCode</th>
                        <th className="border border-slate-300 whitespace-nowrap px-1 py-1 font-medium text-blue-800">Rooms</th>
                        <th className="border border-slate-300 whitespace-nowrap px-1 py-1 font-medium text-blue-800">Bathrooms</th>
                        <th className="border border-slate-300 whitespace-nowrap px-1 py-1 font-medium text-blue-800">Price</th>
                        <th className="border border-slate-300 whitespace-nowrap px-1 py-1 font-medium text-blue-800">Avatar </th>
                    </tr>
                </thead>
                <tbody className="bg-gray-200">
                {houses.map(house => (
                    <tr key={house.id}>
                    <td className="border border-slate-300 whitespace-nowrap px-1 py-1 font-medium text-black-800" >{house.code}</td>
                    <td className="border border-slate-300 whitespace-nowrap px-1 py-1 font-medium text-black-800" >{house.address}</td>
                    <td className="border border-slate-300 whitespace-nowrap px-1 py-1 font-medium text-black-800" >{house.city}</td>
                    <td className="border border-slate-300 whitespace-nowrap px-1 py-1 font-medium text-black-800" >{house.state}</td>
                    <td className="border border-slate-300 whitespace-nowrap px-1 py-1 font-medium text-black-800" >{house.size}</td>
                    <td className="border border-slate-300 whitespace-nowrap px-1 py-1 font-medium text-black-800" >{house.type}</td>
                    <td className="border border-slate-300 whitespace-nowrap px-1 py-1 font-medium text-black-800" >{house.zipCode}</td>
                    <td className="border border-slate-300 whitespace-nowrap px-1 py-1 font-medium text-black-800" >{house.rooms}</td>
                    <td className="border border-slate-300 whitespace-nowrap px-1 py-1 font-medium text-black-800" >{house.bathrooms}</td>
                    <td className="border border-slate-300 whitespace-nowrap px-1 py-1 font-medium text-black-800" >{house.price}</td>
                    <td className="border border-slate-300 whitespace-nowrap px-1 py-1 font-medium text-black-800">
                            <img className="size-20 transition-transform duration-300 transform hover:scale-110"
                            src={`http://localhost:3010/${house.image}`} alt="" />
                        </td>
                    <td className="border-y-2 px-4 py-2 border-indigo-600">
                    <div className="inline-flex rounded-md shadow-sm" role="group">
                    <Link to={`/house/${house._id}`} 
                            className="px-4 py-2 text-sm font-medium text-gray-900 bg-transparent border
                                         border-gray-900 rounded-s-lg hover:bg-gray-900 hover:text-white 
                                         focus:z-10 focus:ring-2 focus:ring-gray-500 focus:bg-gray-900 focus:text-white dark:border-white
                                         dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:bg-gray-700">Edit</Link>
                    <button type="button" 
                            onClick={()=>{
                                handleDelete(house)
                            }}
                            className="px-4 py-2 text-sm font-medium text-gray-900 bg-transparent border-t border-b border-gray-900 hover:bg-gray-900 hover:text-white focus:z-10 focus:ring-2 focus:ring-gray-500 focus:bg-gray-900 focus:text-white dark:border-white dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:bg-gray-700">
                        Delete
                    </button>
                    </div>
                    </td>
                </tr>
                 ))}
            </tbody>
        </table>   
             </div >    
         );
}

