import Header from "./components/Header"
import Entry from "./components/Entry"
import data from "./data"

/**
<Entry
    key={1}
    id={1}
    img={{
        src: "https://scrimba.com/links/travel-journal-japan-image-url",
        alt: "Mount Fuji"
    }}
    title="Mount Fuji"
    country="Japan"
    googleMapsLink="https://maps.app.goo.gl/6RLYZDuuuqJ7kNGZ9"
    dates="12 Jan, 2021 - 24 Jan, 2021"
    text="Mount Fuji is the tallest mountain..."
/>
 */

export default function App() {
    
    const entryElements = data.map((entry) => {
        return (
            <Entry
                key={entry.id}
                {...entry}
            />
        )
    })
    
    return (
        <>
            <Header />
            <main className="container">
                {entryElements}
            </main>
        </>
    )
}