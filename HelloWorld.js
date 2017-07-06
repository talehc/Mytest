<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8" />
    <title>Hello React!</title>
    <script src="build/react.js"></script>
    <script src="build/react-dom.js"></script>
    <script src="https://unpkg.com/babel-core@5.8.38/browser.min.js"></script>
  </head>
  <body>
    <div id="example"></div>
    <script type="text/babel">
       var Hu = React.createClass({
          render : function(){
            return  (
            <ol>
            {
              React.Children.map(this.props.children,function(child){
                return <li>{child}</li>;
              })
            }
            </ol>
          );
            
          }
      });
       ReactDOM.render(
          <Hu name = "tale" className="dfdf" >
            <span>i love china</span>
          </Hu>,
          document.getElementById('example')
        );
    </script>
  </body>
</html>


