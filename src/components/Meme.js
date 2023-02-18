function Meme(){
    return(
        <main className="meme">
            <form className="form">
                <input className="form-input" type="text" placeholder="Top text"/> 
                <input className="form-input" type="text" placeholder="Bottom text"/> 
                <button className="form-btn">Get a new meme image  🖼</button>
            </form>
        </main>
    )
}

export default Meme