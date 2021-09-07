const Home = (): any => {
    return (
        <div>
            <button onClick={(): any => { window.open(`${window.location.origin}/jitsi`, '_blank') }}>Open meet</button>
        </div>
    )
}
export default Home;