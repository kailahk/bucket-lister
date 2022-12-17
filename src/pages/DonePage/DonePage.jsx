import DoneListItem from "../../components/DoneListItem/DoneListItem";
import "./DonePage.css"

export default function DonePage({listItems}) {
    const doneItems = listItems.filter((dli) => dli.completed === true)
    const doneItemObjects = doneItems.map((dio, idx) => <DoneListItem doneItemObject={dio} key={idx}/>)

    return (
        <main className="done-page">
            <h1>Done</h1>
            <div className="done-items">
                {doneItemObjects}
            </div>
        </main>
    );
}