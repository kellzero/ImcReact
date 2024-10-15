import { useState } from 'react'

function App() {
  const [altura, setAltura] = useState ('');
  const [peso, setPeso] = useState ('');
  const [imc, setImc] = useState(null);
  const [classificacao, setClassificacao] = useState ('');
  const [erro, setErro] = useState('');

  const calcularImc =  (e) => {
    e.preventDefault();

    if(!altura || altura <= 0 ){
      setErro('Por favor, insira um altura válida maior que zero.');
      return;
    }

    if(!peso || peso <= 0 ){
      setErro('Por favor, insira um peso válido maior que zero.');
      return;
    }
    setErro('');
    
    const imcCalculado =(peso / (altura * altura)).toFixed(2);
    setImc(imcCalculado);
    classificarImc(imcCalculado);
  };

  const classificarImc = (imc) => {
    if (imc < 18.5) {
      setClassificacao('Abaixo do peso');
    } else if (imc >= 18.5 && imc < 24.9){
      setClassificacao('Peso normal');
    } else if (imc >= 25 && imc < 29.9){
      setClassificacao('Sobre peso');
    } else {
      setClassificacao('Obesidade');
    }
  };
  
  return ( 
    <div>
      <h1>Calculadora de IMC</h1>
      <form onSubmit={calcularImc}>
        <div>
          <label>Altura (m)</label>
          <input type="number" value={altura} onChange={(e) => setAltura(e.target.value)} placeholder="Ex: 1.75" />
        </div>
        <div>
          <label>Peso (kg)</label>
          <input type="number" value={peso} onChange={(e) => setPeso(e.target.value)} placeholder="Ex: 70" />
        </div>
        <button type='submit'>Calcular IMC</button>
      </form>

      {erro && <p style={{color: 'red'}}>{erro}</p>}
  
      {imc && (
        <div>
          <h2>Seu IMC: {imc}</h2>
          <h3>Classificação: {classificacao}</h3>
        </div>
      )}
    </div>
  );
}  



export default App
