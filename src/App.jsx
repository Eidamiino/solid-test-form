import { createSignal, createEffect } from 'solid-js';
import Category1Group from './components/Category1Group';
import Category2Group from './components/Category2Group';
import Category3Group from './components/Category3Group';

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
    categoryFullCode: "produkty.zivotni_pojisteni2",
    categoryTitle: "Životní pojištění2",
    categoryTooltip: "PRODUKTY➤Životní pojištění",
    categoryIcon: "fas fa-umbrella",
    scopes: null
  },
  {
    categoryLevel: 2,
    categoryFullCode: "produkty3.zivotni_pojisteni",
    categoryTitle: "Životní pojištění3",
    categoryTooltip: "PRODUKTY➤Životní pojištění",
    categoryIcon: "fas fa-home",
    scopes: null
  }
]

const category3=[
  {
    categoryLevel: 3,
    categoryFullCode: "archiv_gcp_a_cp.zivotni_pojisteni.zaruka_1_4_2004_1_1_2016",
    categoryTitle: "Záruka (1.4.2004 - 1.1.2016)",
    categoryTooltip: "",
    categoryIcon: "",
    scopes: "[{\"documents\": [{\"document_id\": 2679, \"document_url\": null, \"document_code\": \"876507\", \"document_title\": \"DPP Záruka - (11/2004)\", \"document_is_new\": false, \"document_tooltip\": \"Doplňkové pojistné podmínky Záruka_0002 - 11_04\", \"document_priority\": null, \"document_type_code\": \"file\", \"document_download_filename\": \"Doplňkové pojistné podmínky Záruka_0002 - 11_04.pdf\"}, {\"document_id\": 2680, \"document_url\": null, \"document_code\": \"4C7B57\", \"document_title\": \"PP Záruka\", \"document_is_new\": false, \"document_tooltip\": \"Pojistné podmínky - ODPZáruka\", \"document_priority\": null, \"document_type_code\": \"file\", \"document_download_filename\": \"Pojistné podmínky - ODPZáruka.pdf\"}, {\"document_id\": 2685, \"document_url\": null, \"document_code\": \"4F0F74\", \"document_title\": \"Smluvní ujednání Záruka - (01/2004)\", \"document_is_new\": false, \"document_tooltip\": \"Smluvní ujednání Záruka_0001 - 1_04\", \"document_priority\": null, \"document_type_code\": \"file\", \"document_download_filename\": \"Smluvní ujednání Záruka_0001 - 1_04.pdf\"}], \"scope_code\": \"pojistne_podminky\", \"scope_title\": \"Pojistné podmínky\"}, {\"documents\": [{\"document_id\": 2683, \"document_url\": null, \"document_code\": \"6A6FFB\", \"document_title\": \"Sazebník Záruka ODP - (07/2015)\", \"document_is_new\": false, \"document_tooltip\": \"Sazebník Záruka_ODP - 7_15\", \"document_priority\": 4, \"document_type_code\": \"file\", \"document_download_filename\": \"Sazebník Záruka_ODP - 7_15.pdf\"}, {\"document_id\": 2682, \"document_url\": null, \"document_code\": \"DFD612\", \"document_title\": \"Sazebník Záruka ODP - (07/2013)\", \"document_is_new\": false, \"document_tooltip\": \"Sazebník Záruka_ODP - 7_13\", \"document_priority\": 3, \"document_type_code\": \"file\", \"document_download_filename\": \"Sazebník Záruka_ODP - 7_13.pdf\"}, {\"document_id\": 2684, \"document_url\": null, \"document_code\": \"52927C\", \"document_title\": \"Sazebník Záruka ODP - (12/2012)\", \"document_is_new\": false, \"document_tooltip\": \"Sazebník Záruka_ODP - 12_12\", \"document_priority\": 2, \"document_type_code\": \"file\", \"document_download_filename\": \"Sazebník Záruka_ODP - 12_12.pdf\"}, {\"document_id\": 2681, \"document_url\": null, \"document_code\": \"929542\", \"document_title\": \"Sazebník Záruka ODP - (01/2006)\", \"document_is_new\": false, \"document_tooltip\": \"Sazebník Záruka_ODP - 1_06\", \"document_priority\": 1, \"document_type_code\": \"file\", \"document_download_filename\": \"Sazebník Záruka_ODP - 1_06.pdf\"}], \"scope_code\": \"sazebniky\", \"scope_title\": \"Sazebníky\"}]"
  },
  {
    categoryLevel: 3,
    categoryFullCode: "produkty.zivotni_pojisteni.doplnkove_penzijni_sporeni",
    categoryTitle: "Doplňkové penzijní spoření",
    categoryTooltip: "",
    categoryIcon: "",
    scopes: "[{\"documents\": [{\"document_id\": 4830, \"document_url\": null, \"document_code\": \"7E7884\", \"document_title\": \"Benefity pro každou společnosti\", \"document_is_new\": false, \"document_tooltip\": null, \"document_priority\": null, \"document_type_code\": \"file\", \"document_download_filename\": \"GCP165_I_A4_Benefity_pro_kazdou_spolecnost_08rt.pdf\"}, {\"document_id\": 4829, \"document_url\": null, \"document_code\": \"2C1D95\", \"document_title\": \"Daňové aspekty a výhody\", \"document_is_new\": false, \"document_tooltip\": null, \"document_priority\": null, \"document_type_code\": \"file\", \"document_download_filename\": \"GCP165_I_A4_Danove_aspekty_zaestnanecke_vyhody_08rt.pdf\"}, {\"document_id\": 4100, \"document_url\": null, \"document_code\": \"0C4C6E\", \"document_title\": \"Doplňkové penzijní spoření - obecné informace\", \"document_is_new\": false, \"document_tooltip\": null, \"document_priority\": null, \"document_type_code\": \"file\", \"document_download_filename\": \"GENERALI PS do firem.pdf\"}, {\"document_id\": 4101, \"document_url\": null, \"document_code\": \"5FA867\", \"document_title\": \"Leták - příspěvek zaměstnavatele\", \"document_is_new\": false, \"document_tooltip\": null, \"document_priority\": null, \"document_type_code\": \"file\", \"document_download_filename\": \"Sablona Prispevek zamestnavatele 2021.pdf\"}, {\"document_id\": 4828, \"document_url\": null, \"document_code\": \"0DCD72\", \"document_title\": \"Seznámení - naše benefity\", \"document_is_new\": false, \"document_tooltip\": null, \"document_priority\": null, \"document_type_code\": \"file\", \"document_download_filename\": \"GCP165_I_A4_Seznameni_nase_benefity_08rt.pdf\"}], \"scope_code\": \"prodejni_pomucky_a_marketingove_materialy\", \"scope_title\": \"Prodejní pomůcky a marketingové materiály\"}]"
  },
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

  const getFilteredCategories3 = (categories) => {
    if (!categoryPath()) return [];
    return categories.filter(subcategory => subcategory.categoryFullCode.split(".")[0] + subcategory.categoryFullCode.split(".")[1] == categoryPath().split(".")[0] + categoryPath().split(".")[1]);
  };
  const getFilteredCategories2 = (categories) => {
    if (!categoryPath()) return [];
    return categories.filter(subcategory => subcategory.categoryFullCode.split(".")[0] == categoryPath().split(".")[0]);
  };

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
              <Category2Group items={getFilteredCategories2(category2)} />
            </div>
          )}
        </div>
      </div>
      <div class='categories level-3' style="display:flex; justify-content:center;">
        <div class='row'>
          {categoryPath() && (
            <div>
              <Category3Group items={getFilteredCategories3(category3)} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
