import { Component, ComponentProps, createSignal } from "solid-js";

interface CreateCardProps extends ComponentProps<any> {
  // add props here
}

const CreateCard: Component<CreateCardProps> = (props: CreateCardProps) => {
  const [num, setNum] = createSignal<number>(1);

  const [showAlert, setShowAlert] = createSignal<boolean>(false);

  const createCard = () => {
    alert("hu");
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
          <p>{num()}</p>
        </div>
        <section id="components">
          <article class="my-3" id="validation">
            <div>
              <div class="bd-example">
                <form class="row g-3">
                  <div class="col-md-4">
                    <label for="validationServer01" class="form-label">
                      Native Language
                    </label>
                    <input
                      type="text"
                      class="form-control is-valid"
                      id="validationServer01"
                      value=""
                      required
                    />
                    <div class="valid-feedback">Looks good!</div>
                  </div>
                  <div class="col-md-4">
                    <label for="validationServer02" class="form-label">
                      Foreign Language
                    </label>
                    <div class="input-group has-validation">
                      <span class="input-group-text" id="inputGroupPrepend3">
                        @
                      </span>
                      <input
                        type="text"
                        class="form-control is-valid"
                        id="validationServer02"
                        value=""
                        required
                      />

                      <div class="invalid-feedback">
                        Please choose a username.
                      </div>
                    </div>
                    <div class="valid-feedback">Looks good!</div>
                  </div>
                  <div class="col-md-4">
                    <label for="validationServerUsername" class="form-label">
                      Username
                    </label>
                    <div class="input-group has-validation">
                      <span class="input-group-text" id="inputGroupPrepend3">
                        @
                      </span>
                      <input
                        type="text"
                        class="form-control is-invalid"
                        id="validationServerUsername"
                        aria-describedby="inputGroupPrepend3"
                        required
                      />
                      <div class="invalid-feedback">
                        Please choose a username.
                      </div>
                    </div>
                  </div>
                  <div class="col-md-3">
                    <label for="validationServer04" class="form-label">
                      State
                    </label>
                    <select
                      class="form-select is-invalid"
                      id="validationServer04"
                      required
                    >
                      <option selected disabled value="">
                        Choose...
                      </option>
                      <option>...</option>
                    </select>
                    <div class="invalid-feedback">
                      Please select a valid state.
                    </div>
                  </div>
                  <div class="col-12">
                    <button
                      onClick={createCard}
                      class="btn btn-primary"
                      type="submit"
                    >
                      Create Card!
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </article>
        </section>
      </div>
    </div>
  );
};

export default CreateCard;
