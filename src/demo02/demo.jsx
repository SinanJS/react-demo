var names = ['Alice', 'Emily', 'Kate'];

ReactDOM.render(
    <div>
        {
            names.map(function(name,index,self){
                return <p key={index}>你好,{name},哈哈</p>
            })
        }
    </div>,
    document.querySelector('#example')
);
/*
ReactDOM.render(
    <div>
        {
            names.map(function (name) {
                return <div>Hello, {name}!</div>
            })
        }
    </div>,
    document.getElementById('example')
);*/
