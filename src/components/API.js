export const apiKey = () => {

    const apiView = document.createElement("div");
    apiView.setAttribute("id","api");

    const apiContainer = document.createElement("div");
    apiContainer.setAttribute("id","apiContainer");

    const nameLabel = document.createElement("label");
    nameLabel.setAttribute("id","nameLabel");
    nameLabel.textContent = 'Ingresa Api-Key:';
    apiContainer.appendChild(nameLabel);

    const nameInput = document.createElement("input");
    nameInput.setAttribute("id","nameInput");
    apiContainer.appendChild(nameInput);

    const submitApi = document.createElement('button');
    submitApi.setAttribute('data-testid', 'button-submit');
    submitApi.textContent = 'Submit';
    submitApi.classList.add("submit-button");
    apiContainer.appendChild(submitApi);

    apiView.appendChild(apiContainer);

    return apiView;

}