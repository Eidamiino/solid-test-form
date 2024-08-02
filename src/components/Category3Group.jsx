import { createSignal, createEffect } from "solid-js";
import Category3 from "./Category3";

export default function Category3Group(props) {
    const [selectedIndex, setSelectedIndex] = createSignal(null);
    const changeSelected = (index) => {
        setSelectedIndex(index);
        
        const url = new URL(window.location.href);
        url.searchParams.set('categoryPath', props.items[index].categoryFullCode);
        window.history.pushState(null, '', url.toString());

        const event = new Event('urlChangeCategory1');
        window.dispatchEvent(event);

        
    };
    createEffect(() => {
        if (selectedIndex() === null) {
            changeSelected(0);
        }
        window.addEventListener('resetIndexes', resetSelectedIndex);
        window.addEventListener('resetIndexes2', resetSelectedIndex);
    });


    const resetSelectedIndex = () => {
        console.log("hip hpi huraaa")
        changeSelected(0)
    }
    

    return (
        <div class="row">
            {props.items.map((category, index) => (
                <Category3
                    index={index}
                    title={category.categoryTitle}
                    icon={category.categoryIcon}
                    selected={selectedIndex() == index}
                    onSelect={() => changeSelected(index)}
                    scopes={category.scopes}
                />
            ))}
        </div>
    );
}