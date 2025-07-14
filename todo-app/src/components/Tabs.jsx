export function Tabs(props) {
    const tabs = ['All', 'Active', 'Finished']
    const {todos, selectedTab, setSelectedTab} = props
    return (
       <nav>
        {tabs.map((tab, tabIndex) =>{
           // Calculate the number of tasks for each tab
           const numOfTasks = tabs === 'All' ? todos.length : tab==='Active' ? todos.filter(todo => !todo.finished).length : todos.filter(todo => todo.finished).length;
            
            return(
                <button onClick={() => setSelectedTab(tab)} key={tabIndex} className={"tab-button " + (tab === selectedTab ? 'tab-selected' : '')}>
                    <h4>{tab} <span>({numOfTasks})</span></h4>
                </button>
            )
        })}
        <hr />
       </nav>
    )
}