import { createEffect } from "solid-js";
import Category1Group from "./Category1Group";
import Category2Group from "./Category2Group";
import Category3Group from "./Category3Group";

export default function Category(props) {
    var group1InputArray = props.inputArray.filter(item => item.categoryLevel == 1)


    var highlightedFullCodeLevel1 = ""
    var highlightedFullCodeLevel2 = ""
    var highlightedFullCodeLevel3 = ""
    createEffect(() => {
        //kazdy update
        let splitCategoryPath = getSplitCategoryPath();

        highlightedFullCodeLevel1 = splitCategoryPath[0]
        if (splitCategoryPath[1]) highlightedFullCodeLevel2 = splitCategoryPath[1]
        else highlightedFullCodeLevel2=getDefaultCategory2()[1]

        if (splitCategoryPath[2]) highlightedFullCodeLevel3 = splitCategoryPath[2]
        else highlightedFullCodeLevel3=getFilteredCategories3Simple(props.inputArray, highlightedFullCodeLevel1+"."+highlightedFullCodeLevel2)[0].categoryFullCode.split(".")[2]

        console.log("highligh1:"+highlightedFullCodeLevel1)
        console.log("highligh2:" + highlightedFullCodeLevel2)
        console.log("highligh3:" + highlightedFullCodeLevel3)

    })
    const getDefaultCategory2=()=>{
        console.log("co to vracim??" + getFilteredCategories2(props.inputArray)[0].categoryFullCode.split("."))
        return getFilteredCategories2(props.inputArray)[0].categoryFullCode.split(".")
    }


    const getSplitCategoryPath = () => {
        return props.categoryPath.split(".")
    }

    const getFilteredCategories2 = (categories) => {
        return categories.filter(subcategory => subcategory.categoryLevel == 2 && subcategory.categoryFullCode.startsWith(getSplitCategoryPath()[0]));
    };
    const getFilteredCategories3 = (categories) => {
        if(!getSplitCategoryPath()[1]){
            console.log("JUPIIIIIII" + getSplitCategoryPath()[0] + "." + highlightedFullCodeLevel2)
            return getFilteredCategories3Simple(props.inputArray, getSplitCategoryPath()[0] + "." + highlightedFullCodeLevel2)
        } 
        return categories.filter(subcategory => subcategory.categoryLevel == 3 && subcategory.categoryFullCode.startsWith(getSplitCategoryPath()[0] + "." + getSplitCategoryPath()[1]));
    };

    const getFilteredCategories3Simple = (categories, customCategoryPath) => {
        return categories.filter(subcategory => subcategory.categoryLevel == 3 && subcategory.categoryFullCode.startsWith(customCategoryPath));
    };

    

    return (
        <div>
            <p>CategoryPath: {props.categoryPath}</p>
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