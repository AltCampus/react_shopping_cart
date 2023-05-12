export function handleOrderBy(e){
    console.log(e.target.value)
    return {
        type:'orderBy',
        payload:e.target.value
    }
}

export function handleSize(size){
    return {
        type:'size',
        payload:size
    }
}



export function incrementQuantity(id,cart) {
    
        let updatedCart = cart.map((p) => {
            console.log(p)
            if (p.id === id) {
                return {
                    ...p, quantity: p.quantity + 1
                }
            } else {
                return p
            }
        })
        return {
            type:'increment',
            payload: updatedCart
        }
}

export function decrementQuantity(id,cart) {
    
        let updatedCart = cart.map((p) => {
            if (p.id === id) {
                if (p.quantity > 1) {
                    return {
                        ...p, quantity: p.quantity - 1
                    }
                }
                return p
            }
            return p

        })

        return {
            type:'decrement',
            payload: updatedCart
        }

}

export function handleAddCart (p,cart){
    console.log(p)
    let isPresent = cart.findIndex((product) => product.id === p.id)

    if (isPresent !== -1) {
        return incrementQuantity(p.id,cart)
    } else {
        p.quantity = 1
        console.log(p)
           return {
            type:'addCart',
            payload: cart.concat([p])
        }
    
    }
}