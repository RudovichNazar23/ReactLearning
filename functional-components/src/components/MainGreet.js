function Welcome({ name }){
    return (
        <section>
            <h3>Welcome, {name}!</h3>
        </section>
    )
}


function MainGreet({ name, }){
    return ( 
        <main className="m-3 p-2">
            <Welcome name={name}></Welcome>
        </main>
    );
}

export default MainGreet;
