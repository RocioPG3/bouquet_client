
import "./App.css";
import Router from "./components/Router";



function App() {


  return (
    <div className="App">
     
        <Router />
      
    </div>
  );
}

export default App;

 //Con este setItem guardo en mi localstorage (a nivel global) mi token
localStorage.setItem(
  "token",
  "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJpYXQiOjE2NTk0MzExMTYsImV4cCI6MTY2MzAzMTExNiwicm9sZXMiOlsiUk9MRV9BRE1JTiIsIlJPTEVfVVNFUiJdLCJ1c2VybmFtZSI6InJpb2phQGJvZGVnYXMuZXMifQ.jDF_Mg-RCuFK8OcZH17oa90H3ygplkK7FFJEwNojHSLQF8gy21A2vcfF_7P2EHz_-XOHwlA9Pc5KWZ00DEAs8f9K9FrNUVdsYP3iW7_nLiUgeOve_9uz_fhg-uH215Val55JYkmT_xti9HA_j7Anj5Q-UWrqn4mWdjnhh5W7NgTX0TxpdWDh3ISBEmeCpFFXTw26eHaneSUBNPzTP9bYnDHfCqwAxNOSo2IF-vURsIYtYHMxOOeWwKHSi5efAlGVt9J0SxsJ5tKkrpMWTggicKJ0IGVV6fnb0bwyotZfAX5OeorYsEGlkiQEMTRJQYL7Qkoy-gZEt6u9S2pUuDsNag"
);

//Con este getItem obtendría en cualquier punto de la aplicación mi token
localStorage.getItem("myData");