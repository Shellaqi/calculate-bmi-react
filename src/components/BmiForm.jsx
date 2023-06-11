const BmiForm = (props) => {
    const {height,weight, setHeight,setWeight,setResult} = props;

    function calculateBim(height,weight) {
      height = height / 100;
      let result = weight / (height * height);
    
      return result.toFixed(2);      
    }

    return <form>
        <div>
        <label name="height">Height:</label>
        <input 
            id="height" 
            type="text" 
            className="form-control" 
            value={height}
            onChange={e=> setHeight(e.target.value)}
            placeholder="Cm"/>
        </div>

        <div>
        <label name="weight">Weight:</label>
        <input 
            id="weight" 
            type="text" 
            className="form-control" 
            value={weight}
            onChange={e => setWeight(e.target.value)}
            placeholder="Kg"/>
        </div>

        <button 
            className="btn btn-success w-100"
            onClick = {() => {
                if(height < 100) {
                  alert("You need to input height > 100cm")
                  return;
                }
                if(weight < 50) {
                  alert("You need to input weight > 50kg")
                  return;
                }                
                const result = calculateBim(height,weight);
                setResult(result);
                console.log("result ", result);
                return;
              }
            }
        type='button'>Calculate</button>
  </form>
}

export default BmiForm;