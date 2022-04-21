import { ChevronLeftIcon } from "@heroicons/react/outline";
import Header from "./components/Header";

const EventsPage = () => {
    return(
        <div>
            <Header />
            
            <div className="pt-20 px-5">
                <div>
                    <button><ChevronLeftIcon className="h-6 w-6 text-gray-400 relative -top-2"/></button>
                </div>
                <h1 className="text-2xl border-b border-gray-500 pb-3 relative -top-6 text-center">Upcoming Events</h1>
                <button className="p-3 bg-gray-800 text-white mt-0 absolute bottom-10">Schedule Event</button>
            </div>
        </div>
    )
}

export default EventsPage;