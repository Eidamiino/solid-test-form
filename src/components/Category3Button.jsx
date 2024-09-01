import { Show } from 'solid-js';
export default function Category3Button(props) {
    return (
        <>
            <button type="button" class="p-2 btn rounded-0 shadow mt-3" classList={{ "btn-danger": props.selected }} onClick={props.onSelect}>
                <Show when={props.icon !== ""}>
                    <span class='icon' style="margin-right:10px;">
                        <i class={props.icon}></i>
                    </span>
                </Show>
                <Show when={props.title !== ""}>
                    <span class='title'>
                        {props.title}
                    </span>
                </Show>
            </button>
        </>
    );
}
