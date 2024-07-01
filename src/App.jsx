import { createSignal, createEffect } from 'solid-js';
import Category1Group from './components/Category1Group';
import Category2Group from './components/Category2Group';

const category1Titles = ["Category1_1", "Category1_2", "Category1_3"];
const category2Titles = ["Category2_1", "Category2_2", "Category2_3"];

function getUrlParams(url) {
  console.log("test"+url);
  const params = new URLSearchParams(url.substring(1));
  return {
    categoryPath: params.get('categoryPath'),
  };
}

function App() {
  const [categoryPath, setCategoryPath] = createSignal(getUrlParams(window.location.search).categoryPath);

  const changeUrl = () => {
    setCategoryPath(getUrlParams(window.location.search).categoryPath);
  };

  createEffect(() => {
    window.addEventListener('urlChangeCategory1', changeUrl);
  });

  return (
    <div>
      <div class='categories level-1' style="display:flex; justify-content:center;">
        <div class="row">
          <Category1Group titles={category1Titles}></Category1Group>
        </div>
      </div>
      <div class='categories level-2' style="display:flex; justify-content:center;">
        <div class='row'>
          {categoryPath() && (
            <div>
              <h2>hroch: {categoryPath()}</h2>
              <Category2Group titles={category2Titles} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
