import React from "react";
import Square from "./Square";
import "./style.css";

//funtion Board()为函数组件
//改为class Board（）后变为class组件
class Board extends React.Component{
    constructor(props){
        super(props);
        this.state={
            squares:Array(9).fill(""),
            player:"x",
            winner:"",
            winnerArray:[],
            history:[
                {
                    squares:Array(9).fill(""),
                    player:"x",
                },
            ],
            step:1,
        };
    }
    render(){
        let { player, squares, winner } = this.state;
        let title = "";
        if (!winner) {
        title = <p>Current player：{player}</p>;
            } else {
        title = <p>Winner is：{winner}</p>;
            }
        return(
                <div className="board">
                <div className="game">
                <h1>井字棋游戏</h1>
                {title}
                {
                    //map遍历
                    this.state.squares.map((el,index)=>{
                        return (<Square 
                        key={index} 
                        player={el} 
                        index={index}
                        changePlayer={()=>{this.changePlayer(index)}}>
                        </Square>)
                    })
                }
                </div>
                
                <div className="back_step">
                    <h2>悔棋</h2>
                    {this.state.history.map((el,index)=>{
                        return(
                            <button className="back-step" key={index} 
                            onClick={()=>{this.backTo(index)}}>
                                {index===0?"Game start":"Back to step "+index}
                            </button>
                        )
                    }
                    )}
                </div>
            </div>
            
            
        );
    }

    changePlayer(index){
        if(this.state.winner) //胜利后点击切换动作不再生效
            return;

        let player=this.state.player==="x"?"o":"x";
        let squares=[...this.state.squares];
        let history=this.state.history.slice(0,this.state.step);
        
        if(squares[index]) return;//重复点击无效
        
        squares[index]=player;
        history.push(
            {
                squares,
                player,
            }
        )
        this.setState({
            player,
            squares,
            history,
            step:history.length,
        });

        let winner=this.calculateWinner(squares);
        if(winner){
            this.setState({
                winner:winner.squares,
                winnerArray:winner.winnerArray,
            })
        }

    }

    calculateWinner(squares){
        //穷举
        const lines=[
            [0,1,2],
            [3,4,5],
            [6,7,8],
            [0,3,6],
            [1,4,7],
            [2,5,8],
            [0,4,8],
            [2,4,6]
        ];
        for (let i = 0; i < lines.length; i++) {
            const [a, b, c] = lines[i];
            if (
              squares[a] &&
              squares[a] === squares[b] &&
              squares[a] === squares[c]
            ) {

              return {
                squares: squares[a],
                winnerArr: lines[i],
              };
            }
          }
          return null;
    }

    //回溯
    backTo(index){
        this.setState(
            ()=>{
                return{
                    squares:this.state.history[index].squares,
                    winner:"",
                    player:this.state.history[index].player,
                    step:index+1,
                }
            }
        )
    }

    // getClassName(index){
    //     let { winner, winnerArr } = this.state;
    //     if (winner) {
    //       for (let i = 0; i < 3; i++) {
    //         if (winnerArr[i] === index) {
    //           return "winner-square";
    //         }
    //         else return "";
    //       }
    //     } else {
    //       return "";
    //     }
    // }
}

export default Board;