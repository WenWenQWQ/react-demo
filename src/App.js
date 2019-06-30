import React, { Component }  from 'react';
import './App.css';

class App extends Component{
    state={
        header:'所有项目组',
        display:'none',
        data:[
            {
                key:'1',
                title:'墨刀实验室1',
                color:'#81D395',
                private:false,
                lock:false,
                number:'3'
            },
            {
                key:'2',
                title:'墨刀实验室2',
                color:'#F8C374',
                private:false,
                lock:false,
                number:'0'
            },
            {
                key:'3',
                title:'墨刀实验室3',
                color:'#F2908D',
                private:true,
                lock:false,
                number:'4'
            },
            {
                key:'4',
                title:'墨刀实验室4',
                color:'#E38073',
                private:false,
                lock:false,
                number:'4'
            },
            {
                key:'5',
                title:'墨刀实验室5',
                color:'#F8C767',
                private:false,
                lock:false,
                number:'4'
            },
            {
                key:'6',
                title:'墨刀实验室6',
                color:'#8DCAEB',
                private:true,
                lock:true,
                number:'1'
            },
            {
                key:'add',
                title:'新建项目组'
            }
        ],
        teams:[
            {
                key:'1',
                title:'墨刀实验室1',
                color:'#81D395',
                private:false,
                lock:false,
                number:'3'
            },
            {
                key:'2',
                title:'墨刀实验室2',
                color:'#F8C374',
                private:false,
                lock:false,
                number:'0'
            },
            {
                key:'3',
                title:'墨刀实验室3',
                color:'#F2908D',
                private:true,
                lock:false,
                number:'4'
            },
            {
                key:'4',
                title:'墨刀实验室4',
                color:'#E38073',
                private:false,
                lock:false,
                number:'4'
            },
            {
                key:'5',
                title:'墨刀实验室5',
                color:'#F8C767',
                private:false,
                lock:false,
                number:'4'
            },
            {
                key:'6',
                title:'墨刀实验室6',
                color:'#8DCAEB',
                private:true,
                lock:true,
                number:'1'
            },
            {
                key:'add',
                title:'新建项目组'
            }
        ]
    };
    //渲染项目组
    teamRender=(data)=> {
        return (
            <div className="teams">
                {
                    data.map((item) => {
                        if(item.key==='add'){
                            return <div className="teamAdd" onClick={this.handleClick} key={item.key}>
                                <div className="circleAdd">
                                    <div className="circle"></div>
                                </div>
                                <div className="addTitle">{item.title}</div>
                            </div>
                        }else{
                            return <div className={item.lock? 'teamLock teamCard':'teamCard'} key={item.key}>
                                <div className="left">
                                    <div className="circle" style={{background:item.color}}></div>
                                </div>
                                <div className="right">
                                    <div className="teamName">{item.title}</div>
                                    <div className="attribute">
                                        {
                                            item.private? <span className="private">私密</span>:''
                                        }
                                        {
                                            item.lock? <span className="lock">锁定</span>:''
                                        }
                                    </div>
                                    <div>{item.number}项目</div>
                                </div>
                            </div>
                        }
                    })
                }
            </div>
        )
    };
    //新增项目组事件
    handleClick=(event)=>{
        alert('新建项目组')
    };
    //筛选项目
    handleChange=(title)=>{
        if(title==='锁定'){
            let arr=[];
            for(let i in this.state.data){
                if(this.state.data[i].lock===true){
                    arr.push(this.state.data[i])
                }
            }
            this.setState({
                teams:arr
            })
        }else if(title==='私密'){
            let arr=[];
            for(let i in this.state.data){
                if(this.state.data[i].private===true){
                    arr.push(this.state.data[i])
                }
            }
            this.setState({
                teams:arr
            })
        }else{
            this.setState({
                teams:this.state.data
            })
        }
    };
    /*screenRender=()=>{
        return <select value={this.state.value} onChange={this.handleChange} className="select">
            <option value='all'>所有项目组</option>
            <option value='lock'>锁定</option>
            <option value='private'>私密</option>
        </select>
    }*/
    //下拉框展示
    handleDisplay=()=>{
        this.setState({
            display:'block'
        })
    };
    //菜单下拉框
    screenRender=()=>{
        return <div>
            <div onClick={this.handleDisplay}>{this.state.header}</div>
            <div className="option" style={{display:this.state.display}}>
                <ul>
                    <li onClick={()=>this.handleSelect('所有项目组')}>所有项目组</li>
                    <li onClick={()=>this.handleSelect('锁定')}>锁定</li>
                    <li onClick={()=>this.handleSelect('私密')}>私密</li>
                </ul>
            </div>
            </div>
    };
    handleSelect=(title)=>{
        this.setState({
            header:title,
            display:'none'
        });
        this.handleChange(title);
    };
    render(){
        return (
            <div className="container">
                <header className="title">{this.screenRender()}</header>
                <div className="body">
                    {this.teamRender(this.state.teams)}
                </div>
            </div>
        );
    }
}
export default App;
