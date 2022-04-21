import Header from "./components/Header";

const EventsPage = () => {
    return(
        <div>
            <Header />
            <div className="pt-20 px-5">
                <h1 className="text-2xl border-b border-gray-500 pb-5">Upcoming Events</h1>
                <button className="p-3 bg-gray-800 text-white mt-5">Schedule Event</button>
            </div>
        </div>
    )
}

export default EventsPage;