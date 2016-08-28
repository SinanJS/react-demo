'use strict';

var names = ['Alice', 'Emily', 'Kate'];

ReactDOM.render(React.createElement(
    'div',
    null,
    names.map(function (name, index, self) {
        return React.createElement(
            'p',
            { key: index },
            '你好,',
            name,
            ',哈哈'
        );
    })
), document.querySelector('#example'));
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