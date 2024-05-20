const ChildrenExplanation = () => {
    return (
    <ChildComponent>
        <div>Navbar</div>
        <main>
            <h1>Hello world</h1>
        </main>
        <footer>
            <a href="">Facebook</a>
        </footer>
    </ChildComponent>
    )
}

const ChildComponent = ({children}) => {
    // const {msg = "bye", children} = props
    return <div>
        {children}
    </div>
}

export default ChildrenExplanation