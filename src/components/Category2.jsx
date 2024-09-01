import { Show } from 'solid-js';

export default function Category2(props) {
    return (
        <>
            <button type="button" class="btn rounded-0 shadow mx-3 mt-2" classList={{ "btn-danger": props.selected }} onClick={props.onSelect} >
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
