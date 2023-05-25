import {useState} from "react";

export function App() {
    const [value, setValue] = useState("");
    const [result, setResult] = useState("");
    const [symbol, setSymbol] = useState();



    return (
        <div className={'page'}>
            <div className={'container'}>
                <div className={'screen'}>
                    {result}
                    {symbol}
                    {value}
                </div>
                <div className={'row'}>
                    <button onClick={()=>setValue(value + "1")}>1</button>
                    <button onClick={()=>setValue(value + "2")}>2</button>
                    <button onClick={()=>setValue(value + "3")}>3</button>
                    <button onClick={()=>{
                        setValue('');
                        setResult(value);
                        setSymbol(' × ');
                    }}>×</button>
                </div>
                <div className={'row'}>
                    <button onClick={()=>setValue(value + "4")}>4</button>
                    <button onClick={()=>setValue(value + "5")}>5</button>
                    <button onClick={()=>setValue(value + "6")}>6</button>
                    <button>÷</button>
                </div>
                <div className={'row'}>
                    <button onClick={()=>setValue(value + "7")}>7</button>
                    <button onClick={()=>setValue(value + "8")}>8</button>
                    <button onClick={()=>setValue(value + "9")}>9</button>
                    <button>+</button>
                </div>
                <div className={'row'}>
                    <button>C</button>
                    <button onClick={()=>setValue(value + "0")}>0</button>
                    <button onClick={()=>setValue(value + ",")}>,</button>
                    <button>-</button>
                </div>
                <button onClick={()=> {
                    const a = Number(result.replace(',','.'));
                    const b = Number(value.replace(',','.'));
                    if (symbol === ' × ') {
                        setValue((a * b).toString().replace('.',','));
                    }
                    setSymbol('');
                    setResult('');
                }}>=</button>
            </div>
        </div>
    );
}
