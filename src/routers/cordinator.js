export const goToHome = (history) => {
    history.push ('/home')
}

export const goToItems = (history) => {
    history.push ('/items')
}

export const goToItemsDetail = (history, id) => {
    history.push (`/items/${id}`)
}