import { useEffect, useState } from "react"

const HookUseEffect = () => {

    // useEffect sem dependência
    useEffect(() => {
        console.log('Estou sendo executado sempre que o componente muda!')

    })
    
    const [number, setNumber] = useState(1)

    const changeNumber = () => {
        setNumber(number + 1)
    }

    // array de dep. vazio
    useEffect(() => {
        console.log('Serei executado um vez!')
    }, [])

    // array de dep. preenchido
    const [anotherNumber, setAnotherNumber] = useState(1)

    useEffect(() => {
			console.log("Serei executado sempre que a dependência mudar!");
		}, [anotherNumber]);

  return (
    <div>
        <h2>useEffect</h2>
        <p>Number: {number}</p>
        <button onClick={changeNumber}>executar</button>

        <p>Another Number: {anotherNumber}</p>
        <button onClick={() => setAnotherNumber(anotherNumber + 1)}>executar</button>
        <hr />
    </div>
  )
}

export default HookUseEffect