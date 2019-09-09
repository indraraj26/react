class MACHINE extends React.Component {
    render() {
        console.log(this.props)
       const {s1, s2 , s3, color} = this.props;
        let winner; 
        if((s1 === s2) && (s2 === s3)) {
            winner = <h1 className="win">You win</h1>
        } else {
            winner = <h1>You loose</h1>
        }
        return(
            <div className="MACHINE">
                 <h1 style={{color}}>{s1} {s2} {s3}</h1>
                 {winner}
            </div>
        )
    }
}
