import { FloatingLabel, Form } from "react-bootstrap";
import { useGlobalContext } from "./context";

const SearchForm = () => {
    const {query, setQuery} = useGlobalContext();
    return <Form>
        <FloatingLabel
        controlId="floatingInput"
        label="Search..."
        className="mb-3"
      >
        <Form.Control 
            type="text" 
            placeholder="Batman" 
            value={query} 
            onChange={(e)=>setQuery(e.target.value)} 
        />
      </FloatingLabel>
    </Form>;
};
export default SearchForm;
