import cl from "./Input.module.scss"

interface IInput {
    placeholder: string
    name?: string
    id?: string
    type?: string
    autocomplete?: string

}

const Input = ({ placeholder, name, type = 'text', id, autocomplete = 'off' }: IInput) => {
    return (
        <div className={cl.wrapper}>
            <input
                type={type}
                name={name}
                id={id}
                placeholder={placeholder}
                className={cl.input}
                autoComplete={autocomplete}
            />
        </div>
    )
}



export default Input
