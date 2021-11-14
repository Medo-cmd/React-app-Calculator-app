import { useState } from 'react';


function App() {
	const [calc, setCalc] = useState("");

    const [result, setResult] = useState("");

	const ops =['/', '*', '-', '.', '+']; 

	const updateCalc =value =>{
		// if the  value is opreation or the last value is an opreation  dont return any thing
		if (ops.includes(value) && calc ==='' || ops.includes(value) && ops.includes(calc.slice(-1))
			) 
			{
			return;
		}

          //else
		//  set the state as : (old value + new value) if the value is not an Operation
		setCalc( calc + value );
        
		if (!ops.includes(value)) {
			
			setResult(eval(calc + value).toString())
		}
	}


    // creat buttons from 1 to 9  and wenn I click update the calc value state
	const creatDigits=()=>{
		const digits =[];

		for (let i = 1;i<10;i++){
            digits.push(
				<button onClick={() => updateCalc(i.toString()) } key={i}>
				{i}
				</button>
			)
		}
		return digits;
		
	}

  // calculat the Result 
	const calculate =()=>{
		setCalc(eval(calc).toString());
	} 

	// clear the digits one bei one 
	const clearDigits =()=>{
		if (calc ==='') {
			return;
		}
		const value = calc.slice(0, -1);

		setCalc(value);
	}
	


	return (
		<div className="App">
        <div className='calculator'>
			<div className='display'>
				{result ? <span>({result})</span> : '' }&nbsp;
				
		
				{ calc || '0' }

			</div>

			<div className='operators'>
				<button onClick={() => updateCalc('/') }>/</button>
				<button onClick={() => updateCalc('*')}>*</button>
				<button onClick={() => updateCalc('+')}>+</button>
				<button onClick={() => updateCalc('-')}>-</button>

				<button onClick={clearDigits}>DEL</button>
			</div>

            <div className='digits'>
				  {creatDigits()}
				<button onClick={() => updateCalc('0')}>0</button>
				<button onClick={() => updateCalc('.')}>.</button>


				<button onClick={calculate}>=</button>
			
			</div>
			
		</div>

		 
		
</div>

	);
}

export default App;
