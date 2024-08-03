import { createEffect } from "solid-js";
import Category1Group from "./Category1Group";
import Category2Group from "./Category2Group";
import Category3Group from "./Category3Group";

export default function Category(props) {
    const categoryPathDivider = '.'

    var group1InputArray = props.inputArray.filter(item => item.categoryLevel == 1)

    var highlightedFullCodeLevel1 = ""
    var highlightedFullCodeLevel2 = ""
    var highlightedFullCodeLevel3 = ""
    createEffect(() => {
        //kazdy update categorypath
        let splitCategoryPath = getSplitCategoryPath();

        //highlighted je prvni cast categorypath
        highlightedFullCodeLevel1 = splitCategoryPath[0]
        //highlighted je druha cast categorypath jinak prvni mozna
        if (splitCategoryPath[1]) highlightedFullCodeLevel2 = splitCategoryPath[1]
        else highlightedFullCodeLevel2 = getDefaultCategory2()[1]
        //highlighted je treti cast categorypath jinak prvni mozna
        if (splitCategoryPath[2]) highlightedFullCodeLevel3 = splitCategoryPath[2]
        else highlightedFullCodeLevel3 = getFilteredCategories3Simple(props.inputArray, highlightedFullCodeLevel1 + categoryPathDivider + highlightedFullCodeLevel2)[0].categoryFullCode.split(categoryPathDivider)[2]

    })

    const getSplitCategoryPath = () => {
        return props.categoryPath.split(categoryPathDivider)
    }

    const getFilteredCategories2 = (categories) => {
        //level 2 a zacinaji momentalnim level 1
        return categories.filter(subcategory => subcategory.categoryLevel == 2 && subcategory.categoryFullCode.startsWith(getSplitCategoryPath()[0]));
    };

    const getFilteredCategories3 = (categories) => {
        if (!getSplitCategoryPath()[1]) {
            //pokud categorypath nema level 2 => zacina na level1.defaultlevel2
            return getFilteredCategories3Simple(props.inputArray, getSplitCategoryPath()[0] + categoryPathDivider + highlightedFullCodeLevel2)
        }
        //level 3 a zacina level1.level2
        return categories.filter(subcategory => subcategory.categoryLevel == 3 && subcategory.categoryFullCode.startsWith(getSplitCategoryPath()[0] + categoryPathDivider + getSplitCategoryPath()[1]));
    };

    const getDefaultCategory2 = () => {
        return getFilteredCategories2(props.inputArray)[0].categoryFullCode.split(categoryPathDivider)
    }

    const getFilteredCategories3Simple = (categories, customCategoryPath) => {
        //level 3 a zacina na vybrany string
        return categories.filter(subcategory => subcategory.categoryLevel == 3 && subcategory.categoryFullCode.startsWith(customCategoryPath));
    };


    return (
        <div>
            <div class='categories level-1' style="display:flex; justify-content:center;">
                <div class="row">
                    <Category1Group items={group1InputArray}></Category1Group>
                </div>
            </div>
            <div class='categories level-2' style="display:flex; justify-content:center;">
                <div class='row'>

                    <div>
                        <Category2Group items={getFilteredCategories2(props.inputArray)} />
                    </div>

                </div>
            </div>
            <div class='categories level-3' style="display:flex; justify-content:center;">
                <div class='row'>

                    <div>
                        <Category3Group items={getFilteredCategories3(props.inputArray)} />
                    </div>

                </div>
            </div>
        </div>
    );
}