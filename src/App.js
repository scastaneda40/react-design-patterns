import logo from './logo.svg';
import './App.css';
import { RegularList } from './components/lists/Regular';
import { SmallAuthorListItem } from './components/authors/SmallListItems';
import { LargeAuthorListItem } from './components/authors/LargeListItems';
import { authors } from './data/authors';


function App() {
  return (
  <>
  <RegularList items={authors} sourceName={"author"} ItemComponent={SmallAuthorListItem}/>
  <RegularList items={authors} sourceName={"author"} ItemComponent={LargeAuthorListItem}/>
  </>
  );
}

export default App;
