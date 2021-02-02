import { CarouselCard, CarouselImage } from 'react-rainbow-components';

export default function CarouselCardExample() {
    return (
        <div className="rainbow-p-vertical_x-large">
            <CarouselCard
                style={{ maxWidth: 600 }}
                className="rainbow-align-content_center rainbow-m_auto"
            >
                <CarouselImage
                    src="https://react-rainbow.io/images/illustrations/Illustration-rainbow-4.svg"
                    header="First Card"
                    description="First card description."
                    alternativeText="First card accessible description."
                />
                <CarouselImage
                    src="https://react-rainbow.io/images/illustrations/Illustration-rainbow-3.svg"
                    header="Second Card"
                    description="Second card description."
                    alternativeText="Second card accessible description."
                />
                <CarouselImage
                    src="https://react-rainbow.io/images/illustrations/Illustration-rainbow-5.svg"
                    header="Third Card"
                    description="Third card description."
                    alternativeText="Third card accessible description."
                />
            </CarouselCard>
        </div>
    );
}
