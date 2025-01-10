import React from 'react';

const InputText = ({label, dir = 'column', isTextarea = false, ...inputProps}) => {
	const component = isTextarea
		? <textarea {...inputProps}/>
		: <input {...inputProps} />;

	return (
		<div className={`input-container input-${dir === 'column' ? 'column' : 'row'}`}>
			<label>{label}</label>
			{component}
		</div>
	)
}

export default InputText;
