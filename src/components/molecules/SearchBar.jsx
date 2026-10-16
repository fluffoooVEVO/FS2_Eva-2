import Label from '../atoms/Label';
import Input from '../atoms/Input';

function SearchBar({ value, onChange, placeholder = 'Buscar arma por nombre...' }) {
    return (
    <div className="mb-3">
        <Label htmlFor="search-products" className="visually-hidden">
        Buscar arma
        </Label>
        <Input
        id="search-products"
        type="search"
        value={value}
        placeholder={placeholder}
        onChange={(e) => onChange(e.target.value)}
        />
    </div>
    );
}

export default SearchBar;