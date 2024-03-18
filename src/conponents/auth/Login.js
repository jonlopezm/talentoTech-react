export default function Login() {
  return (
    <div className="max-w-md mx-auto px-15 py-20">
      <form action="" className="shadow-md rounded pt-6 pb-12 px-10 mb-4 ">
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2">Email</label>
          <input
            type="email"
            required
            name="email"
            placeholder="Email"
            className="shadow apperance-none border w-full 
                    focus:shadow-outline disabled:bg-slate-50 
                    disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
                    invalid:border-pink-500 invalid:text-pink-600
                    focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2">Password</label>
          <input
            type="password"
            required
            name="password"
            placeholder="Password"
            className="shadow apperance-none border w-full 
                    focus:shadow-outline disabled:bg-slate-50 
                    disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
                    invalid:border-pink-500 invalid:text-pink-600
                    focus:invalid:border-pink-500 focus:invalid:ring-pink-500 "
          />
        </div>
        <div className="mt-6 flex items-center justify-end gap-x-6">
          <button
            type="button"
            class="text-sm font-semibold leading-6 text-gray-900"
          >
            Cancel
          </button>
          <button
            type="sumbit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Login
          </button>
        </div>
      </form>
    </div>
  );
}
