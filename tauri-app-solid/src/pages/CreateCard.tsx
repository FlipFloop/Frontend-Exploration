import { Component, ComponentProps, createSignal } from "solid-js";

interface CreateCardProps extends ComponentProps<any> {
  // add props here
}

const CreateCard: Component<CreateCardProps> = (props: CreateCardProps) => {
  const [num, setNum] = createSignal<number>(1);

  const [showAlert, setShowAlert] = createSignal<boolean>(false);

  const add = () => {
    setNum(num() + 2);
  };

  return (
    <div>
      <h2>CreateCard</h2>
      <div class="card">
        <div class="card-body">
          <h5 class="card-title">Card title</h5>
          <p class="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <button onClick={() => setShowAlert(true)} class="btn btn-primary">
            Show Alert
          </button>
          <button onClick={add} class="btn btn-primary">
            Create Card!
          </button>
          <p>{num()}</p>
        </div>

        {showAlert() && (
          <div
            class="alert alert-primary alert-dismissible fade show"
            aria-role="alert"
          >
            A simple primary alert with{" "}
            <a href="#" onClick={(e) => e.preventDefault()} class="alert-link">
              an example link
            </a>
            . Give it a click if you like.
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="alert"
              aria-label="Close"
              onClick={() => setShowAlert(false)}
            ></button>
          </div>
        )}
      </div>
    </div>
  );
};

export default CreateCard;
