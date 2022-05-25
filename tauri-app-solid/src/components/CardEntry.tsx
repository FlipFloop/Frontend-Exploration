import { Component, ComponentProps, createSignal, Show } from "solid-js";

interface cardProps extends ComponentProps<any> {
    // add props here
}

const CardEntry: Component<cardProps> = (props: cardProps) => {
    const [english, setEnglish] = createSignal("");
    const [korean, setKorean] = createSignal("");

    return (
        <div>
            <Show when={true}>
                <h2>English</h2>
                <input
                    type="text"
                    lang="en"
                    oninput={(e) => setEnglish(e.currentTarget.value)}
                />
                <h2>English: {english}</h2>
                <h2>Korean</h2>
                <input
                    type="text"
                    lang="kr"
                    oninput={(e) => setKorean(e.currentTarget.value)}
                    />
                <h2>Korean: {korean}</h2>
            </Show>
        </div>
    );
};

export default CardEntry;
