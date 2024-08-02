import { Show } from 'solid-js';
import { createSignal } from 'solid-js';

export default function Category3(props) {
    const [scopes, setScopes] = createSignal([]);

    function parseScopes() {
            const parsedScopes = JSON.parse(props.scopes);
            console.log('Parsed Scopes:', parsedScopes);
            setScopes(parsedScopes);
    }

    parseScopes();

    return (
        <>
            <div>
            <button type="button" class="p-2 btn" classList={{ "btn-danger": props.selected }} onClick={props.onSelect}>
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
            {props.selected && scopes().map((scope) => (
                <div key={scope.scope_code}>
                    <h5 class="font-weight-bold" style="border-bottom: 2px solid red;">{scope.scope_title}</h5>
                    {scope.documents.map((document) => (
                        <p key={document.document_id}><a href="#" style="color:darkred;">{document.document_title}</a></p>
                    ))}
                </div>
            ))}
            </div>
        </>
    );
}
