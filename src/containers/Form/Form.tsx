import React, { useContext }  from 'react';
import style from './Form.scss';
import FormContext from '../../shared/context';

const verifiableTypes = ["Input", "Textarea", "Dropdown"]

const setWidth = (width: string) => {
  return {
    width: width
  }
}

const validateVerifiableFields = (fields) => {
  return fields.some(e => {
    return e.props.required && !e.props.value
  })
}

const Form: React.FC<FormProps> = (props) => {
  
  var verifiableFields: any = [];
  const verifyElementType = (e) => {
    if (e.props && e.props.children) {
      getFormFields(e.props.children);
    }
    else if (e.type && verifiableTypes.some(string => e.type.toString().includes(string))) {
      verifiableFields.push(e);
    }
  }
  const isValid = !validateVerifiableFields(verifiableFields);

  try {
    const {
      setValidateForm
    } = useContext(FormContext);
    setValidateForm(isValid);
  } catch (error) {
    console.log(error);
  }

  const getFormFields = (children) => {
    if (Array.isArray(children)) {
      children.map(verifyElementType);
    }
    else {
      verifyElementType(children);
    }
  }
  const { children, width } = props;
  getFormFields(children);
  
 
  const widthStyle = setWidth(width);
  return (
    <div style={widthStyle} className={style['ct-form']}>
      {children}
    </div>
  );
}

interface FormProps {
  children: any,
  width: string
}

Form.defaultProps = {
  children: null,
  width: "100%"
}

export default Form
