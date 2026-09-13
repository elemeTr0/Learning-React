interface CalculatorProps{
    setNumber: (c:number) => void
    setSign: (p:string) => void
}

export default function Calculator({setNumber, setSign}: CalculatorProps){
    return(
        <>
        <Button c={1} setNumber={setNumber}/>
        <Button c={2} setNumber={setNumber}/>
        <Button c={3} setNumber={setNumber}/>
        <Button p={'%'} setSign={setSign}/>
        <br></br>
        <Button c={4} setNumber={setNumber}/>
        <Button c={5} setNumber={setNumber}/>
        <Button c={6} setNumber={setNumber}/>
        <Button p={'*'} setSign={setSign}/>
        <br></br>
        <Button c={7} setNumber={setNumber}/>
        <Button c={8} setNumber={setNumber}/>
        <Button c={9} setNumber={setNumber}/>
        <Button p={'/'} setSign={setSign}/>
        <br></br>
        <Button c={0} setNumber={setNumber}/>
        <Button p={'-'} setSign={setSign}/>
        <Button p={'+'} setSign={setSign}/>
        <Button p={'C'} setSign={setSign}/>
        </>
    )
}
type NumberButton = {
    c: number;
    setNumber: (c: number) => void;
};

type SignButton = {
    p: string;
    setSign: (p: string) => void;
};

type ButtonProps = NumberButton | SignButton;
function Button(props: ButtonProps) {
    if ("c" in props) {
        return (
            <button onClick={() => props.setNumber(props.c)}>
                {props.c}
            </button>
        );
    } else {
        return (
            <button onClick={() => props.setSign(props.p)}>
                {props.p}
            </button>
        );
    }
}