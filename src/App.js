import React, { useState } from 'react';
import './App.css';
import { evaluate } from 'mathjs'
import { RiNumber0,RiNumber1, RiNumber2, RiNumber3, RiNumber4, 
  RiNumber5, RiNumber6, RiNumber7, RiNumber8, RiNumber9, RiSubtractFill,
   RiAddLine,RiDivideLine, RiSingleQuotesR, RiArrowLeftSLine, RiCloseFill} from 'react-icons/ri';
import {TbLetterC} from 'react-icons/tb'
import {FaEquals} from 'react-icons/fa'
import Titulo from './Titulo';
function App() {

  const [vponto, setVponto] = useState(false);
  const [vmais, setVmais] = useState(true);
  const [vmenos, setVmenos] = useState(true);
  const [vmult, setVmult] = useState(false);
  const [vdiv, setVdiv] = useState(false);
 


const [calc , setCalc] =useState("")
const [resp , setResp] =useState("")

function clic1 (){
  setVponto(true)
  setVmais(true)
  setVmenos(true)
  setVmult(true)
  setVdiv(true)
  setCalc(calc+"1")

}
function clic2 (){
  setVponto(true)
  setVmais(true)
  setVmenos(true)
  setVmult(true)
  setVdiv(true)
  setCalc(calc+"2")

}
function clic3 (){
  setVponto(true)
  setVmais(true)
  setVmenos(true)
  setVmult(true)
  setVdiv(true)
  setCalc(calc+"3")

}
function clic4 (){
  setVponto(true)
  setVmais(true)
  setVmenos(true)
  setVmult(true)
  setVdiv(true)
  setCalc(calc+"4")

}
function clic5 (){
  setVponto(true)
  setVmais(true)
  setVmenos(true)
  setVmult(true)
  setVdiv(true)
  setCalc(calc+"5")

}
function clic6 (){
  setVponto(true)
  setVmais(true)
  setVmenos(true)
  setVmult(true)
  setVdiv(true)
  setCalc(calc+"6")

}
function clic7 (){
  setVponto(true)
  setVmais(true)
  setVmenos(true)
  setVmult(true)
  setVdiv(true)
  setCalc(calc+"7")

}
function clic8 (){
  setVponto(true)
  setVmais(true)
  setVmenos(true)
  setVmult(true)
  setVdiv(true)
  setCalc(calc+"8")

  
}
function clic9 (){
  setVponto(true)
  setVmais(true)
  setVmenos(true)
  setVmult(true)
  setVdiv(true)
  setCalc(calc+"9")

}
function clic0 (){
  setVponto(true)
  setVmais(true)
  setVmenos(true)
  setVmult(true)
  setVdiv(true)
  
  setCalc(calc+"0")

  
}
function clicp (){
  setCalc(calc+"-")
  setVponto(false)
  setVmais(false)
  setVmenos(false)
  setVmult(false)
  setVdiv(false)
  
  setCalc(calc+".")
}
function clicmais(){
  setCalc(calc+"-")
  setVponto(false)
  setVmais(false)
  setVmenos(false)
  setVmult(false)
  setVdiv(false)

  setCalc(calc+" + ")
}

function clicmenos (){
 
  setCalc(calc+" - ")
  setVponto(false)
  setVmais(false)
  setVmenos(false)
  setVmult(false)
  setVdiv(false)

}
function clicdiv (){

  setVponto(false)
  setVmais(false)
  setVmenos(false)
  setVmult(false)
  setVdiv(false)
  setCalc(calc+" / ")
}
function clicmult (){

  setVponto(false)
  setVmais(false)
  setVmenos(false)
  setVmult(false)
  setVdiv(false)
  setCalc(calc+" * ")
}

function clicigual (){
if (calc === " + " || calc === " - " || calc.endsWith("+ ") || calc.endsWith("- ") || calc.endsWith("* ") || calc.endsWith("/ ")){
  setCalc("")

  setVponto(false)
  setVmais(true)
  setVmenos(true)
  setVmult(false)
  setVdiv(false)
}else{
  var resultado = resp+calc
  setCalc("")
  setResp(parseFloat(evaluate(resultado))) //usando a funcao evaluate para converter a string para um calculo
  setVponto(false)
  setVmais(true)
  setVmenos(true)
  setVmult(true)
  setVdiv(true)
  console.log(calc)
  
}
}
function clicapagar (){
  setCalc(calc.slice(0, -1));
}

function clicclear (){
  setCalc("")
  setVponto(false)
  setVmais(true)
  setVmenos(true)
  setVmult(false)
  setVdiv(false)
  setResp("")
}


  return (
    <div className="App">
      <h2 className="titulo">Calculadora</h2>

      <div className="containerCalculadora">
        <div className="tela">
          <p>{resp}{calc}</p>

        </div>

        <div className="containerTeclado">
            <div className="operacoes">
              <div onClick={() => vmais && clicmais()} className="teclaOperacao"><RiAddLine size={32}/></div>
              <div onClick={() => vmenos && clicmenos()} className="teclaOperacao"><RiSubtractFill size={32}/></div>
              <div onClick={() => vdiv && clicdiv()} className="teclaOperacao"><RiDivideLine size={32}/></div>
              <div onClick={() => vmult && clicmult()} className="teclaOperacao"><RiCloseFill size={32}/></div>
            </div>

          <div className="teclado">

            <div className="tecladoNumerico">
                <div onClick={clic1} className="teclaNumerica"><RiNumber1 /></div>
                <div onClick={clic2} className="teclaNumerica"><RiNumber2 /></div>
                <div onClick={clic3} className="teclaNumerica"><RiNumber3 /></div>

                <div onClick={clic4} className="teclaNumerica"><RiNumber4 /></div>
                <div onClick={clic5} className="teclaNumerica"><RiNumber5 /></div>
                <div onClick={clic6}className="teclaNumerica"><RiNumber6 /></div>

                <div onClick={clic7}className="teclaNumerica"><RiNumber7 /></div>
                <div onClick={clic8}className="teclaNumerica"><RiNumber8 /></div>
                <div onClick={clic9}className="teclaNumerica"><RiNumber9 /></div>

                <div onClick={clic0} className="teclaNumerica zero"><RiNumber0 /></div>
                <div onClick={() => vponto && clicp()}className="teclaNumerica"><RiSingleQuotesR /></div>
            

            </div>

            <div className="acoes">
                <div onClick={clicapagar} className="teclaAcao"><RiArrowLeftSLine size={32}/></div>
                <div onClick={clicclear} className="teclaAcao"><TbLetterC size={32}/></div>
                <div onClick={clicigual} className="teclaAcao igual"><FaEquals size={32}/></div>

              </div>
              

            

                      
          </div>

         
          
          

        </div>



      </div>
      <Titulo />
    </div>
  );
}

export default App;
