import React from 'react';

const Form = ({ name, dos, onChange, onCreate, onKeyPress }) => {
    return(
        <div>
            <div>
                <input 
                    type="text" 
                    placeholder="이름"
                    value={name}
                    onChange={onChange}
                    onKeyPress={onKeyPress}
                    name="name"
                />
            </div>
            <div>
                <input 
                    type="text" 
                    placeholder="오늘 할 일" 
                    value={dos}
                    onChange={onChange}
                    onKeyPress={onKeyPress}
                    name="dos"
                />
            </div>
            <div>
                <button onClick={onCreate}>추가</button>
            </div>
        </div>
    );
}
export default Form;