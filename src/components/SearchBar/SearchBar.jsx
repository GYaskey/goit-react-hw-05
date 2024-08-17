import { Field, Form, Formik } from 'formik';
import { FaSearch } from 'react-icons/fa';

const SearchBar = () => {
  const initialValues = '';
  return (
    <header>
      <Formik initialValues={initialValues}>
        <Form>
          <label htmlFor="searchID">
            <FaSearch />
          </label>
          <Field
            id="searchID"
            name="search"
            placeholder="Type your request..."
          />
        </Form>
      </Formik>
    </header>
  );
};

export default SearchBar;
