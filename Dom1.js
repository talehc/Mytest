
   //es6 定义组件
   class Hello extends React.Component{
      render(){
          return(
              <h1>hello world!</h1>
          );
      }
    }
    ReactDOM.render(
      <Hello/>,
      document.getElementById('content')
    );