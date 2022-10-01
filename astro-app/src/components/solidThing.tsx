import { Component, ComponentProps } from "solid-js";

interface solidThingProps extends ComponentProps<any> {
  title: string;
  text: string;
  count: number;
}

const solidThing: Component<solidThingProps> = (props: solidThingProps) => {
  return (
    <div>
      <h2>solidThing number {props.count}</h2>
      <aside>
        <header>{props.title}</header>
        <main>{props.text}</main>
        <footer>{props.count}</footer>
      </aside>
    </div>
  );
};

export default solidThing;
