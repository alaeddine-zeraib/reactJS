import React, {useReducer} from'react'

export default function UseReducer() {
    const [checked, toggle] = useReducer(
        checked => !checked,
        false
    );

    return (
        <div>
            <input
                type="checkbox"
                value={checked}
                onChange={toggle}
            />
            {checked ? "checked" : "not checked"}
        </div>
    )
}
