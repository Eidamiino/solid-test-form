import { createEffect } from "solid-js";
import Category1Group from "./Category1Group";
import Category2Group from "./Category2Group";
import Category3Group from "./Category3Group";

export default function Category(props) {
    var highlightedFullCodeLevel1 = ""
    var highlightedFullCodeLevel2 = ""
    var highlightedFullCodeLevel3 = ""
    createEffect(() => {
        //kazdy update
        let splitCategoryPath = (props.categoryPath).split(".")
        console.log("rozdelena" + splitCategoryPath)

        highlightedFullCodeLevel1 = splitCategoryPath[0]
        if (splitCategoryPath[1]) highlightedFullCodeLevel2 = splitCategoryPath[1]
        if (splitCategoryPath[2]) highlightedFullCodeLevel3 = splitCategoryPath[2]

    })

    return (
        <div>
            <p>CategoryPath: {props.categoryPath}</p>
            <div class='categories level-1' style="display:flex; justify-content:center;">
                <div class="row">
                    <Category1Group items={props.inputArray}></Category1Group>
                </div>
            </div>
            <div class='categories level-2' style="display:flex; justify-content:center;">
                <div class='row'>
                    
                        <div>
                            <Category2Group items={props.inputArray} />
                        </div>
                    
                </div>
            </div>
            <div class='categories level-3' style="display:flex; justify-content:center;">
                <div class='row'>
                    
                        <div>
                            <Category3Group items={props.inputArray} />
                        </div>
                    
                </div>
            </div>
        </div>
    );
}