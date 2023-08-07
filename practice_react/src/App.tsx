import Profile from "./Components/Profile";
import Counter from "./Components/Counter";
import Resume from "./Components/Resume";
import ClassEvent from "./Components/ClassEvent";
import FunctionalCounter from "./Components/FunctionalCounter";
import ConditionalComponent from "./Components/ConditionalComponent";
import Product from "./Components/Product";
import Form from "./Components/Form";
import ToDo from "./Components/ToDo";
import InlineComponent from "./Components/InlineComponent";
import StyleSheetComponent from "./Components/StyleSheetComponent";
const App = () => {
  return (
    <div className="text-center">
      <StyleSheetComponent/>
      <div className="fs-1 fw-bold text-info">
      <InlineComponent/>
      </div>
      <ToDo />
    </div>
  );
};

export default App;
