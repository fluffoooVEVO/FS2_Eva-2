import Text from '../atoms/Text';

function CardBody({ title, faction, type, price }) {
    const formattedPrice = price.toLocaleString('es-CL', {
    style: 'currency',
    currency: 'CLP',
    });

    return (
    <>
        <Text variant="h5" className="card-title mb-1">{title}</Text>
        <Text variant="span" className="badge bg-secondary me-2">{faction}</Text>
        <Text variant="span" className="text-muted small">{type}</Text>
        <Text variant="p" className="fs-5 fw-bold mt-2 mb-0">{formattedPrice}</Text>
    </>
    );
}

export default CardBody;