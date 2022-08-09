
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

//  //Con este setItem guardo en mi localstorage (a nivel global) mi token
// localStorage.setItem(
//   "token",
//   "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJpYXQiOjE2NTk0NjI0NTAsImV4cCI6MTY2MzA2MjQ1MCwicm9sZXMiOlsiUk9MRV9BRE1JTiIsIlJPTEVfVVNFUiJdLCJ1c2VybmFtZSI6InJpb2phQGJvZGVnYXMuZXMifQ.dEyqLNFwgwN9dCMRlzp13zcblI6UUGhNoGRSRC9Ysv455ZCUP_9w_4vByG7W0AYZDXY5WzNTRMz7KQ8ewbW7BVYDEhmKnyxNyJqGQ3S1vgeXKdJyBInPUdWlHIY3rFdubcymzIRb0v06xz2DasDhhRIKlB_X_GWtpfgOeDMv3n2gqL97gUWLiTAWlaiV8VCxdv5iA04z1BcpAuYbbcoIhbnm2aeRnRK0ViKrmSmBPLCXY1qVev3s8SdLgJPNprbYlCpoz2zM95n1YVGyE7aa2HnWs7QyYr19kHBHcn8EmxtbYaVFC-umz7rZEP4ZNi_LJeclpATUzH6HDn1xBi5Meg"
// );

// //Con este getItem obtendría en cualquier punto de la aplicación mi token
// localStorage.getItem("token");