import { UserButton } from "@clerk/nextjs";
import AddNewInterview from "./_components/addnewInterview";

export default function page() {
    return (
        <>
            {/* <div className="mb-9">
                <h2>Dashboard</h2>
                <h2 className="text-gray-500">Create and start your AI Mockup</h2>
            </div>
            <div className="">
                <AddNewInterview />
            </div> */}

            <div className="">
                <div className="items-start justify-between py-4 border-b">
                    <div className="">
                        <h3 className="text-gray-800 text-2xl font-bold">
                            Dashboard
                        </h3>
                        <p className="text-gray-600 mt-2">
                            Create and Start your AI Mockup interviews
                        </p>
                    </div>
                    {/* <div className="mt-6 md:mt-0">
                        <a
                            href="javascript:void(0)"
                            className="block px-4 py-2 text-center text-white duration-150 font-medium bg-indigo-600 rounded-lg hover:bg-indigo-500 active:bg-indigo-700 md:text-sm"
                        >
                            New member
                        </a>
                    </div> */}
                </div>
                <div className="mt-5">
                    <AddNewInterview />
                </div>
            </div>
        </>
    )
}