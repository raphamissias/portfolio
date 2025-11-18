import modalProjects from "./modalProjects.js";

const modalContainer = document.querySelector("#modalContainer");
const modalList = document.querySelector("#modalList");

const handleModal = () => {
    const showButtons = document.getElementsByClassName("btnShowModal");

    for (let i = 0; i < showButtons.length; i++) {
        showButtons[i].addEventListener("click", (e) => {
            const modalName = e.target.id;
            const projectInfoHTML = modalProjects[modalName];
            
            if (projectInfoHTML) {
                modalList.insertAdjacentHTML('beforeend', projectInfoHTML);
            }

            modalContainer.showModal();

            closeModal();
        }); 
    }
}

const closeModal = () => {
    const closeButton = document.querySelector("#closeModal");

    closeButton.addEventListener("click", () => {
        const modalItems = document.querySelectorAll(".modal_item");
        const modalTitle = document.querySelector('#modalTitle');
        
        if (modalItems && modalTitle) {
            modalItems.forEach(item => {
                item.remove();
            });

            modalTitle.remove();
        }

        modalContainer.close();
    })
}

handleModal();