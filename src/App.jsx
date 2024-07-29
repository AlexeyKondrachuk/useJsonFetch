import { DataComponent } from './components/DataComponent'
import { LoadingComponent } from './components/LoadingComponent'
import { ErrorComponent } from './components/ErrorComponent'
import './App.css'

function App() {

  return  (
    <div>
      <LoadingComponent />
      <DataComponent />
      <ErrorComponent /> 
    </div>
  );
}

export default App