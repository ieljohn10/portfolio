import './TopBar.scss'

export default function TopBar(){
    return(
        <div className='TopBar'>
            <h2>Logo Here</h2>
            <nav>
                <a href="#Home">Home</a>
                <a href="#Work">Work</a>
                <a href="#Contact">Contact</a>
            </nav>
        </div>
    )
}