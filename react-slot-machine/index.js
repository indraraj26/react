class SLOTMACHINE extends React.Component {
    render() {
     return (<div>
         <h1>Slot Machine!</h1>
         <MACHINE s1="x" s2="y" s3="z" color="blue"/>
         <MACHINE s1="x" s2="x" s3="x" color="yellow"/>
         <MACHINE s1="x" s2="y" s3="x" color="purple"/>
     </div>)

    }
}

ReactDOM.render(<SLOTMACHINE />, document.getElementById('root'));