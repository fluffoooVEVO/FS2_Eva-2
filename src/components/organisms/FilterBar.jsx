import Button from '../atoms/Button';

function FilterBar({ factions, selected, onSelect }) {
    return (
    <div className="d-flex flex-wrap gap-2 mb-4" role="group" aria-label="Filtrar por facción">
        {factions.map((faction) => (
        <Button
            key={faction}
            size="sm"
            variant={selected === faction ? 'primary' : 'outline-primary'}
            aria-pressed={selected === faction}
            onClick={() => onSelect(faction)}
        >
            {faction}
        </Button>
        ))}
    </div>
    );
}

export default FilterBar;