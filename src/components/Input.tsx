import React, {ChangeEvent} from 'react';

type InputType = {
    title: string
    setTitle:(title: string) => void
}

export const Input = ({title, setTitle}: InputType) => {
    const onChangeInputHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setTitle(event.currentTarget.value)
    }

    return (
        <input value={title} onChange={onChangeInputHandler}/>
    );
};