import { createSignal, createEffect } from "solid-js";
import Category3Button from "./Category3Button";
import Category3Scopes from "./Category3Scopes";
import { urlParams, events } from "../constants";


export default function Category3Group(props) {
    const [selectedIndex, setSelectedIndex] = createSignal(null);
    const changeSelected = (index) => {
        setSelectedIndex(index);

        const url = new URL(window.location.href);
        url.searchParams.set(urlParams.categoryPath, props.items[index].categoryFullCode);
        window.history.pushState(null, '', url.toString());

        const event = new Event(events.categoryChanged);
        window.dispatchEvent(event);


    };
    createEffect(() => {
        if (selectedIndex() === null) {
            changeSelected(0);
        }
        window.addEventListener(events.resetIndexes, resetSelectedIndex);
        window.addEventListener(events.resetIndexes2, resetSelectedIndex);
    });


    const resetSelectedIndex = () => {
        changeSelected(0)
    }


    return (
        <>
            <div class="col-3 d-flex flex-column">
                {props.items.map((category, index) => (
                    <>

                        <Category3Button
                            selected={selectedIndex() == index}
                            icon={category.categoryIcon}
                            title={category.categoryTitle}
                            onSelect={() => changeSelected(index)}
                        />
                    </>
                ))}
            </div>

            <div class="col-9">
                <div class="row">
                    {props.items.map((category, index) => (
                        <>

                            <Category3Scopes
                                selected={selectedIndex() == index}
                                scopes={category.scopes}
                            />

                        </>
                    ))}
                </div>
            </div >
        </>
    );
}