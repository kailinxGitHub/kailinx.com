import React from 'react'
import ReactDOM from 'react-dom/client'
import './styles/index.css'
import TopSection from "./TopSection.jsx";

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <div className="flex flex-col items-center justify-center h-screen mx-auto left-0 top-0 w-full">
            <TopSection />
        </div>
    </React.StrictMode>,
)
