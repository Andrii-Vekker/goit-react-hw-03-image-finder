import { Formik } from 'formik';
import * as yup from 'yup';
import { Header, SearchForm, SearchFormBtn, SearchFormBtnLabel, SearchInput } from './SearchBar.styled';
// import { FormContainer, BtnAdd, Label, Span, Input } from './Form.styled';
// import { nanoid } from 'nanoid';
// import PropTypes from 'prop-types';

const schema = yup.object().shape({
    name: yup.string().required("Please enter name of picture"),
  
    
});

const initialValues = {
        name: '',
};
export default function SearcBar (propa) {
    const handleSubmit = (values, { resetForm }) => {
        propa.onFetch(values)
        console.log(values)
        resetForm();
        // propa.onSubmit(values);
    };

    
    return (
     
        <Header>
            
            <Formik validationSchema={schema} onSubmit={handleSubmit} initialValues={initialValues}>
                <SearchForm>
                    <SearchFormBtn type="submit">
                        <SearchFormBtnLabel>Search</SearchFormBtnLabel>
                    </SearchFormBtn>

                    <SearchInput
                        name="name"
                        type="text"
                        autoComplete="off"
                        autoFocus
                        placeholder="Search images and photos"
                    />
                </SearchForm>
            </Formik>
        </Header>
    );
};

// ContactFormrm.propTypes = {
//     onSubmit: PropTypes.func.isRequired,
// }

   // <>
        // <Formik validationSchema={schema} onSubmit={handleSubmit} initialValues={initialValues}>
        //     <FormContainer autoComplete="off">
        //         <Label htmlFor="name">
        //             <Span>Name</Span>
        //                 <Input type="text" name="name"  />
        //             <ErrorMessage name='name' component="div"/> 
        //         </Label>
        //          <Label htmlFor="number">
        //           <Span>Number</Span>
        //                 <Input type="tel" name="number" />
        //             <ErrorMessage name='number' component="div"/> 
        //         </Label>
        //         <BtnAdd type="submit">Add contact</BtnAdd>
        //     </FormContainer>
        //     </Formik>
        //     </>
        