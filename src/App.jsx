import { createSignal, createEffect } from 'solid-js';
import Category1Group from './components/Category1Group';
import Category2Group from './components/Category2Group';

const category1=[
  {
    categoryLevel: 1,
    categoryFullCode: "produkty",
    categoryTitle: "PRODUKTY",
    categoryTooltip: "",
    categoryIcon: "fas fa-h",
    scopes: null
  },
  {
    categoryLevel: 1,
    categoryFullCode: "produkty2",
    categoryTitle: "PRODUKTY",
    categoryTooltip: "",
    categoryIcon: "fas fa-folder-open",
    scopes: null
  },
  {
    categoryLevel: 1,
    categoryFullCode: "produkty3",
    categoryTitle: "PRODUKTY",
    categoryTooltip: "",
    categoryIcon: "fas fa-h",
    scopes: null
  }
]

const category2=[
  {
    categoryLevel: 2,
    categoryFullCode: "produkty.zivotni_pojisteni",
    categoryTitle: "Životní pojištění",
    categoryTooltip: "PRODUKTY➤Životní pojištění",
    categoryIcon: "fas fa-heart",
    scopes: null
  },
  {
    categoryLevel: 2,
    categoryFullCode: "produkty2.zivotni_pojisteni",
    categoryTitle: "Životní pojištění",
    categoryTooltip: "PRODUKTY➤Životní pojištění",
    categoryIcon: "fas fa-heart",
    scopes: null
  },
  {
    categoryLevel: 2,
    categoryFullCode: "produkty3.zivotni_pojisteni",
    categoryTitle: "Životní pojištění",
    categoryTooltip: "PRODUKTY➤Životní pojištění",
    categoryIcon: "fas fa-heart",
    scopes: null
  }
]

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
          <Category1Group items={category1}></Category1Group>
        </div>
      </div>
      <div class='categories level-2' style="display:flex; justify-content:center;">
        <div class='row'>
          {categoryPath() && (
            <div>
              <h2>hroch: {categoryPath()}</h2>
              <Category2Group items={category2} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
