import React,{useState} from 'react'
import './Board.css'
import { VscCircleFilled,VscOctoface } from "react-icons/vsc/";

const Board = () => {
    const [dice, setDice] = useState(1)
    const [init, setInit] = useState(0)
    const [pos, setPos] = useState(0)
    let value = 'class';
    let num = 1;
    function getDice() {
         var value = Math.floor(Math.random() * 7);
         if(value===0)
         {
            value+=1;
         }
         setDice(value)
         moveUser(value)
      }

      const moveUser=(value)=>{
      
            if(value===6 && init===0)
            {
                setInit(1)
                let val = document.querySelector(`.block${1}`).getAttribute('data-value');
                document.querySelector(`.block1`).innerHTML= '<i class="fa-solid fa-user "></i>'
                setPos(1)
            }else{
                let val = document.querySelector(`.block${pos}`).getAttribute('data-value');
                document.querySelector(`.block${pos}`).innerHTML = `<p>${val}</P>`
                let movepos = parseInt(val)+parseInt(value)
                document.querySelector(`.block${movepos}`).innerHTML= '<i class="fa-solid fa-user "></i>'
                setPos(movepos)
            }

      }
    return (
        <div className="container">
            <div className="row">              
                <div className="col-sm-10 my-2">
                    <div className="row ms-5 image-wrapper">
                        {
                            [...Array(100)].map( (e, i) => {
                                {num=i/2}
                                {num%2===0 ?value='color1':i%3===0? value='color2':i%7===0?value='color3':value='color4'}
                                return <div data-value={`${100-i}`} className={`blocks ${value} block${100-i}`}> <p>{100-i}  </p></div>
                            })
                        }
                        <img className='snake1' src={require('./image/snake (1).png')} alt="" />
                        <img className='snake2' src={require('./image/snake (2).png')} alt="" />
                        <img className='snake3' src={require('./image/snake (3).png')} alt="" />
                        <img className='snake4' src={require('./image/snake (4).png')} alt="" />
                    </div>
                </div>
                <div className="col-sm-2 my-2 border">
                    <div className="row ">
                        <div className="col-sm-12">
                            <button className="dice btn pb-3" onClick={getDice}>
                                {[...Array(dice)].map((e)=>{
                                    return <>
                                        <VscCircleFilled className='text-light' />
                                    </>
                                })}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Board