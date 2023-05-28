import {useState} from "react";
import {operations} from "./operations";

export function App() {
    const [value, setValue] = useState("0");
    const [result, setResult] = useState("");
    const [symbol, setSymbol] = useState();

    function setOperation(sym) {
        setValue('0');
        setResult(calculate());
        setSymbol(sym);
    }

    function screenC() {
        setValue('0');
        setResult('');
        setSymbol('');
    }

    function changeValue(change) {
        const first = value[0] === '-'? value[1] : value[0];
        if (value.includes(',')) {
            setValue(value + change)
        }else {
            if (first === '0' && change === '0') {
                setValue(value + ',');
            } else if (first === '0' && change !== '0') {
                setValue(change);
            } else {
                setValue(value + change);
            }
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
        setValue(calculate());
        setSymbol('');
        setResult('');
    }

    function undo() {
        if (value.length === 1) {
            setValue('0');
        } else {
            setValue(value.slice(0, -1));
        }
    }

    function negativePositive() {
        if (value[0] === '-') {
            setValue(value.slice(1));
        } else {
            setValue('-' + value);
        }
    }

    function calculate() {
        const a = Number(result.replace(',', '.'));
        const b = Number(value.replace(',', '.'));
        if (symbol === operations.multi) {
            return (a * b).toString().replace('.', ',');
        }
        if (symbol === operations.div) {
            return (a / b).toString().replace('.', ',');
        }
        if (symbol === operations.add) {
            return (a + b).toString().replace('.', ',');
        }
        if (symbol === operations.sub) {
            return (a - b).toString().replace('.', ',');
        }
        if (symbol === operations.perc) {
            return ((100 * a) / b).toString().replace('.', ',');
        }

        return b.toString().replace('.', ',');
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
                <div className={'row'}>
                    <button onClick={() => negativePositive()}>+/-</button>
                    <button onClick={() => setOperation(operations.perc)}>%</button>
                    <button onClick={() => undo()}>←</button>
                    <button onClick={() => equal()}>=</button>

                </div>
            </div>
        </div>
    );
}
