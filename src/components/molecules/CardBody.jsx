import Text from '../atoms/Text';
import { formatPrice } from '../../utils/formatPrice';

function CardBody({ title, faction, type, price }) {
    const formattedPrice = formatPrice(price);

    return (
    <>
        <Text variant="h5" className="card-title mb-1">{title}</Text>
        <div className="d-flex align-items-center gap-2">
            <Text variant="span" className="badge bg-secondary">{faction}</Text>
            <Text variant="span" className="text-muted small">{type}</Text>
        </div>
        <Text variant="p" className="fs-5 fw-bold mt-2 mb-0">{formattedPrice}</Text>
    </>
    );
}

export default CardBody;