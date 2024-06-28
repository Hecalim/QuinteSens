export const closeDialog = () => {
    document.getElementById("jscloseDialog").addEventListener("click", () => {
        const dialog = document.getElementById("modal")
        dialog.close()
    })
}

export const setModalContent = (title, description) => {
    const modalTitle = document.querySelector("#modal .modal__title")
    const modalDesc = document.querySelector("#modal .modal__desc")
    
    modalTitle.textContent = title
    modalDesc.textContent = description
}