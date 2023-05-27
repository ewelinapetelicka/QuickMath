import {useState} from "react";
import {operations} from "./operations";

export function App() {
    const [value, setValue] = useState("0");
    const [result, setResult] = useState("");
    const [symbol, setSymbol] = useState();

    function setOperation(sym) {
        setValue('0');
        setResult(value);
        setSymbol(sym);
    }

    function screenC() {
        setValue('0');
        setResult('');
        setSymbol('');
    }

    function changeValue(change) {
        if(value[0]==='0'&& change==='0') {
            return;
        }
        if(value[0]==='0' && change !== '0'){
            setValue(change);
        }else {
            setValue(value + change);
        }
    }

    function comma() {
        if (!value.includes(',')) {
            setValue(value + ",");
        }
        if (!value) {
            setValue('0,');
        }
    }

    function equal() {
        const a = Number(result.replace(',', '.'));
        const b = Number(value.replace(',', '.'));
        if (symbol === operations.multi) {
            setValue((a * b).toString().replace('.', ','));
        }
        if (symbol === operations.div) {
            setValue((a / b).toString().replace('.', ','))
        }
        if (symbol === operations.add) {
            setValue((a + b).toString().replace('.', ','))
        }
        if (symbol === operations.sub) {
            setValue((a - b).toString().replace('.', ','))
        }
        setSymbol('');
        setResult('');
    }

    return (
        <div className={'page'}>
            <div className={'container'}>
                <div className={'screen'}>
                    {result}
                    {symbol}
                    {value}
                </div>
                <div className={'row'}>
                    <button onClick={() => changeValue("1")}>1</button>
                    <button onClick={() => changeValue("2")}>2</button>
                    <button onClick={() => changeValue("3")}>3</button>
                    <button onClick={() => setOperation(operations.multi)}>×</button>
                </div>
                <div className={'row'}>
                    <button onClick={() => changeValue("4")}>4</button>
                    <button onClick={() => changeValue("5")}>5</button>
                    <button onClick={() => changeValue("6")}>6</button>
                    <button onClick={() => setOperation(operations.div)}>÷</button>
                </div>
                <div className={'row'}>
                    <button onClick={() => changeValue("7")}>7</button>
                    <button onClick={() => changeValue("8")}>8</button>
                    <button onClick={() => changeValue("9")}>9</button>
                    <button onClick={() => setOperation(operations.add)}>+</button>
                </div>
                <div className={'row'}>
                    <button onClick={() => screenC()}>C</button>
                    <button onClick={() => changeValue("0")}>0</button>
                    <button onClick={() => comma()}>,</button>
                    <button onClick={() => setOperation(operations.sub)}>-</button>
                </div>
                <button onClick={() => equal()}>=</button>
            </div>
        </div>
    );
}
